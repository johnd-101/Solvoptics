import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import AppointmentForm from "@/components/AppointmentForm";

interface EditAppointmentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditAppointmentPage({
  params,
}: EditAppointmentPageProps) {
  const { id } = await params;

  const appointment = await prisma.appointment.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: true,
      practice: true,
    },
  });

  if (!appointment) {
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

  const practices = await prisma.practice.findMany({
    orderBy: {
      practiceName: "asc",
    },
    select: {
      id: true,
      practiceName: true,
    },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              📅 Edit Appointment
            </h1>

            <p className="mt-2 text-lg text-blue-100">
              Update the appointment details.
            </p>
          </div>

          <Link
            href="/dashboard/appointments"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition-all hover:scale-105 hover:bg-indigo-50"
          >
            ← Back to Appointments
          </Link>

        </div>

      </div>

      {/* Form */}
      <div className="rounded-3xl bg-white shadow-2xl">

        <div className="border-b bg-gradient-to-r from-slate-50 to-indigo-50 px-8 py-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Appointment Information
          </h2>

          <p className="mt-1 text-gray-500">
            Update the appointment details below and click
            <strong> Update Appointment</strong>.
          </p>

        </div>

        <div className="p-8">

          <AppointmentForm
            appointment={appointment}
            users={users}
            practices={practices}
          />

        </div>

      </div>

    </main>
  );
}