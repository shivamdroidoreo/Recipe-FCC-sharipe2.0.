import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipesByArea() {
  const { area } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recipes for the given area from the backend
    fetch(`http://localhost:4000/api/recipes?area=${area}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, [area]);

  return (
    <div className="container mt-4">
      <h1>{area.replace('-', ' ')} Recipes</h1>
      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card">
                <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipesByArea;
