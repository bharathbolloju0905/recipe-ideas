export default function RecipeDetails({ recipe, onClose }) {
  const ingredients = Object.keys(recipe)
    .filter((k) => k.startsWith("strIngredient") && recipe[k])
    .map((k, i) => `${recipe[k]} - ${recipe[`strMeasure${i + 1}`] || ""}`);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-lg mb-4 w-full" />
        
        <h3 className="font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc pl-6 mb-4">
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>

        <h3 className="font-semibold mb-2">Instructions:</h3>
        <p className="mb-4 whitespace-pre-line">{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}
