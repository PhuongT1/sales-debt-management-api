import { PrismaClient, UserRole } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { loadEnvFile } from "node:process";
import * as bcrypt from "bcryptjs";

loadEnvFile(".env");

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to seed the database.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg(databaseUrl),
});

async function main() {
  const passwordHash = await bcrypt.hash("Admin@123456", 12);

  await prisma.user.upsert({
    where: { email: "admin@debtflow.local" },
    update: {
      name: "Debt Flow Admin",
      phone: "0900000000",
      role: UserRole.ADMIN,
      status: "ACTIVE",
      passwordHash,
    },
    create: {
      name: "Debt Flow Admin",
      email: "admin@debtflow.local",
      phone: "0900000000",
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
