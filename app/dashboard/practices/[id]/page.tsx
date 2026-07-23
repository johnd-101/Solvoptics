import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ViewPracticePage({
  params,
}: PageProps) {
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

      <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">

        <div className="flex justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              🏥 Practice Details
            </h1>

            <p className="mt-2 text-blue-100">
              View practice information
            </p>
          </div>

          <Link
            href="/dashboard/practices"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700"
          >
            ← Back
          </Link>

        </div>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-2xl space-y-5">

        <Info label="Practice Name" value={practice.practiceName} />
        <Info label="Contact Person" value={practice.contactPerson ?? "-"} />
        <Info label="Email" value={practice.email ?? "-"} />
        <Info label="Phone" value={practice.phone ?? "-"} />
        <Info label="Address" value={practice.addressLine ?? "-"} />
        <Info label="City" value={practice.city ?? "-"} />
        <Info label="Province" value={practice.province ?? "-"} />
        <Info label="Postal Code" value={practice.postalCode ?? "-"} />

      </div>

    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-lg text-gray-800">
        {value}
      </p>
    </div>
  );
}