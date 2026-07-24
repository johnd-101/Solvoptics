import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { isAdmin } from "@/lib/permissions";


export async function POST(req: Request) {


const session = await auth();


if (
  !session ||
  !isAdmin(session.user.role)
) {

return NextResponse.json(
{
error:"Unauthorized"
},
{
status:403
}
);

}



const body = await req.json();


const {
firstName,
lastName,
email,
phone,
password,
role
} = body;



const existing =
await prisma.user.findUnique({

where:{
email
}

});


if(existing){

return NextResponse.json(
{
error:"Email already exists"
},
{
status:400
}
);

}



const hashedPassword =
await bcrypt.hash(
password,
12
);



const user =
await prisma.user.create({

data: {

firstName,
lastName,
email,
phone,
password: hashedPassword,
role

}

});



return NextResponse.json({

id:user.id,

firstName:user.firstName,

lastName:user.lastName,

email:user.email,

phone:user.phone,

role:user.role

});


}