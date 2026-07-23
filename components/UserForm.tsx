"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  role: string;
}

interface UserFormProps {
  user?: User;
}

export default function UserForm({
  user,
}: UserFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
    role: user?.role ?? "USER",
    password: "",
  });

  function updateField(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        user
          ? `/api/users/${user.id}`
          : "/api/users",
        {
          method: user ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed saving user");
        return;
      }

      router.push("/dashboard/users");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-lg shadow p-6 space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={updateField}
          required
          className="border rounded px-3 py-2"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={updateField}
          required
          className="border rounded px-3 py-2"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={updateField}
          required
          className="border rounded px-3 py-2"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={updateField}
          className="border rounded px-3 py-2"
        />

        <select
          name="role"
          value={form.role}
          onChange={updateField}
          className="border rounded px-3 py-2"
        >
          <option value="USER">User</option>
          <option value="SUPPORT">Support Agent</option>
          <option value="ADMIN">Administrator</option>
        </select>

        <input
          name="password"
          type="password"
          placeholder={
            user
              ? "Leave blank to keep current password"
              : "Password"
          }
          value={form.password}
          onChange={updateField}
          required={!user}
          className="border rounded px-3 py-2"
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : user
          ? "Update User"
          : "Save User"}
      </button>
    </form>
  );
}