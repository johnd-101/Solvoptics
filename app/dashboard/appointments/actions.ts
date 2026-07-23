"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";



export async function createAppointment(
  formData: FormData
) {


  const practiceId =
    Number(formData.get("practiceId"));


  const userId =
    Number(formData.get("userId")) || undefined;


  const title =
    formData.get("title") as string;


  const description =
    formData.get("description") as string;


  const appointmentDate =
    formData.get("appointmentDate") as string;


  const status =
    formData.get("status") as string;



  await prisma.appointment.create({

    data: {

      practiceId,

      userId,

      title,

      description,

      appointmentDate:
        new Date(appointmentDate),

      status:
        status || "Scheduled",

    },

  });



  revalidatePath(
    "/dashboard/appointments"
  );

}





export async function deleteAppointment(
  id: number
) {


  await prisma.appointment.delete({

    where: {
      id,
    },

  });



  revalidatePath(
    "/dashboard/appointments"
  );

}





export async function updateAppointment(
  id: number,
  formData: FormData
) {


  await prisma.appointment.update({

    where: {
      id,
    },


    data: {

      title:
        formData.get("title") as string,


      description:
        formData.get("description") as string,


      appointmentDate:
        new Date(
          formData.get("appointmentDate") as string
        ),


      status:
        formData.get("status") as string,

    },

  });



  revalidatePath(
    "/dashboard/appointments"
  );

}