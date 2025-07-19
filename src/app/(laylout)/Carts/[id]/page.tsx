
interface PageProps {
  params: {
    id: string;
  };
}


const CartDetailPage = async ({ params }: PageProps) => {
  const res = await fetch(`https://dummyjson.com/carts/${params.id}`);
  const cart = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">cart #{cart.id}</h1>
      <ul className="grid grid-cols-2 gap-4">
        {cart.products.map((product: any) => (
          <li key={product.id} className="border p-3 rounded shadow">
            <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover mb-2 rounded" />
            <p className="font-semibold">{product.title}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDetailPage;
