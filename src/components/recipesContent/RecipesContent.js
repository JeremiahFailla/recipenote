import React, { useState, useEffect } from "react";
import Recipe from "./../recipe/Recipe";
import * as Styled from "./RecipesContentStyles";

const RecipesContent = () => {
  const [showRecipes, setShowRecipes] = useState(true);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (e) => {
    e.preventDefault();
    try {
      const KEY = "d64f14ae-0c48-436d-8097-4690e389d775";
      console.log("Find Recipe");
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchRecipe}&key=${KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.data.recipes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log(recipes.length);
    // if (recipes.length !== 0) {
    //   setShowRecipes(true);
    // } else {
    //   setShowRecipes(false);
    // }
  }, [recipes]);

  return (
    <Styled.Card>
      <Styled.Title>Recipes</Styled.Title>
      <Styled.InputContainer onSubmit={fetchRecipes}>
        <Styled.SearchButton aria-label="Search">
          <Styled.SearchIcon />
        </Styled.SearchButton>
        <Styled.SearchInput
          type="text"
          placeholder="Find Recipe"
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
      </Styled.InputContainer>
      {recipes.length === 0 ? (
        <Styled.Description>
          Use the above search bar to search for a recipe
        </Styled.Description>
      ) : (
        <Styled.RecipesContainer>
          {recipes.map((rec) => (
            <Recipe
              publisher={rec.publisher}
              image={rec.image_url}
              title={rec.title}
              id={rec.id}
            />
          ))}
        </Styled.RecipesContainer>
      )}
    </Styled.Card>
  );
};

// <Styled.PopularRecipesContainer>
//         <Styled.PopularTitle>Popular Recipes</Styled.PopularTitle>
//         <Styled.PopularRecipeListContainer>
//           <Styled.PopularRecipeList>
//             <span>
//               - <Styled.Recipe>Steak Bites</Styled.Recipe>
//             </span>
//             <span>
//               - <Styled.Recipe>Mini Donuts</Styled.Recipe>
//             </span>
//             <span>
//               - <Styled.Recipe>Blueberry Pie</Styled.Recipe>
//             </span>
//           </Styled.PopularRecipeList>
//           <Styled.PopularRecipeList>
//             <span>
//               - <Styled.Recipe>Spicy Chicken</Styled.Recipe>
//             </span>
//             <span>
//               - <Styled.Recipe>Bacon Wrapped Hamburger</Styled.Recipe>
//             </span>
//             <span>
//               - <Styled.Recipe>Apple Crumble</Styled.Recipe>
//             </span>
//           </Styled.PopularRecipeList>
//         </Styled.PopularRecipeListContainer>
//       </Styled.PopularRecipesContainer>

export default RecipesContent;
