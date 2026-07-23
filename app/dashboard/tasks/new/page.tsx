import Link from "next/link";
import prisma from "@/lib/prisma";
import TaskForm from "@/components/TaskForm";

export default async function NewTaskPage() {
  const users = await prisma.user.findMany({
    orderBy: {
      firstName: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              ✅ New Task
            </h1>

            <p className="mt-2 text-blue-100">
              Create and assign a new task.
            </p>
          </div>

          <Link
            href="/dashboard/tasks"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:scale-105 hover:bg-indigo-50"
          >
            ← Back to Tasks
          </Link>

        </div>

      </div>

      {/* Form Card */}
      <div className="rounded-2xl bg-white p-8 shadow-2xl">

        <TaskForm users={users} />

      </div>

    </main>
  );
}