import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";



export async function GET() {


  try {
    const practices =
      await prisma.practice.findMany({

        orderBy: {

          createdAt: "desc",

        },

      });



    return NextResponse.json(

      practices

    );



   } catch (error) {


    return NextResponse.json(

      {
        error:
          "Failed to fetch practices"
      },

      {
        status: 500
      }

    );


  }

}





export async function POST(

  request: Request

) {


  try {


    const body =
      await request.json();



    const practice =
      await prisma.practice.create({

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

      practice,

      {
        status: 201
      }

    );



  } catch (error) {


    return NextResponse.json(

      {
        error:
          "Failed to create practice"
      },

      {
        status:500
      }

    );


  }

}