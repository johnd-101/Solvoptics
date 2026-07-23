"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";



interface PracticeFormProps {
  practice?: {
    id: number;
    practiceName: string;
    contactPerson: string | null;
    phone: string |null;
    email: string | null;
    addressLine: string | null;
    city: string | null;
    province: string | null;
    postalCode: string | null;
  };
}

export default function PracticeForm({
  practice,
}: PracticeFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    practiceName: practice?.practiceName ?? "",
    contactPerson: practice?.contactPerson ?? "",
    phone: practice?.phone ?? "",
    email: practice?.email ?? "",
    addressLine: practice?.addressLine ?? "",
    city: practice?.city ?? "",
    province: practice?.province ?? "",
    postalCode: practice?.postalCode ?? "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const response = await fetch(
      practice
        ? `/api/practices/${practice.id}`
        : "/api/practices",
      {
        method: practice ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    setLoading(false);

    if (response.ok) {
      router.push("/dashboard/practices");
      router.refresh();
    } else {
      alert(
        practice
          ? "Failed to update practice"
          : "Failed to create practice"
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-xl"
    >
      <div>
        <label className="mb-2 block font-medium">
          Practice Name
        </label>

        <input
          name="practiceName"
          value={form.practiceName}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Contact Person
        </label>

        <input
          name="contactPerson"
          value={form.contactPerson}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Phone
        </label>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Address
        </label>

        <input
          name="addressLine"
          value={form.addressLine}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            City
          </label>

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Province
          </label>

          <input
            name="province"
            value={form.province}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Postal Code
          </label>

          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>
      </div>

      <button
        disabled={loading}
        className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        {loading
          ? "Saving..."
          : practice
          ? "Update Practice"
          : "Save Practice"}
      </button>
    </form>
  );
}