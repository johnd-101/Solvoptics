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



  const appointmentId=

    Number(id);







  try {



    const appointment =

      await prisma.appointment.findUnique({

        where:{

          id:appointmentId

        },


        include:{

          practice:true,

          user:true

        }


      });






    if(!appointment){



      return NextResponse.json(

        {

          error:

            "Appointment not found"

        },


        {

          status:404

        }

      );


    }







    return NextResponse.json(

      appointment

    );






  }catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to load appointment"

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



  const appointmentId=

    Number(id);







  try {



    const body =

      await request.json();







    const appointment =

      await prisma.appointment.update({

        where:{

          id:appointmentId

        },


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

            body.status



        }


      });







    return NextResponse.json(

      appointment

    );







  }catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to update appointment"

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



  const appointmentId=

    Number(id);







  try {



    await prisma.appointment.delete({

      where:{

        id:appointmentId

      }

    });







    return NextResponse.json({

      message:

        "Appointment deleted"

    });







  }catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to delete appointment"

      },


      {

        status:500

      }

    );


  }


}