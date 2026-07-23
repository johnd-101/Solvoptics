"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Practice {
  id: number;
  practiceName: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface SupportCall {
  id: number;
  practiceId: number;
  userId: number | null;
  subject: string;
  description: string | null;
  priority: string;
  status: string;
}

interface SupportCallFormProps {
  practices: Practice[];
  users: User[];
  supportCall?: SupportCall;
}

export default function SupportCallForm({
  practices,
  users,
  supportCall,
}: SupportCallFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    practiceId: supportCall?.practiceId ?? practices[0]?.id ?? 0,
    userId: supportCall?.userId ?? users[0]?.id ?? 0,
    subject: supportCall?.subject ?? "",
    description: supportCall?.description ?? "",
    priority: supportCall?.priority ?? "Medium",
    status: supportCall?.status ?? "Open",
  });

  function updateField(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "practiceId" || name === "userId"
          ? Number(value)
          : value,
    }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        supportCall
          ? `/api/support-calls/${supportCall.id}`
          : "/api/support-calls",
        {
          method: supportCall ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to save support call");
        return;
      }

      router.push("/dashboard/support-calls");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-4 rounded-lg bg-white p-6 shadow"
    >
      <div>
        <label className="mb-1 block font-medium">
          Practice
        </label>

        <select
          name="practiceId"
          value={form.practiceId}
          onChange={updateField}
          className="w-full rounded border p-2"
        >
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
        <label className="mb-1 block font-medium">
          Assigned User
        </label>

        <select
          name="userId"
          value={form.userId}
          onChange={updateField}
          className="w-full rounded border p-2"
        >
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

      <div>
        <label className="mb-1 block font-medium">
          Subject
        </label>

        <input
          name="subject"
          value={form.subject}
          onChange={updateField}
          className="w-full rounded border p-2"
          required
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Description
        </label>

        <textarea
          name="description"
          rows={4}
          value={form.description}
          onChange={updateField}
          className="w-full rounded border p-2"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Priority
        </label>

        <select
          name="priority"
          value={form.priority}
          onChange={updateField}
          className="w-full rounded border p-2"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={updateField}
          className="w-full rounded border p-2"
        >
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : supportCall
          ? "Update Support Call"
          : "Create Support Call"}
      </button>
    </form>
  );
}