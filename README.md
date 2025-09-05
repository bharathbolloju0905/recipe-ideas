# 🍳 Recipe Ideas App

A modern, responsive recipe search app built with **React**, **Vite**, and **Tailwind CSS**. Search for recipes by ingredient, view random recipes, and see detailed instructions and ingredients for each meal.

---

## Features

- **Search Recipes:** Enter an ingredient to find matching recipes.
- **Random Recipe:** Instantly discover a random recipe.
- **Responsive Design:** Clean, modern UI that works on mobile, tablet, and desktop.
- **Recipe Details:** View ingredients, instructions, and a YouTube link for each recipe.
- **Loading Spinner:** Shows while fetching data.
- **Input Validation:** Prompts user to enter a valid ingredient if input is empty.

---

## Project Structure

```
.gitignore
eslint.config.js
index.html
package.json
README.md
vite.config.js
public/
  vite.svg
src/
  App.css
  App.jsx
  index.css
  main.jsx
  assets/
    react.svg
  components/
    Loader.jsx
    RecipeCard.jsx
    RecipeDetails.jsx
    SearchBar.jsx
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd recipe-ideas
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open in your browser:**
   - Visit https://recipe-ideas-lyart-two.vercel.app/ 
---

## Usage

- **Search:** Type an ingredient (e.g., "chicken") and click **Search**.
- **Random Recipe:** Click the **Random Recipe** button to get a surprise meal.
- **View Details:** Click on any recipe card to see full details and instructions.
- **Close Details:** Click the **Close** button in the details modal to return to the list.

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TheMealDB API](https://www.themealdb.com/api.php)

---

## Customization

- **Styling:** All UI is styled with Tailwind CSS utility classes in JSX.
- **API:** Uses [TheMealDB](https://www.themealdb.com/api.php) for recipe data.

---

## Linting

This project uses ESLint with recommended React and hooks rules.

```sh
npm run lint
```

---

## License

This project is for educational/demo purposes.

---

## Credits

- Recipe data from [TheMealDB](https://www.themealdb.com/).
- Built with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)
