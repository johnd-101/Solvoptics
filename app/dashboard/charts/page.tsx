
import { prisma } from "@/lib/prisma";
import StatusChart from "@/components/charts/StatusChart";

export default async function ChartsPage() {
  // Dashboard Counts
  const [users, practices, supportCalls, appointments] = await Promise.all([
    prisma.user.count(),
    prisma.practice.count(),
    prisma.supportCall.count(),
    prisma.appointment.count(),
  ]);

  // Fetch Support Calls
  const calls = await prisma.supportCall.findMany({
    include: {
      practice: {
        select: {
          practiceName: true,
        },
      },
    },
  });

  // Fetch Appointments
  const appointmentList = await prisma.appointment.findMany({
    select: {
      status: true,
    },
  });

  // ==========================
  // Support Calls by Status
  // ==========================
  const statusCounts = calls.reduce((acc, call) => {
    acc[call.status] = (acc[call.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusData = Object.entries(statusCounts).map(
    ([status, total]) => ({
      status,
      total,
    })
  );

  // ==========================
  // Support Calls by Priority
  // ==========================
  const priorityCounts = calls.reduce((acc, call) => {
    acc[call.priority] = (acc[call.priority] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const priorityData = Object.entries(priorityCounts).map(
    ([status, total]) => ({
      status,
      total,
    })
  );

  // ==========================
  // Support Calls by Practice
  // ==========================
  const practiceCounts = calls.reduce((acc, call) => {
    const practiceName = call.practice.practiceName;

    acc[practiceName] = (acc[practiceName] || 0) + 1;

    return acc;
  }, {} as Record<string, number>);

  const practiceData = Object.entries(practiceCounts).map(
    ([status, total]) => ({
      status,
      total,
    })
  );

  // ==========================
  // Appointments by Status
  // ==========================
  const appointmentCounts = appointmentList.reduce((acc, appointment) => {
    acc[appointment.status] = (acc[appointment.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const appointmentData = Object.entries(appointmentCounts).map(
    ([status, total]) => ({
      status,
      total,
    })
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold">
          📊 Reports & Analytics
        </h1>

        <p className="mt-2 text-blue-100">
          SOLV Help Desk Dashboard
        </p>
      </div>

      {/* KPI Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 p-5 text-white shadow-lg">
          <p className="text-sm uppercase">👤 Users</p>
          <h2 className="mt-2 text-4xl font-bold">
            {users}
          </h2>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-green-500 to-green-700 p-5 text-white shadow-lg">
          <p className="text-sm uppercase">🏥 Practices</p>
          <h2 className="mt-2 text-4xl font-bold">
            {practices}
          </h2>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-red-500 to-pink-600 p-5 text-white shadow-lg">
          <p className="text-sm uppercase">📞 Support Calls</p>
          <h2 className="mt-2 text-4xl font-bold">
            {supportCalls}
          </h2>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-purple-500 to-indigo-700 p-5 text-white shadow-lg">
          <p className="text-sm uppercase">📅 Appointments</p>
          <h2 className="mt-2 text-4xl font-bold">
            {appointments}
          </h2>
        </div>

      </div>

      {/* Charts */}
      <div className="grid gap-8 lg:grid-cols-2">

        <StatusChart
          title="📞 Support Calls by Status"
          data={statusData}
          color="#2563EB"
        />

        <StatusChart
          title="🚨 Support Calls by Priority"
          data={priorityData}
          color="#16A34A"
        />

        <StatusChart
          title="🏥 Support Calls by Practice"
          data={practiceData}
          color="#9333EA"
        />

        <StatusChart
          title="📅 Appointments by Status"
          data={appointmentData}
          color="#7C3AED"
        />

      </div>

    </main>
  );
}