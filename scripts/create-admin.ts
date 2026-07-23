import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";


async function main() {

  const password = await bcrypt.hash(
    "admin123",
    10
  );


  await prisma.user.create({

    data: {

      firstName: "Administrator",

      lastName: "Admin",

      email: "admin@solv.co.za",

      password,

      role: "ADMIN"

    }

  });


  console.log("Admin user created.");

}


main()

  .catch(console.error)

  .finally(async () => {

    await prisma.$disconnect();

  });