import Link from "next/link";
import prisma from "@/lib/prisma";
import { createSupportCall } from "../actions";

export default async function NewSupportCallPage() {
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
              📞 New Support Call
            </h1>

            <p className="mt-2 text-blue-100">
              Create a new support call for a practice
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
      <form
        action={createSupportCall}
        className="rounded-2xl bg-white p-8 shadow-2xl space-y-6"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Practice
            </label>

            <select
              name="practiceId"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            >
              <option value="">
                Select Practice
              </option>

              {practices.map((practice) => (
                <option
                  key={practice.id}
                  value={practice.id}
                >
                  {practice.practiceName}
                </option>
              ))}
            </select>

          </div>

          <div>

            <label className="mb-2 block font-semibold text-slate-700">
              Assigned User
            </label>

            <select
              name="userId"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            >
              <option value="">
                Select User
              </option>

              {users.map((user) => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>

          </div>

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Subject
          </label>

          <input
            name="subject"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Description
          </label>

          <textarea
            name="description"
            rows={5}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
          />

        </div>

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Priority
          </label>

          <select
            name="priority"
            defaultValue="Medium"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
          >
            <option value="Low">
              Low
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="High">
              High
            </option>

          </select>

        </div>

        <div className="flex justify-end gap-4">

          <Link
            href="/dashboard/support-calls"
            className="rounded-xl bg-slate-500 px-6 py-3 font-semibold text-white shadow transition hover:bg-slate-600"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            💾 Save Support Call
          </button>

        </div>

      </form>

    </main>
  );
}