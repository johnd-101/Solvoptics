"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";



export async function createSupportCall(
  formData: FormData
) {

  const practiceId =
    Number(formData.get("practiceId"));

  const userId =
    Number(formData.get("userId")) || undefined;


  const subject =
    formData.get("subject") as string;


  const description =
    formData.get("description") as string;


  const priority =
    formData.get("priority") as string;



  await prisma.supportCall.create({

    data: {

      practiceId,

      userId,

      subject,

      description,

      priority: priority || "Medium",

      status: "Open",

    },

  });



  revalidatePath(
    "/dashboard/support-calls"
  );

}





export async function deleteSupportCall(
  id: number
) {


  await prisma.supportCall.delete({

    where: {
      id,
    },

  });



  revalidatePath(
    "/dashboard/support-calls"
  );

}





export async function updateSupportCall(
  id: number,
  formData: FormData
) {


  await prisma.supportCall.update({

    where: {
      id,
    },


    data: {

      subject:
        formData.get("subject") as string,


      description:
        formData.get("description") as string,


      priority:
        formData.get("priority") as string,


      status:
        formData.get("status") as string,

    },

  });



  revalidatePath(
    "/dashboard/support-calls"
  );

}