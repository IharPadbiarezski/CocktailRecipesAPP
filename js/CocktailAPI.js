class CocktailAPI {
  // Get recipe by name
  async getDrinksByName(name) {
    // Search by name
    const apiResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    // Return a json response
    const cocktails = await apiResponse.json();

    return {
      cocktails
    };
  }

  // Get recipesby ingredients
  async getDrinksByIngredient(ingredient) {
    // Search by Ingredient
    const apiResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    // Wait for response then return json
    const cocktails = await apiResponse.json();

    return {
      cocktails
    };
  }
}
