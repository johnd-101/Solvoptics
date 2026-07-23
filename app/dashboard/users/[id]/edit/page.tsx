import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import UserForm from "@/components/UserForm";

interface EditUserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditUserPage({
  params,
}: EditUserPageProps) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!user) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              ✏️ Edit User
            </h1>

            <p className="mt-2 text-blue-100">
              Update user information.
            </p>
          </div>

          <Link
            href="/dashboard/users"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:scale-105 hover:bg-indigo-50"
          >
            ← Back to Users
          </Link>

        </div>

      </div>

      {/* Form */}
      <div className="rounded-2xl bg-white p-8 shadow-2xl">

        <UserForm user={user} />

      </div>

    </main>
  );
}