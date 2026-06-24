import { PrismaClient, UserRole } from "../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("Admin@123456", 12);

  await prisma.user.upsert({
    where: { email: "admin@debtflow.local" },
    update: {
      name: "Debt Flow Admin",
      role: UserRole.ADMIN,
      status: "ACTIVE",
      passwordHash,
    },
    create: {
      name: "Debt Flow Admin",
      email: "admin@debtflow.local",
      role: UserRole.ADMIN,
      passwordHash,
    },
  });
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
