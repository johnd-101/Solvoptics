import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import SupportCallForm from "@/components/SupportCallForm";

interface EditSupportCallPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditSupportCallPage({
  params,
}: EditSupportCallPageProps) {
  const { id } = await params;

  const supportCall = await prisma.supportCall.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!supportCall) {
    notFound();
  }

  const practices = await prisma.practice.findMany({
    orderBy: {
      practiceName: "asc",
    },
  });

  const users = await prisma.user.findMany({
    orderBy: {
      firstName: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">
      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              ✏️ Edit Support Call
            </h1>

            <p className="mt-2 text-blue-100">
              Update support call details
            </p>
          </div>

          <Link
            href="/dashboard/support-calls"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow-lg transition hover:scale-105 hover:bg-indigo-50"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-2xl bg-white p-8 shadow-2xl">
        <SupportCallForm
          supportCall={supportCall}
          practices={practices}
          users={users}
        />
      </div>
    </main>
  );
}