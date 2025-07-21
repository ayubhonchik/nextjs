import React from 'react';
import { IRecipe } from '@/types'; 

const RecipeDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data: IRecipe = await response.json();

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">{data.title}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-48 object-cover rounded-lg"
          />
          <p className="text-gray-600 mt-4">{data.description}</p>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetail;
