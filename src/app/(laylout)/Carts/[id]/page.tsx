import React from 'react';
import { ICart } from '@/types';
import CartCard from '@/components/Cart';

const CartDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/carts/${id}`);
  const data: ICart = await response.json();

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Cart #{id}</h1>
        <CartCard cart={data} />
      </div>
    </section>
  );
};

export default React.memo(CartDetail);
