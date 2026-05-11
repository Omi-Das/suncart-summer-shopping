"use client"
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    await authClient.signIn.email({ email, password }, {
      onSuccess: () => router.push("/"),
      onError: (ctx) => alert(ctx.error.message)
    });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded-xl shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4 text-black">
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="w-full border p-2 rounded" required />
        <button className="w-full bg-blue-600 text-white py-2 rounded font-bold">Login</button>
      </form>
      <button onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })} className="w-full mt-4 border py-2 rounded">Google Login</button>
      <p className="mt-4">New? <Link href="/register" className="text-blue-600">Register</Link></p>
    </div>
  );
}
