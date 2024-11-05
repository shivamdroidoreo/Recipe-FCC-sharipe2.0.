import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recipe by ID from the backend
    fetch(`http://localhost:4000/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading recipe...</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="container mt-4">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="img-fluid" />
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
