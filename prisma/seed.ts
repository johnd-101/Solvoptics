import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();


async function main() {

  const password = await bcrypt.hash(
    "Admin@123",
    12
  );


  const admin = await prisma.user.upsert({

    where: {
      email: "admin@solvsupport.co.za"
    },

    update: {},

    create: {

      firstName: "Administrator",

      lastName: "Admin",

      email: "admin@solvsupport.co.za",

      password,

      role: "ADMIN"

    }

  });


  console.log(
    "Admin created:",
    admin.email
  );

}


main()

.then(async () => {

  await prisma.$disconnect();

})

.catch(async (e) => {

  console.error(e);

  await prisma.$disconnect();

  process.exit(1);

});