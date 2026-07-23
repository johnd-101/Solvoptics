import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Dashboard Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">
              Total Support Calls
            </h3>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              60
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">
              Open Calls
            </h3>

            <p className="mt-2 text-3xl font-bold text-red-600">
              15
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">
              Closed Calls
            </h3>

            <p className="mt-2 text-3xl font-bold text-green-600">
              32
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">
              Pending Calls
            </h3>

            <p className="mt-2 text-3xl font-bold text-yellow-600">
              8
            </p>
          </div>

        </div>

        {/* Welcome Card */}
        <div className="mx-auto max-w-lg rounded-xl bg-white p-10 text-center shadow-lg">

          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            SOLV Support System
          </h1>

          <p className="mb-8 text-gray-600">
            Manage optometry practices, support calls,
            appointments, tasks and users.
          </p>

          <Link
            href="/login"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Open Dashboard
          </Link>

        </div>

      </div>
    </main>
  );
}