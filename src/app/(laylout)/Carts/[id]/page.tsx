import React from "react";

interface CartPageProps {
  params: {
    id: string;
  };
}

async function CartDetailPage({ params }: CartPageProps) {
  const res = await fetch(`https://dummyjson.com/carts/${params.id}`);
  const cart = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Cart #{cart.id}</h1>
      <ul className="grid grid-cols-2 gap-4">
        {cart.products.map((product: any) => (
          <li key={product.id} className="border p-3 rounded shadow">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <p className="font-semibold">{product.title}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartDetailPage;

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();

  return data.carts.map((cart: any) => ({
    id: cart.id.toString(),
  }));
}
