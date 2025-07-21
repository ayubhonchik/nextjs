import React from 'react';
import Link from 'next/link';
import { ICart } from '@/types';

const CartsPage = async () => {
  const response = await fetch('https://dummyjson.com/carts');
  const { carts }: { carts: ICart[] } = await response.json();

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">All Carts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carts.map((cart) => (
            <Link key={cart.id} href={`/Carts/${cart.id}`}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6">
                <div className="mb-4">
                  <p className="text-xl font-bold text-gray-800">Cart #{cart.id}</p>
                  <p className="text-gray-600">Total: ${cart.total}</p>
                </div>
                <div className="text-gray-500">
                  <p><strong>Total Products:</strong> {cart.totalProducts}</p>
                  <p><strong>Total Quantity:</strong> {cart.totalQuantity}</p>
                </div>
                <div className="mt-4">
                  {cart.products[0]?.image && (
                    <img 
                      src={cart.products[0]?.image} 
                      alt={cart.products[0]?.title} 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartsPage;
