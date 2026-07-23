import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";





export async function GET(){



  try {



    const tasks =

      await prisma.task.findMany({

        include:{

          user:true

        },


        orderBy:{

          createdAt:"desc"

        }


      });






    return NextResponse.json(

      tasks

    );







  } catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to fetch tasks"

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








    const task =

      await prisma.task.create({

        data:{


          userId:

            Number(body.userId),



          title:

            body.title,



          description:

            body.description || null,



          priority:

            body.priority || "Medium",



          status:

            body.status || "Pending",



          dueDate:

            body.dueDate

              ? new Date(body.dueDate)

              : null


        }


      });







    return NextResponse.json(

      task,

      {

        status:201

      }

    );







  } catch(error){



    return NextResponse.json(

      {

        error:

          "Failed to create task"

      },

      {

        status:500

      }

    );



  }


}