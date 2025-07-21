import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const res = await fetch(`https://dummyjson.com/carts/${params.id}`);

  if (!res.ok) return notFound();

  const cart = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cart #{cart.id}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cart.products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Total: ${product.total}</p>
              <p className="text-green-600 font-bold">
                Discounted: ${product.discountedPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
