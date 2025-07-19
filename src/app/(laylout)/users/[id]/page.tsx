import { notFound } from 'next/navigation';

export default async function UserDetail({ params }: { params: { id: string } }) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  if (!res.ok) return notFound();
  const user = await res.json();

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow rounded-xl">
      <div className="flex flex-col items-center">
        <img src={user.image} alt={user.firstName} className="w-32 h-32 rounded-full object-cover mb-4" />
        <h1 className="text-2xl font-bold mb-1">{user.firstName} {user.lastName}</h1>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-gray-500"> {user.address.city}, {user.address.state}</p>
        <p className="mt-4"> number: {user.phone}</p>
        <p> work: {user.company.title}</p>
      </div>
    </div>
  );
}
