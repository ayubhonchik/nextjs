import Recipe from "@/components/Recipe";

export default async function RecipeList() {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Recepts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.recipes.map((recipe: any) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            cuisine={recipe.cuisine}
          />
        ))}
      </div>
    </div>
  );
}