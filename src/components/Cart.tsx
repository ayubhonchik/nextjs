import Image from "next/image";
import React from "react";

const Card = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.carts?.map((item: any) => {
        const firstProduct = item.products?.[0]; 
        return (
          <div
            key={item.id}
            className="bg-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-400 overflow-hidden"
          >
            {firstProduct && (
              <div className="relative w-full h-48">
                <Image
                  src={firstProduct.thumbnail}
                  alt={firstProduct.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                 Cart {item.id}
              </h2>
              <p className="text-gray-600 text-sm mb-1">
                Products: {item.totalProducts}
              </p>
              <p className="text-gray-700 font-semibold">
                Total Price:{" "}
                <span className="text-green-600">${item.total}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;