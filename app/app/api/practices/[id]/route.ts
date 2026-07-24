import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";



interface RouteProps {

  params: Promise<{
    id: string;
  }>;

}





export async function GET(

  request: Request,

  {
    params

  }: RouteProps

) {


  const { id } =
    await params;


  const practiceId =
    Number(id);



  try {


    const practice =
      await prisma.practice.findUnique({

        where: {

          id: practiceId,

        },

      });



    if (!practice) {


      return NextResponse.json(

        {
          error:
            "Practice not found"
        },

        {
          status:404
        }

      );


    }




    return NextResponse.json(

      practice

    );



  } catch (error) {


    return NextResponse.json(

      {
        error:
          "Failed to load practice"
      },

      {
        status:500
      }

    );


  }

}





export async function PUT(

  request: Request,

  {
    params

  }: RouteProps

) {


  const { id } =
    await params;


  const practiceId =
    Number(id);



  try {


    const body =
      await request.json();




    const practice =
      await prisma.practice.update({

        where: {

          id: practiceId,

        },


        data: {


          practiceName:
            body.practiceName,


          contactPerson:
            body.contactPerson || null,


          email:
            body.email || null,


          phone:
            body.phone || null,


          addressLine:
            body.addressLine || null,


          city:
            body.city || null,


          province:
            body.province || null,


          postalCode:
            body.postalCode || null,


        },

      });





    return NextResponse.json(

      practice

    );



  } catch (error) {


    return NextResponse.json(

      {
        error:
          "Failed to update practice"
      },

      {
        status:500
      }

    );


  }

}





export async function DELETE(

  request: Request,

  {
    params

  }: RouteProps

) {


  const { id } =
    await params;


  const practiceId =
    Number(id);



  try {


    await prisma.practice.delete({

      where: {

        id: practiceId,

      },

    });





    return NextResponse.json({

      message:
        "Practice deleted"

    });



  } catch (error) {


    return NextResponse.json(

      {
        error:
          "Failed to delete practice"
      },

      {
        status:500
      }

    );


  }

}