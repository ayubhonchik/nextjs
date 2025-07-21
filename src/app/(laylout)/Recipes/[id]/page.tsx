
import { notFound } from 'next/navigation';

export default async function RecipeDetail({ params }: { params: { id: string } }) {
const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  if (!res.ok) return notFound();

  const recipe = await res.json();

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow rounded-xl">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{recipe.name}</h1>
      <p className="text-gray-600 mb-2"> {recipe.cuisine}</p>
      <p className="mb-4">{recipe.instructions}</p>

      <h3 className="text-lg font-semibold mb-1"> Ingredients:</h3>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {recipe.ingredients.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
