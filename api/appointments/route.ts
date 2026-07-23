import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";







export async function GET(){



  try {



    const appointments =

      await prisma.appointment.findMany({

        include:{


          practice:true,


          user:true


        },


        orderBy:{


          appointmentDate:"asc"


        }


      });







    return NextResponse.json(

      appointments

    );








  }catch(error){



    return NextResponse.json(

      {


        error:

          "Failed to fetch appointments"


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







    const appointment =

      await prisma.appointment.create({

        data:{



          practiceId:

            Number(body.practiceId),




          userId:

            body.userId

              ? Number(body.userId)

              : null,





          title:

            body.title,





          description:

            body.description || null,





          appointmentDate:

            new Date(

              body.appointmentDate

            ),





          status:

            body.status || "Scheduled"



        }


      });







    return NextResponse.json(

      appointment,


      {


        status:201


      }


    );






  }catch(error){



    return NextResponse.json(

      {


        error:

          "Failed to create appointment"


      },


      {


        status:500


      }


    );



  }


}