import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();


async function main(){

const hashedPassword =
await bcrypt.hash(
"Admin@123",
12
);


await prisma.user.update({

where:{
email:"admin@solvsupport.co.za"
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
console.log(e);
await prisma.$disconnect();
});