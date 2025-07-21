'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IRecipe } from '@/types';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        
        if (!response.ok) {
          throw new Error('API so‘rovining javobi xato');
        }

        const data = await response.json();
        
        console.log(data); 
        if (data && data.recipes) {
          setRecipes(data.recipes);
        } else {
          setRecipes([]);
        }
      } catch (err: any) {
        setError('Ma\'lumotlarni olishda xatolik yuz berdi');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">All Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.length === 0 ? (
            <p className="text-gray-500">No recipes found.</p>
          ) : (
            recipes.map((recipe) => (
              <Link key={recipe.id} href={`/Recipes/${recipe.id}`}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6">
                  <div className="mb-4">
                    <p className="text-xl font-bold text-gray-800">{recipe.description}</p> 
                    <p className="text-gray-600">{recipe.description}</p> 
                  </div>
                  <div className="mt-4">
                    <img 
                      src={recipe.image} 
                      alt='jjk' 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RecipesPage;
