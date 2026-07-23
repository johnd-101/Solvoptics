"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";



export async function createPractice(
  formData: FormData
) {

  const practiceName =
    formData.get("practiceName") as string;

  const contactPerson =
    formData.get("contactPerson") as string;

  const email =
    formData.get("email") as string;

  const phone =
    formData.get("phone") as string;

  const addressLine =
    formData.get("addressLine") as string;

  const city =
    formData.get("city") as string;

  const province =
    formData.get("province") as string;

  const postalCode =
    formData.get("postalCode") as string;



  await prisma.practice.create({

    data: {

      practiceName,

      contactPerson,

      email,

      phone,

      addressLine,

      city,

      province,

      postalCode,

    },

  });



  revalidatePath(
    "/dashboard/practices"
  );

}




export async function deletePractice(
  id: number
) {

  await prisma.practice.delete({

    where: {
      id,
    },

  });



  revalidatePath(
    "/dashboard/practices"
  );

}




export async function updatePractice(
  id: number,
  formData: FormData
) {


  await prisma.practice.update({

    where: {
      id,
    },


    data: {

      practiceName:
        formData.get("practiceName") as string,


      contactPerson:
        formData.get("contactPerson") as string,


      email:
        formData.get("email") as string,


      phone:
        formData.get("phone") as string,


      addressLine:
        formData.get("addressLine") as string,


      city:
        formData.get("city") as string,


      province:
        formData.get("province") as string,


      postalCode:
        formData.get("postalCode") as string,

    },

  });



  revalidatePath(
    "/dashboard/practices"
  );

}