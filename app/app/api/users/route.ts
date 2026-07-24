import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){

  try {
    const users =

      await prisma.user.findMany({

        orderBy:{

          createdAt:"desc"

        }

      });

    return NextResponse.json(

      users

    );

  }catch(error){

    return NextResponse.json(

      {

        error:

          "Failed to fetch users"

      },

      {

        status:500

      }

    );

  }

}













export async function POST(

  request:Request

){



  try {



    const body =

      await request.json();







    const user =

      await prisma.user.create({

        data:{



          firstName:

            body.firstName,




          lastName:

            body.lastName,




          email:

            body.email,




          phone:

            body.phone || null,




          role:

            body.role || "USER",




          password:

            body.password



        }


      });







    return NextResponse.json(

      user,


      {

        status:201

      }

    );






  }catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to create user"

      },

      {

        status:500

      }

    );


  }


}