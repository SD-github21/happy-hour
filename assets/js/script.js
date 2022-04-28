var cocktailContainerEl = document.querySelector("#cocktail-container");

// Search form
// Part 1 Cocktail to search by (1) ingredient or (2) name of cocktail **drop down box
// Part 2 Language User to choose language ** drop down box

// Fetch data 
// Instructions of how to make cocktail
// picture of the cocktail
// ingredients list


var getCocktailData = function(name) {

  
  // Format the Cocktail DB API URL to accept a cocktail name
  var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

  // Fetch cocktail data from the API URL
  fetch(apiUrl)
    .then(function(response) {
        console.log(response);
      // If request is successful, convert cocktail data from the URL into JSON and feed it into the function 
      if (response.ok) {
        response.json().then(function(data) {
          console.log(data);

          var cocktails = data.drinks;
          
          for (i = 0; i < cocktails.length; i++) {

            var cocktail = cocktails[i].strDrink;
            var image = cocktails[i].strDrinkThumb;
            var instructions = cocktails[i].strInstructions;
            console.log(cocktail);
            console.log(image);
            console.log(instructions);

            // Create elements for cocktail name, instructions, ingredients, and picture to display on webpage
          var cocktailHeaderEl = document.createElement("h3");
          cocktailHeaderEl.setAttribute("id", "cocktail-name");
          cocktailHeaderEl.textContent = cocktail;
          
          var cocktailImageEl = document.createElement("img");
          cocktailImageEl.setAttribute("src", image);
          
          var coctailInstructionsEl = document.createElement("p");
          coctailInstructionsEl.textContent = instructions;


          cocktailContainerEl.appendChild(cocktailHeaderEl);
          cocktailContainerEl.appendChild(cocktailImageEl);
          cocktailContainerEl.appendChild(coctailInstructionsEl);
            


          } ;


        });

      // Create alerts for any errors that might come up regarding the API call
      } else {
        alert('Error: ' + response.statusText);
        // Clear out data from any previous searches

      }
    })
    .catch(function(error) {
      alert('Unable to connect to Cocktail DB API');
    });
};

// Feed cocktail data into the Google Translate API 
// Fetch data

// Dynamically generate HTML to display translation of how to order drink in region's native language

// Create a favorites list for the cocktails (localStorage)
// Store cocktails into an array on localStorage
// Dynamically generate buttons with cocktail names that will persist upon closing browser or refreshing browser



// getCocktailData("strawberry_margarita");
getCocktailData("paloma");
