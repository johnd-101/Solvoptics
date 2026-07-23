import Link from "next/link";
import prisma from "@/lib/prisma";
import AppointmentForm from "@/components/AppointmentForm";

export default async function NewAppointmentPage() {
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
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              📅 Add Appointment
            </h1>

            <p className="mt-2 text-blue-100">
              Schedule a new appointment for a practice
            </p>
          </div>

          <Link
            href="/dashboard/appointments"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:scale-105 hover:bg-indigo-50"
          >
            ← Back to Appointments
          </Link>

        </div>

      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-2xl">

        <AppointmentForm
          practices={practices}
          users={users}
        />

      </div>

    </main>
  );
}