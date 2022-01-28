import React, { useState, useEffect } from "react";
import Recipe from "./../recipe/Recipe";
import * as Styled from "./RecipesContentStyles";

const RecipesContent = () => {
  const [showRecipes, setShowRecipes] = useState(true);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pages, setPages] = useState({
    currentPage: 0,
    notFirstPage: 0,
  });

  const fetchRecipes = async (e) => {
    e.preventDefault();
    try {
      const KEY = "d64f14ae-0c48-436d-8097-4690e389d775";
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchRecipe}&key=${KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.data.recipes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log("Number of Recipes ", recipes.length);
    setPages((prevPages) => {
      return {
        ...prevPages,
        currentPage: 0,
      };
    });
  }, [recipes]);

  const prevBtnHandler = () => {
    if (pages.currentPage === 0) return;
    const first = pages.currentPage - 1;
    if (first === 0) {
      setPages({
        notFirstPage: 0,
        currentPage: 0,
      });
      return;
    }
    setPages({
      notFirstPage: 1,
      currentPage: pages.currentPage - 1,
    });
  };

  const nextBtnHandler = () => {
    const numPages = Math.floor(recipes.length / 12);
    if (pages.currentPage >= numPages) return;
    setPages({
      notFirstPage: 1,
      currentPage: pages.currentPage + 1,
    });
  };

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
        <React.Fragment>
          <Styled.RecipesContainer>
            {recipes
              .slice(
                pages.notFirstPage + pages.currentPage * 12,
                pages.notFirstPage + 12 + pages.currentPage * 12
              )
              .map((rec) => (
                <Recipe
                  publisher={rec.publisher}
                  image={rec.image_url}
                  title={rec.title}
                  id={rec.id}
                  key={rec.id}
                />
              ))}
          </Styled.RecipesContainer>
          {recipes.length > 12 && (
            <Styled.PaginationContainer>
              <Styled.Page onClick={prevBtnHandler}>Prev</Styled.Page>
              <Styled.Page onClick={nextBtnHandler}>Next</Styled.Page>
            </Styled.PaginationContainer>
          )}
        </React.Fragment>
      )}
      <Styled.PopularRecipesContainer>
        <Styled.PopularTitle>Popular Recipes</Styled.PopularTitle>
        <Styled.PopularRecipeListContainer>
          <Styled.PopularRecipeList>
            <span>
              - <Styled.Recipe>Steak Bites</Styled.Recipe>
            </span>
            <span>
              - <Styled.Recipe>Mini Donuts</Styled.Recipe>
            </span>
            <span>
              - <Styled.Recipe>Blueberry Pie</Styled.Recipe>
            </span>
          </Styled.PopularRecipeList>
          <Styled.PopularRecipeList>
            <span>
              - <Styled.Recipe>Spicy Chicken</Styled.Recipe>
            </span>
            <span>
              - <Styled.Recipe>Bacon Wrapped Hamburger</Styled.Recipe>
            </span>
            <span>
              - <Styled.Recipe>Apple Crumble</Styled.Recipe>
            </span>
          </Styled.PopularRecipeList>
        </Styled.PopularRecipeListContainer>
      </Styled.PopularRecipesContainer>
    </Styled.Card>
  );
};

export default RecipesContent;
