import Cart from "@/components/Cart";

export default async function CartList() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">All</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.carts.map((cart: any) => (
          <Cart
            key={cart.id}
            id={cart.id}
            userId={cart.userId}
            total={cart.total}
            totalProducts={cart.totalProducts}
            totalQuantity={cart.totalQuantity}
            thumbnail={cart.products[0]?.thumbnail || "https://via.placeholder.com/150"}
          />
        ))}
      </div>
    </div>
  );
}
