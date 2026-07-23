"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createTask(formData: FormData) {
  await prisma.task.create({
    data: {
      title: String(formData.get("title") ?? ""),
      description:
        String(formData.get("description") ?? "") || null,
      priority: String(formData.get("priority") ?? "Medium"),
      status: String(formData.get("status") ?? "Open"),
      dueDate: formData.get("dueDate")
        ? new Date(String(formData.get("dueDate")))
        : null,
      userId: Number(formData.get("userId")),
    },
  });

  revalidatePath("/dashboard/tasks");
  redirect("/dashboard/tasks");
}

export async function updateTask(
  id: number,
  formData: FormData
) {
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      title: String(formData.get("title") ?? ""),
      description:
        String(formData.get("description") ?? "") || null,
      priority: String(formData.get("priority") ?? "Medium"),
      status: String(formData.get("status") ?? "Open"),
      dueDate: formData.get("dueDate")
        ? new Date(String(formData.get("dueDate")))
        : null,
      userId: Number(formData.get("userId")),
    },
  });

  revalidatePath("/dashboard/tasks");
  revalidatePath(`/dashboard/tasks/${id}/edit`);
  redirect("/dashboard/tasks");
}

export async function deleteTask(id: number) {
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/tasks");
}