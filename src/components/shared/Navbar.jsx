"use client"
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; 

export default function Navbar() {
  const { data: session } = authClient.useSession();

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="text-xl font-bold">SUMMER-SHOP</div>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/profile">My Profile</Link>
      </div>
      <div>
        {session ? (
          <div className="flex items-center gap-2">
            <img src={session.user.image} className="w-10 h-10 rounded-full" />
            <button onClick={() => authClient.signOut()} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link href="/login" className="border px-4 py-1 rounded">Login</Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-1 rounded">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
