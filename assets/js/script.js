var cocktailContainerEl = document.querySelector("#cocktail-container");
var cocktailSearchContainerEl = document.querySelector("#cocktail-search");
var cocktailInputEl = document.querySelector("cocktail-options");
// Search form
// Part 1 Cocktail to search by (1) ingredient or (2) name of cocktail **drop down box
// Part 2 Language User to choose language ** drop down box

// Create an array to store user's searched cocktails in localStorage
var cocktails = [];

// Create searchCityHandler() for user to enter a city into search form
var searchCocktailHandler = function(event) {
    // Prevent page from refreshing
    event.preventDefault();

    // Get cocktail name value from input element
    let cocktailname = event.target.value;
      
    // Feed user's entered cocktail name into functions that will make Coctail DB & Google Translate calls 
    // and generate buttons
    if (cocktailname) {
      getCocktailData(cocktailname);
      // buttonGenerator(cocktailname);
      // Push cocktail name into cocktails array and store in localStorage
      cocktails.push(cocktailname);
      console.log(cocktails);
      localStorage.setItem("cocktails", JSON.stringify(cocktails));
      // Clear input form element 

    
     // Alert user to select a cocktail if the input element is blank 
    } else {
      alert('Please choose a cocktail');
    }
  };




// Fetch data 
// Name of the cocktail
// Picture of the cocktail
// Instructions of how to make cocktail


var getCocktailData = function(name) {
  cocktailContainerEl.innerHTML = "";           
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

            var cocktail = cocktails[0].strDrink;
            var image = cocktails[0].strDrinkThumb;
            var instructions = cocktails[0].strInstructions;
            var ingredient1 = cocktails[0].strIngredient1;
            var ingredient2 = cocktails[0].strIngredient2;
            var ingredient3 = cocktails[0].strIngredient3;
            var ingredient4 = cocktails[0].strIngredient4;
            var ingredient5 = cocktails[0].strIngredient5;
            var ingredient6 = cocktails[0].strIngredient6;

            var measure1 = cocktails[0].strMeasure1;
            var measure2 = cocktails[0].strMeasure2;
            var measure3 = cocktails[0].strMeasure3;
            var measure4 = cocktails[0].strMeasure4;
            var measure5 = cocktails[0].strMeasure5;
            var measure6 = cocktails[0].strMeasure6;




            console.log(cocktail);
            console.log(image);
            console.log(instructions);

            // Create elements for cocktail name, instructions, ingredients, and picture to display on webpage
          var cocktailHeaderEl = document.createElement("h3");
          cocktailHeaderEl.setAttribute("id", "cocktail-name");
          cocktailHeaderEl.classList.add("border", "border-dark", )
          cocktailHeaderEl.textContent = cocktail;
          
          var cocktailImageEl = document.createElement("img");
          cocktailImageEl.setAttribute("src", image);
          
          var cocktailInstructionsHeadEl = document.createElement("h3");
          cocktailInstructionsHeadEl.textContent = "Instructions"
          var coctailInstructionsEl = document.createElement("p");
          coctailInstructionsEl.textContent = instructions;

          var cocktailRecipeEl = document.createElement("h3");
          cocktailRecipeEl.textContent = "Recipe"
          var cocktailIngredEl1 = document.createElement("p");
          cocktailIngredEl1.textContent = measure1 + " " + ingredient1;
          var cocktailIngredEl2 = document.createElement("p");
          cocktailIngredEl2.textContent = measure2 + " " + ingredient2;
          var cocktailIngredEl3 = document.createElement("p");
          cocktailIngredEl3.textContent = measure3 + " " + ingredient3;
          var cocktailIngredEl4 = document.createElement("p");
          cocktailIngredEl4.textContent = measure4 + " " + ingredient4;
          var cocktailIngredEl5 = document.createElement("p");
          cocktailIngredEl5.textContent = measure5 + " " + ingredient5;
          var cocktailIngredEl6 = document.createElement("p");
          cocktailIngredEl6.textContent = measure6 + " " + ingredient6;

          // Create conditionals if ingredients and measurements are null
          if (measure3 == null || ingredient3 == null) {
            cocktailIngredEl3.textContent = "";
            cocktailIngredEl4.textContent = "";
            cocktailIngredEl5.textContent = "";
            cocktailIngredEl6.textContent = "";

          } else if (measure4== null || ingredient4== null) {
            cocktailIngredEl4.textContent = "";
            cocktailIngredEl5.textContent = "";
            cocktailIngredEl6.textContent = "";

          } else if (measure5==null || ingredient5==null) {
            cocktailIngredEl5.textContent = "";
            cocktailIngredEl6.textContent = "";

          } else if (measure6==null || ingredient6==null) {

            cocktailIngredEl6.textContent = "";
          };
          


          cocktailContainerEl.appendChild(cocktailHeaderEl);
          cocktailContainerEl.appendChild(cocktailImageEl);
          cocktailContainerEl.appendChild(cocktailRecipeEl);
          cocktailContainerEl.appendChild(cocktailIngredEl1);
          cocktailContainerEl.appendChild(cocktailIngredEl2);
          cocktailContainerEl.appendChild(cocktailIngredEl3);
          cocktailContainerEl.appendChild(cocktailIngredEl4);
          cocktailContainerEl.appendChild(cocktailIngredEl5);
          cocktailContainerEl.appendChild(cocktailIngredEl6);
          cocktailContainerEl.appendChild(cocktailInstructionsHeadEl);          
          cocktailContainerEl.appendChild(coctailInstructionsEl);




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


cocktailSearchContainerEl.addEventListener("click", searchCocktailHandler)
