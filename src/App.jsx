import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import Loader from "./components/Loader";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // NEW

  const fetchRecipes = async (ingredient) => {
    setLoading(true);
    setSearchError("");
    setHasSearched(true); // NEW
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      setError("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  const fetchRandom = async () => {
    setHasSearched(true); // NEW
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      setError("Failed to fetch random recipe");
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeDetails = async (id) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setSelectedRecipe(data.meals[0]);
    } catch {
      setError("Failed to fetch recipe details");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-6 py-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg flex flex-col items-center">
        <span>🍳 Recipe Ideas</span>
        <span className="text-lg sm:text-xl font-medium text-gray-700 mt-2 tracking-wide">
          Discover delicious meals by ingredient!
        </span>
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
        <SearchBar
          onSearch={fetchRecipes}
          error={searchError}
          onError={setSearchError}
        />
        <button
          onClick={fetchRandom}
          className="px-5 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 active:bg-green-700 transition font-semibold text-base cursor-pointer"
        >
          Random Recipe
        </button>
      </div>

      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {hasSearched && recipes.length === 0 && (
          <p className="text-xl font-bold text-center">Search for a valid ingredient</p>
        )}
        {recipes.map((r) => (
          <RecipeCard key={r.idMeal} recipe={r} onSelect={fetchRecipeDetails} />
        ))}
      </div>

      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}
