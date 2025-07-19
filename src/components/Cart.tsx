"use client";
import Link from "next/link";
import Image from "next/image";

interface CartProps {
  id: number;
  userId: number;
  total: number;
  totalProducts: number;
  totalQuantity: number;
  thumbnail: string;
}

export default function Cart({
  id,
  userId,
  total,
  totalProducts,
  totalQuantity,
  thumbnail,
}: CartProps) {
  return (
    <Link
      href={`/carts/${id}`}
      className="block bg-white rounded-xl p-4 shadow hover:shadow-md transition"
    >
      <div className="flex flex-col items-center">
        <img
          src={thumbnail}
          alt={`Cart ${id}`}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
        <h2 className="text-lg font-semibold mb-1"> Cart #{id}</h2>
        <p className="text-sm text-gray-500">User ID: {userId}</p>
        <p className="text-sm">Mahsulotlar: {totalProducts}</p>
        <p className="text-sm">Umumiy soni: {totalQuantity}</p>
        <p className="text-sm font-bold text-green-600 mt-2">Narxi: ${total}</p>
      </div>
    </Link>
  );
}
