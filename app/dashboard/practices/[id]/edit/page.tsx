import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import PracticeForm from "@/components/PracticeForm";

interface EditPracticePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPracticePage({
  params,
}: EditPracticePageProps) {
  const { id } = await params;

  const practice = await prisma.practice.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!practice) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              🏥 Edit Practice
            </h1>

            <p className="mt-2 text-lg text-blue-100">
              Update the practice information.
            </p>
          </div>

          <Link
            href="/dashboard/practices"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition-all hover:scale-105 hover:bg-indigo-50"
          >
            ← Back to Practices
          </Link>

        </div>

      </div>

      {/* Form */}
      <div className="rounded-3xl bg-white shadow-2xl">

        <div className="border-b bg-gradient-to-r from-slate-50 to-indigo-50 px-8 py-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Practice Information
          </h2>

          <p className="mt-1 text-gray-500">
            Update the practice details below and click
            <strong> Update Practice</strong>.
          </p>
        </div>

        <div className="p-8">
          <PracticeForm practice={practice} />
        </div>

      </div>

    </main>
  );
}