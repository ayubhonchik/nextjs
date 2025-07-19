import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  const res = await fetch(`https://dummyjson.com/carts/${params.id}`);
  if (!res.ok) return notFound();

  const cart = await res.json();

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Cart #{cart.id}</h1>
      <p className="text-gray-600 mb-2">User ID: {cart.userId}</p>
      <p className="text-sm mb-4 text-gray-700">
        Mahsulotlar soni: {cart.totalProducts}, quantity: {cart.totalQuantity}
      </p>
      <p className="text-green-600 font-bold mb-4">price: ${cart.total}</p>

      <h3 className="text-lg font-semibold mb-3">Products:</h3>
      <ul className="space-y-2">
        {cart.products.map((product: any) => (
          <li key={product.id} className="flex gap-4 items-center border p-4 rounded-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-20 h-20 object-cover rounded-md border"
            />
            <div className="flex-1">
              <h4 className="font-semibold">{product.title}</h4>
              <p className="text-sm text-gray-500">
                price: ${product.price} ✖ {product.quantity}
              </p>
              <p className="text-sm text-gray-700 font-bold">
                Umumiy: ${product.total}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
