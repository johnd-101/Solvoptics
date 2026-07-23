import Link from "next/link";
import type { Route } from "next";
import { prisma } from "@/lib/prisma";
import StatusChart from "@/components/charts/StatusChart";

interface DashboardCardProps {
  title: string;
  value: number;
  link: Route;
  color: string;
}

export default async function DashboardPage() {
  const [
    users,
    practices,
    calls,
    tasks,
    appointments,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.practice.count(),
    prisma.supportCall.count(),
    prisma.task.count(),
    prisma.appointment.count(),
  ]);

  const chartData = [
    { status: "Open", total: 18 },
    { status: "Pending", total: 9 },
    { status: "Closed", total: 37 },
    { status: "Escalated", total: 4 },
  ];

  return (
    <main className="space-y-6">
      {/* Header */}
      <div className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-5 text-white shadow-lg">
        <h1 className="text-3xl font-bold">
          SOLV Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Help Desk Management System
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <DashboardCard
          title="👤 Users"
          value={users}
          link={"/dashboard/users"}
          color="from-sky-500 to-blue-700"
        />

        <DashboardCard
          title="🏥 Practices"
          value={practices}
          link={"/dashboard/practices"}
          color="from-green-500 to-emerald-700"
        />

        <DashboardCard
          title="📞 Support Calls"
          value={calls}
          link={"/dashboard/support-calls"}
          color="from-red-500 to-pink-700"
        />

        <DashboardCard
          title="✅ Tasks"
          value={tasks}
          link={"/dashboard/tasks"}
          color="from-yellow-400 to-orange-500"
        />

        <DashboardCard
          title="📅 Appointments"
          value={appointments}
          link={"/dashboard/appointments"}
          color="from-purple-500 to-indigo-700"
        />
      </div>

      {/* Chart */}
      <div className="rounded-2xl bg-white p-6 shadow-xl">
        <StatusChart
          title="Support Calls by Status"
           link={"/dashboard/charts"}
          data={chartData}
          color="#2563EB"
        />
      </div>

      {/* Analytics */}
      <div className="flex justify-end">
        <Link
          href={"/dashboard/charts" as Route}
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
        >
          📊 View Analytics
        </Link>
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
  link,
  color,
}: DashboardCardProps) {
  return (
    <Link
      href={link}
      className={`rounded-2xl bg-gradient-to-r ${color} p-6 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      <p className="text-sm opacity-90">
        {title}
      </p>

      <h2 className="mt-3 text-5xl font-bold">
        {value}
      </h2>

      <p className="mt-4 text-sm opacity-80">
        View Details →
      </p>
    </Link>
  );
}
