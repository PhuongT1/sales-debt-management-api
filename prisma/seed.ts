import {
  CollectionStatus,
  DebtStatus,
  DebtType,
  PartyType,
  PaymentMethod,
  Prisma,
  PrismaClient,
  UserRole,
} from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { loadEnvFile } from 'node:process';
import * as bcrypt from 'bcryptjs';

loadEnvFile('.env');

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is required to seed the database.');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg(databaseUrl),
});

async function main() {
  const passwordHash = await bcrypt.hash('Admin@123456', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@debtflow.local' },
    update: {
      name: 'Debt Flow Admin',
      phone: '0900000000',
      role: UserRole.ADMIN,
      status: 'ACTIVE',
      passwordHash,
    },
    create: {
      name: 'Debt Flow Admin',
      email: 'admin@debtflow.local',
      phone: '0900000000',
      role: UserRole.ADMIN,
      passwordHash,
    },
  });

  const paymentParty = await prisma.party.upsert({
    where: { code: 'DEMO-PAYMENT-PARTNER' },
    update: {
      type: PartyType.BOTH,
      name: 'Đối tác thanh toán mẫu',
      phone: '0900999000',
      email: 'payment.demo@debtflow.local',
      note: 'Dữ liệu mẫu được tạo bởi prisma/seed.ts.',
      isActive: true,
      createdById: admin.id,
      assignedToId: admin.id,
    },
    create: {
      code: 'DEMO-PAYMENT-PARTNER',
      type: PartyType.BOTH,
      name: 'Đối tác thanh toán mẫu',
      phone: '0900999000',
      email: 'payment.demo@debtflow.local',
      note: 'Dữ liệu mẫu được tạo bởi prisma/seed.ts.',
      isActive: true,
      createdById: admin.id,
      assignedToId: admin.id,
    },
  });

  const debtFixtures = [
    {
      code: 'DEMO-PAY-RECEIVABLE-001',
      type: DebtType.RECEIVABLE,
      title: 'Hóa đơn bán hàng trả góp mẫu',
      invoiceNo: 'INV-DEMO-001',
      originalAmount: new Prisma.Decimal('12000000'),
      paymentAmount: new Prisma.Decimal('500000'),
      paymentCount: 14,
      paymentPrefix: 'receipt',
      firstPaymentAt: new Date('2025-07-15T02:00:00.000Z'),
    },
    {
      code: 'DEMO-PAY-PAYABLE-001',
      type: DebtType.PAYABLE,
      title: 'Hóa đơn nhà cung cấp trả nhiều đợt mẫu',
      invoiceNo: 'BILL-DEMO-001',
      originalAmount: new Prisma.Decimal('10000000'),
      paymentAmount: new Prisma.Decimal('700000'),
      paymentCount: 11,
      paymentPrefix: 'disbursement',
      firstPaymentAt: new Date('2025-09-05T02:00:00.000Z'),
    },
  ] as const;

  let seededPaymentCount = 0;

  for (const fixture of debtFixtures) {
    const debt = await prisma.debt.upsert({
      where: { code: fixture.code },
      update: {
        type: fixture.type,
        partyId: paymentParty.id,
        assignedToId: admin.id,
        title: fixture.title,
        invoiceNo: fixture.invoiceNo,
        originalAmount: fixture.originalAmount,
        currency: 'VND',
        issueDate: new Date('2025-06-01T00:00:00.000Z'),
        dueDate: new Date('2026-12-31T00:00:00.000Z'),
        collectionStatus: CollectionStatus.CONTACTED,
        createdById: admin.id,
      },
      create: {
        code: fixture.code,
        type: fixture.type,
        partyId: paymentParty.id,
        assignedToId: admin.id,
        title: fixture.title,
        invoiceNo: fixture.invoiceNo,
        originalAmount: fixture.originalAmount,
        currency: 'VND',
        issueDate: new Date('2025-06-01T00:00:00.000Z'),
        dueDate: new Date('2026-12-31T00:00:00.000Z'),
        collectionStatus: CollectionStatus.CONTACTED,
        createdById: admin.id,
      },
    });

    for (let index = 0; index < fixture.paymentCount; index += 1) {
      const sequence = String(index + 1).padStart(2, '0');
      const paidAt = new Date(fixture.firstPaymentAt);
      paidAt.setUTCMonth(paidAt.getUTCMonth() + index);
      const method = [PaymentMethod.BANK_TRANSFER, PaymentMethod.CASH, PaymentMethod.OTHER][
        index % 3
      ];

      await prisma.payment.upsert({
        where: { id: `seed-payment-${fixture.paymentPrefix}-${sequence}` },
        update: {
          debtId: debt.id,
          amount: fixture.paymentAmount,
          paidAt,
          method,
          referenceNo: `DEMO-${fixture.paymentPrefix.toUpperCase()}-${sequence}`,
          note: `Thanh toán mẫu kỳ ${index + 1}.`,
          createdById: admin.id,
        },
        create: {
          id: `seed-payment-${fixture.paymentPrefix}-${sequence}`,
          debtId: debt.id,
          amount: fixture.paymentAmount,
          paidAt,
          method,
          referenceNo: `DEMO-${fixture.paymentPrefix.toUpperCase()}-${sequence}`,
          note: `Thanh toán mẫu kỳ ${index + 1}.`,
          createdById: admin.id,
        },
      });
      seededPaymentCount += 1;
    }

    const paymentAggregate = await prisma.payment.aggregate({
      where: { debtId: debt.id },
      _sum: { amount: true },
    });
    const paidAmount = paymentAggregate._sum.amount ?? new Prisma.Decimal(0);
    const status = paidAmount.greaterThanOrEqualTo(fixture.originalAmount)
      ? DebtStatus.PAID
      : paidAmount.greaterThan(0)
        ? DebtStatus.PARTIAL
        : DebtStatus.OPEN;

    await prisma.debt.update({
      where: { id: debt.id },
      data: { paidAmount, status },
    });
  }

  console.log(`Seeded admin, payment demo partner, 2 debts and ${seededPaymentCount} payments.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
