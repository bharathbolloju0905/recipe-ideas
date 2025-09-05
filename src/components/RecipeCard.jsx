export default function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-200 cursor-pointer transform hover:scale-105 flex flex-col items-center overflow-hidden"
      onClick={() => onSelect(recipe.idMeal)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover rounded-t-2xl"
        style={{ maxHeight: 192 }}
      />
      <div className="p-4 flex-1 flex items-center justify-center">
        <h2 className="text-lg font-semibold text-center w-full">{recipe.strMeal}</h2>
      </div>
    </div>
  );
}
