"use client"
import products from "@/data/products.json";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductDetails({ params }) {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const product = products.find(p => p.id === params.id);

  useEffect(() => {
    if (!isPending && !session) router.push("/login");
  }, [session, isPending]);

  if (isPending || !session) return <p className="p-20 text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-10 flex gap-10">
      <img src={product.image} className="w-1/2 rounded shadow" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-green-600 font-bold">${product.price}</p>
        <p>{product.description}</p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded font-bold">Add to Cart</button>
      </div>
    </div>
  );
}
