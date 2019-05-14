// Instnciate the Clsses
const ui = new UI(),
  coctail = new CocktailAPI();

// Create the Evet Listeers
function eventListeners() {
  // Add event listener when form is submitted
  const searchForm = document.querySelector("#search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", getCoctails);
  }
}

eventListeners();

// Get coctails function

function getCoctails(e) {
  e.preventDefault();

  const searchTerm = document.querySelector("#search").value;

  // Check something is on the search input
  if (searchTerm === "") {
    // Call User Interfaceprint message
    ui.printMessage("Please a something into the form", "danger");
  } else {
    // Query by the name of the drink
    coctail.getDrinksByName(searchTerm).then(cocktails => {
      if (cocktails.cocktails.drinks === null) {
        // Nothing exist
        ui.printMessage("There're no results, try a different term ", "danger");
      } else {
        ui.displayDrinksWithIngridients(cocktails.cocktails.drinks);
      }
    });
  }
}
