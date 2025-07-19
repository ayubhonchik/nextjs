"use client";
import Link from "next/link";

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

export default function User({ id, firstName, lastName, email, image }: UserProps) {
  return (
    <Link
      href={`/users/${id}`}
      className="block bg-white rounded-xl p-4 shadow hover:shadow-md transition"
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={firstName}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold">
            {firstName} {lastName}
          </h2>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>
    </Link>
  );
}
