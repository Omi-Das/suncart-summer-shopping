import products from "@/data/products.json";
import Link from "next/link";

export default function Home() {
  const popular = products.slice(0, 3);

  return (
    <div>
      <section className="bg-yellow-400 py-20 text-center">
        <h1 className="text-4xl font-bold">Summer Sale 50% OFF 🔥</h1>
        <p className="mt-2 font-semibold">Hot Deals Just for You!</p>
      </section>

      <section className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {popular.map(p => (
          <div key={p.id} className="border p-4 rounded shadow-lg">
            <img src={p.image} className="w-full h-40 object-cover rounded" />
            <h3 className="font-bold mt-2">{p.name}</h3>
            <p>⭐ {p.rating} | ${p.price}</p>
            <Link href={`/products/${p.id}`}>
              <button className="w-full bg-black text-white py-2 mt-3 rounded">View Details</button>
            </Link>
          </div>
        ))}
      </section>

      <section className="bg-blue-100 p-10 text-center">
        <h2 className="text-xl font-bold">Summer Care Tips 💧</h2>
        <p>Drink water and use sunscreen daily!</p>
      </section>
    </div>
  );
}
