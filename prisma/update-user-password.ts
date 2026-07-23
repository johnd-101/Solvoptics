import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();


async function main(){


const hashedPassword =
await bcrypt.hash(
  "Kayly",
  12
);



await prisma.user.update({

where:{
  id:1
},


data:{
  password:hashedPassword
}

});


console.log("Password updated");


}


main()
.then(()=>prisma.$disconnect())
.catch(async(e)=>{

console.error(e);

await prisma.$disconnect();

});