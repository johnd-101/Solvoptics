import Link from "next/link";
import { createPractice } from "../actions";

export default function NewPracticePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">

      {/* Header */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              🏥 Create Practice
            </h1>

            <p className="mt-2 text-blue-100">
              Register a new medical practice
            </p>
          </div>

          <Link
            href="/dashboard/practices"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow-lg transition hover:scale-105 hover:bg-indigo-50"
          >
            ← Back
          </Link>

        </div>

      </div>

      {/* Form */}
      <form
        action={createPractice}
        className="rounded-2xl bg-white p-8 shadow-2xl space-y-6"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Practice Name
            </label>

            <input
              name="practiceName"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Contact Person
            </label>

            <input
              name="contactPerson"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Phone
            </label>

            <input
              name="phone"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />
          </div>

        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">
            Address
          </label>

          <textarea
            name="addressLine"
            rows={4}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              City
            </label>

            <input
              name="city"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Province
            </label>

            <input
              name="province"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Postal Code
            </label>

            <input
              name="postalCode"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />
          </div>

        </div>

        <div className="flex justify-end gap-4">

          <Link
            href="/dashboard/practices"
            className="rounded-xl bg-slate-500 px-6 py-3 font-semibold text-white shadow transition hover:bg-slate-600"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            💾 Save Practice
          </button>

        </div>

      </form>

    </main>
  );
}