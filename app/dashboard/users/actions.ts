"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";





export async function createUser(

  formData:FormData

){



  const firstName =

    formData.get("firstName") as string;



  const lastName =

    formData.get("lastName") as string;



  const email =

    formData.get("email") as string;



  const phone =

    formData.get("phone") as string;



  const role =

    formData.get("role") as string;



  const password =

    formData.get("password") as string;







  await prisma.user.create({

    data:{



      firstName,


      lastName,


      email,


      phone: phone || null,


      role,


      password



    }

  });







  redirect(

    "/dashboard/users"

  );


}









export async function updateUser(

  id:number,

  formData:FormData

){



  const firstName =

    formData.get("firstName") as string;



  const lastName =

    formData.get("lastName") as string;



  const email =

    formData.get("email") as string;



  const phone =

    formData.get("phone") as string;



  const role =

    formData.get("role") as string;







  await prisma.user.update({

    where:{

      id

    },


    data:{



      firstName,


      lastName,


      email,


      phone: phone || null,


      role



    }


  });







  redirect(

    "/dashboard/users"

  );


}









export async function deleteUser(

  id:number

){



  await prisma.user.delete({

    where:{

      id

    }

  });






  redirect(

    "/dashboard/users"

  );


}