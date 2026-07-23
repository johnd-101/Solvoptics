import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ViewUserPage({
  params,
}: PageProps) {
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

      <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              👤 User Details
            </h1>
            <p className="mt-2 text-blue-100">
              View user information
            </p>
          </div>

          <Link
            href="/dashboard/users"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700"
          >
            ← Back
          </Link>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-2xl space-y-5">

        <Info label="First Name" value={user.firstName} />
        <Info label="Last Name" value={user.lastName} />
        <Info label="Email" value={user.email} />
        <Info label="Phone" value={user.phone ?? "-"} />
        <Info label="Role" value={user.role} />

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