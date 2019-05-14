class UI {
  // Displays the cocktails without ingredient
  displayDrinks(drinks) {
    // Show the results
    const resultWrapper = document.querySelector(".results-wrapper");
    resultWrapper.style.display = "block";

    // Insert the results
    const resultDiv = document.querySelector("#results");

    // Loop throught drinks
    drinks.forEach(drink => {
      resultDiv.innerHTML += `
            <div class="col-md-4">
                <div class="card my-3">
                    <img class="card-img-top" src="${drink.strDrinkThumb}"alt"${
        drink.strDrink
      }">
                    <div class="card-body">
                        <h2 class="card-title text-center">${
                          drink.strDrink
                        }</h2>
                        <a data-target="#recipe" class="btn btn-success get-recipe" href="#" data-toggle="modal" data-id="${
                          drink.idDrink
                        }">Get Recipe</a>
                    </div>
                </div>
            </div>
        `;
    });
  }

  // Displays drinks with ingredients
  displayDrinksWithIngridients(drinks) {
    // Show the results
    const resultWrapper = document.querySelector(".results-wrapper");
    resultWrapper.style.display = "block";

    // Insert the results
    const resultDiv = document.querySelector("#results");

    drinks.forEach(drink => {
      resultDiv.innerHTML += `
        <div class="col-md-6">
            <div class="card my-3">
                <img class="card-img-top" src="${drink.strDrinkThumb}"alt"${
        drink.strDrink
      }">

                <div class="card-body">
                    <h2 class="card-title text-center">${drink.strDrink}</h2>
                    <p class="card-text font-weight-bold">Instructions: </p>
                    <p class="card-text">
                        ${drink.strInstructions}
                    </p>
                    <p class="card-text">
                        <ul class="list-group">
                            <li class="list-group-item alert alert-danger">Ingredients</li>
                            ${this.displayIngredients(drink)}
                        </ul>
                    </p>
                    <p class="card-text font-weight-bold">Extra Information: </p>
                    <p class="card-text">
                        <span class="badge badge-pill badge-success">
                            ${drink.strAlcoholic}
                        </span>
                        <span class="badge badge-pill badge-warning">
                            Category:  ${drink.strCategory}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        `;
    });
  }

  // Prints the igredients and Measurements
  displayIngredients(drink) {
    // console.log(drink);

    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredientMeasure = {};
      if (drink[`strIngredient${i}`] !== "") {
        ingredientMeasure.ingredient = drink[`strIngredient${i}`];
        ingredientMeasure.measure = drink[`strMeasure${i}`];
        ingredients.push(ingredientMeasure);
      }
    }
    // console.log(ingredients);
    // Buildthe template

    let ingredientsTemplate = "";
    ingredients.forEach(ingredient => {
      ingredientsTemplate += `
        <li class="list-group-item">${ingredient.ingredient} - ${
        ingredient.measure
      }</li>
        `;
    });
    return ingredientsTemplate;
  }

  //Display single recipe
  displaySingleRecipe(recipe) {
    // Get variables
    const modalTitle = document.querySelector(".modal-title"),
      modalDescription = document.querySelector(
        ".modal-body .description-text"
      ),
      modalIngredients = document.querySelector(
        ".modal-body .ingredient-list .list-group"
      );

    // Set the values
    modalTitle.innerHTML = recipe.strDrink;
    modalDescription.innerHTML = recipe.strInstructions;

    // Display the ingredients
    modalIngredients.innerHTML = this.displayIngredients(recipe);
  }

  // Displays a Custom Message
  printMessage(message, className) {
    const div = document.createElement("div");

    // Add the html
    div.innerHTML = `
        <div class="alert alert-dismissible alert-${className}">
            <button type="button" class="close" data-dismiss="alert">x</button>
            ${message}
        </div>
    `;

    // Insert before
    const reference = document.querySelector(".jumbotron h1");
    const parentNode = reference.parentElement;
    parentNode.insertBefore(div, reference);

    // remove after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  // Clear previous results

  clearResults() {
    const resultDiv = document.querySelector("#results");
    resultDiv.innerHTML = "";
  }
}
