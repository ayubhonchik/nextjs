import React from 'react';
import { IUser } from '@/types';

const UserDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data: IUser = await response.json();

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">{data.name}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img 
            src={data.image} 
            alt={data.name} 
            className="w-48 h-48 object-cover rounded-full mx-auto"
          />
          <p className="text-gray-600 mt-4">{data.email}</p>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
