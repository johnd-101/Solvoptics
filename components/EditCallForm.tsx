import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import TaskForm from "@/components/TaskForm";

interface EditTaskPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditTaskPage({
  params,
}: EditTaskPageProps) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: true,
    },
  });

  if (!task) {
    notFound();
  }

  const users = await prisma.user.findMany({
    orderBy: {
      firstName: "asc",
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              ✏️ Edit Task
            </h1>

            <p className="mt-2 text-blue-100">
              Update task details
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow-lg transition hover:scale-105 hover:bg-indigo-50"
          >
            ← Back
          </Link>

        </div>

      </div>

      {/* Form */}
      <div className="rounded-2xl bg-white p-8 shadow-2xl">

        <TaskForm
          users={users}
          task={{
            id: task.id,
            title: task.title,
            description: task.description,
            priority: task.priority,
            status: task.status,
            dueDate: task.dueDate,
            userId: task.userId,
          }}
        />

      </div>

    </main>
  );
}