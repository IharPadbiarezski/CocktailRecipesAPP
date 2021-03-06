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

  // get single recipe
  async getSingleRecipe(id) {
    // Search by id
    const apiResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // Wait for response then return json
    const recipe = await apiResponse.json();

    return {
      recipe
    };
  }

  // Retrieves all the categories from the REST API
  async getCategories() {
    const apiResponse = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    );
    // wait for the response and return json
    const categories = await apiResponse.json();

    return {
      categories
    };
  }

  // Get drinks by Category
  async getDrinksByCategory(category) {
    // Search by Category
    const apiResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    );
    // Wait for response then return json
    const cocktails = await apiResponse.json();

    return {
      cocktails
    };
  }

  // Get alcohol or non alcoholdrinks
  async getDrinksByAlcohol(term) {
    // Search by Alcohol
    const apiResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`
    );
    // Wait for response then return json
    const cocktails = await apiResponse.json();

    return {
      cocktails
    };
  }
}
