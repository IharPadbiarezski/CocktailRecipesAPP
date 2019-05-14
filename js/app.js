// Instnciate the Clsses
const ui = new UI();

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
    console.log("Success");
  }
}
