import Link from "next/link";
import UserForm from "@/components/UserForm";

export default function NewUserPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              👤 New User
            </h1>

            <p className="mt-2 text-blue-100">
              Create a new system user.
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

        <UserForm />

      </div>

    </main>
  );
}