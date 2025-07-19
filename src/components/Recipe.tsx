"use client";
import Link from "next/link";

interface RecipeProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
}

export default function Recipe({ id, name, image, cuisine }: RecipeProps) {
  return (
    <Link
      href={`/recipes/${id}`}
      className="block bg-white rounded-xl p-4 shadow hover:shadow-md transition"
    >
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{cuisine}</p>
      </div>
    </Link>
  );
}
