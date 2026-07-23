"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow w-96">
      <h1 className="text-3xl font-bold mb-6 text-center">
        SOLV Login
      </h1>

      <input
        className="w-full border p-3 rounded mb-4"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full border p-3 rounded mb-6"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={login}
        disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded"
      >
        {loading ? "Signing In..." : "Login"}
      </button>
    </div>
  );
}