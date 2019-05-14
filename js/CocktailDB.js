class CocktailDB {
  // Save the recipes into local storage

  // Return recipes from storage
  saveIntoDB(drink) {
    const drinks = this.getFromDB();

    drinks.push(drink);

    // Add the new array into the localstorage
    localStorage.setItem("drinks", JSON.stringify(drinks));
  }

  // Removes element from the local storage
  removeFromDB(id) {
    const drinks = this.getFromDB();

    // Loop
    drinks.forEach((drink, index) => {
      if (id === drink.id) {
        drinks.splice(index, 1);
      }
    });
    //Set the array into local storage
    localStorage.setItem("drinks", JSON.stringify(drinks));
  }

  getFromDB() {
    let drinks;
    // Check from localstorage
    if (localStorage.getItem("drinks") === null) {
      drinks = [];
    } else {
      drinks = JSON.parse(localStorage.getItem("drinks"));
    }
    return drinks;
  }
}
