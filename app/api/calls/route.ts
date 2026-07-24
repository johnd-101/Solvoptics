import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";



export async function GET() {


  try {


    const calls =

      await prisma.supportCall.findMany({

        include: {

          practice: true,

          user: true,

          notes: true

        },


        orderBy: {

          createdAt: "desc"

        }

      });





    return NextResponse.json(

      calls

    );




  } catch (error) {


    return NextResponse.json(

      {

        error:

          "Failed to fetch support calls"

      },

      {

        status:500

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






    const call =

      await prisma.supportCall.create({

        data: {


          practiceId:

            Number(body.practiceId),



          userId:

            body.userId

              ? Number(body.userId)

              : null,



          subject:

            body.subject,



          description:

            body.description || null,



          priority:

            body.priority || "Medium",



          status:

            body.status || "Open"


        }


      });







    return NextResponse.json(

      call,

      {

        status:201

      }

    );






  } catch(error) {



    return NextResponse.json(

      {

        error:

          "Failed to create support call"

      },

      {

        status:500

      }

    );


  }


}