import { useState } from "react";

export default function SearchBar({ onSearch, error, onError }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      onError && onError("Please enter a valid ingredient.");
      return;
    }
    onSearch(input);
    onError && onError(""); // Clear error on valid search
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full gap-2"
    >
      <div className="flex flex-row items-center w-full justify-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an ingredient..."
          className="border border-gray-300 rounded-xl px-6 py-4 w-full max-w-xl text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        />
        <button
          type="submit"
          className="px-7 py-4 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 active:bg-blue-700 transition font-semibold text-lg cursor-pointer"
        >
          Search
        </button>
      </div>
      {error && (
        <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
    </form>
  );
}
