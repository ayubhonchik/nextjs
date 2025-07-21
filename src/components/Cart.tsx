import React from 'react';
import { ICart } from '@/types';

interface Props {
  cart: ICart;
}

const CartCard: React.FC<Props> = ({ cart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <p className="text-xl font-semibold text-gray-800">Cart ID: {cart.id}</p>
        <p className="text-gray-600">Total Products: {cart.totalProducts}</p>
        <p className="text-gray-600">Total Quantity: {cart.totalQuantity}</p>
        <p className="text-xl font-semibold text-gray-800 mt-2">Total Price: ${cart.total}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Products:</h2>
        <ul className="list-disc list-inside">
          {cart.products.map((product) => (
            <li key={product.id} className="text-gray-600">
              <div className="flex items-center space-x-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.quantity} x ${product.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(CartCard);
