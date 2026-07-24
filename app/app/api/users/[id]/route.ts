import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";



interface RouteProps {

  params: Promise<{

    id:string;

  }>;

}

export async function GET(

  request:Request,

  {
    params

  }:RouteProps

){

  const {id}=

    await params;

  const userId=

    Number(id);


  try {

    const user =

      await prisma.user.findUnique({

        where:{

          id:userId

        }


      });


    if(!user){

      return NextResponse.json(

        {

          error:

            "User not found"

        },

        {

          status:404

        }

      );


    }

    return NextResponse.json(

      user

    );

  }catch(error){


    return NextResponse.json(

      {

        error:

          "Failed to load user"

      },

      {

        status:500

      }

    );


  }


}












export async function PUT(

  request:Request,

  {
    params

  }:RouteProps

){



  const {id}=

    await params;



  const userId=

    Number(id);








  try {



    const body =

      await request.json();







    const user =

      await prisma.user.update({

        where:{

          id:userId

        },


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

            body.role



        }


      });








    return NextResponse.json(

      user

    );







  }catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to update user"

      },

      {

        status:500

      }

    );


  }


}












export async function DELETE(

  request:Request,

  {
    params

  }:RouteProps

){



  const {id}=

    await params;



  const userId=

    Number(id);







  try {



    await prisma.user.delete({

      where:{

        id:userId

      }

    });








    return NextResponse.json({

      message:

        "User deleted"

    });








  }catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to delete user"

      },

      {

        status:500

      }

    );


  }


}