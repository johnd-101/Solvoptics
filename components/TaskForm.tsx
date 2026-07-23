"use client";

import { useState } from "react";
import type { Route } from "next";
import { useRouter } from "next/navigation";

interface TaskFormProps {
  users: {
    id: number;
    firstName: string;
    lastName: string;
  }[];

  task?: {
    id: number;
    title: string;
    description: string | null;
    priority: string;
    status: string;
    dueDate: Date | null;
    userId: number;
  };
}

export default function TaskForm({
  users,
  task,
}: TaskFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  title: task?.title ?? "",
  description: task?.description ?? "",
  priority: task?.priority ?? "Medium",
  status: task?.status ?? "Open",
  userId: task?.userId ?? users[0]?.id ?? 0,
  dueDate: task?.dueDate
    ? new Date(task.dueDate).toISOString().split("T")[0]
    : "",
});
  function updateField(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "userId" ? Number(value) : value,
    }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        task ? `/api/tasks/${task.id}` : "/api/tasks",
        {
          method: task ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to save task");
        return;
      }

      router.push("/dashboard/tasks");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong while saving the task.");
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
          Task Title
        </label>

        <input
          name="title"
          placeholder="Task Title"
          value={form.title}
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
          placeholder="Description"
          value={form.description}
          onChange={updateField}
          rows={4}
          className="w-full rounded border p-2"
        />
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
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Due Date
        </label>

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={updateField}
          className="w-full rounded border p-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : task
          ? "Update Task"
          : "Save Task"}
      </button>
    </form>
  );
}