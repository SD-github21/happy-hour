var cocktailContainerEl = document.querySelector("#cocktail-container");
var cocktailFormEl = document.querySelectorAll("#cocktail-form");
var cocktailSearchContainerEl = document.querySelector("#cocktail-search");
var cocktailSelectBtnEl = document.querySelector("#select-btn");
var cocktailInputEl = document.querySelector("#cocktail-options");
var translateModalEl = document.querySelector(".lead");
var cocktailButtonsEl = document.querySelector("#cocktail-buttons");
var cocktailErrorsEl = document.querySelector("#cocktail-errors");

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

    var cocktailname = $("#cocktail-options option:selected").text();
    console.log(cocktailname);
    var cocktailvalue = $("#cocktail-options").val();
    console.log(cocktailvalue)
      
    // Feed user's entered cocktail name into functions that will make Cocktail DB & Google Translate calls 
    // and generate buttons
      getCocktailData(cocktailvalue);
      if (cocktailname === "Black Russian" || cocktailname === "Negroni" || cocktailname === "Mimosa" ||
      cocktailname === "Sangria" || cocktailname === "Pina Colada" || cocktailname === "Margarita" || cocktailname === "Paloma") {
      getTranslateData(cocktailname);
      } else {
        translateModalEl.textContent = "";
        var translationOrderEl = document.createElement("p");
        translationOrderEl.textContent = "I would like to order a(n) " + cocktailname;
        translateModalEl.appendChild(translationOrderEl);

      };
      buttonGenerator(cocktailname);
      // Push cocktail name into cocktails array and store in localStorage
      cocktails.push(cocktailname);
      console.log(cocktails);
      localStorage.setItem("cocktails", JSON.stringify(cocktails));
  };

  // Create and feed cocktail name into buttonGenerator() to dynamically generate and display buttons 
  // for each searched cocktail  
  var buttonGenerator = function(cocktailname) {
    // Clear data from any previous searches

    var cocktailButtonEl = document.createElement("button");
    cocktailButtonEl.setAttribute("data-cocktail", cocktailname);
    cocktailButtonEl.classList = "button"
    cocktailButtonEl.innerHTML = cocktailname;

    cocktailButtonsEl.appendChild(cocktailButtonEl);
  };


  // Create buttonClickHandler() to allow user to click on cocktail buttons and obtain cocktail weather data  
  var buttonClickHandler = function(event){
    
    var cocktail = event.target.getAttribute("data-cocktail");
      
    if (cocktail) {
      getCocktailData(cocktail); 
      if (cocktail === "Black Russian" || cocktail=== "Negroni" || cocktail === "Mimosa" ||
      cocktail === "Sangria" || cocktail === "Pina Colada" || cocktail === "Margarita" || cocktail === "Paloma") {
      getTranslateData(cocktail);
      } else {
        translateModalEl.textContent = "";
        var translationOrderEl = document.createElement("p");
        translationOrderEl.textContent = "I would like to order a(n) " + cocktail;
        translateModalEl.appendChild(translationOrderEl);

      };
      
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

          cocktailErrorsEl.textContent = "There were no errors with calling the Cocktail DB API";
          


        });

      // Create alerts for any errors that might come up regarding the API call
      } else {

        cocktailErrorsEl.textContent = "";
        cocktailErrorsEl.textContent = "Error: " + response.status + " " + response.statusText;




      }
    })
    .catch(function(error) {
      cocktailErrorsEl.textContent = "";
      cocktailErrorsEl.textContent = "Unable to connect to Cocktail DB API";
    

    });
};

// Feed cocktail data into the Google Translate API 
// Fetch data

var getTranslateData = function(cocktailname) {
  
  var encodedParams = new URLSearchParams();

  if (cocktailname === "Sangria" || cocktailname === "Pina Colada" || cocktailname=== "Margarita" || cocktail === "Paloma") {
    encodedParams.append("q", "I would like to order a(n)");
    encodedParams.append("target", "es");
    encodedParams.append("source", "en");
} else if (cocktailname === "Mimosa" || cocktailname === "French 75") {
    encodedParams.append("q", "I would like to order a(n) ");
    encodedParams.append("target", "fr");
    encodedParams.append("source", "en");
} else if (cocktailname === "Negroni") {
    encodedParams.append("q", "I would like to order a(n)");
    encodedParams.append("target", "it");
    encodedParams.append("source", "en");
} else {
  encodedParams.append("q", "I would like to order a(n)");
  encodedParams.append("target", "de");
  encodedParams.append("source", "en");
}; 

 var options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      'X-RapidAPI-Key': 'ac4479e297msh2dfafef294e9270p1a1ecajsna98950f2bde4'
    },
    body: encodedParams
  };

  fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    .then(function(response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function(data) {
          console.log(data);

          var translation = data.data;
          console.log(translation);
          var finaltranslate = translation.translations[0].translatedText;
          console.log(finaltranslate);
          // Dynamically generate HTML to display translation of how to order drink in region's native language

          var translate = finaltranslate;
          console.log(translate);
          translateModalEl.textContent = "";
          var translationOrderEl = document.createElement("p");
          translationOrderEl.textContent = translate + " " + cocktailname;
          translateModalEl.appendChild(translationOrderEl);

          
          });

      
      // Create alerts for any errors that might come up regarding the API call
    } else {
      alert('Error: ' + response.statusText);
      // Clear out data from any previous searches

    }
  })
  .catch(function(error) {
    alert('Unable to connect to Google Translate API');
  }); 
};

// Store cocktails into an array on localStorage
// Dynamically generate buttons with cocktail names that will persist upon closing browser or refreshing browser
// Create loadButtons() for saved cities search to persist on webpage upon refresh or reopening browser
  var loadButtons = function() {

    // Clear content from all elements 

    // Obtain cocktails array from localStorage
    var savedCocktails = localStorage.getItem("cocktails");
    
    // If there are no cocktails, set cocktails to an empty array and return out of the function
    if (savedCocktails == "cocktails" || savedCocktails == null) {
      return;
    // else, load savedCocktails and set them to the cocktails array
    } else {
    savedCocktails = JSON.parse(savedCocktails);
    cocktails = savedCocktails;
    
    // Create a for loop to loop through each city and generate a button for each cocktail that will display on page
    for (i = 0; i < savedCocktails.length; i++) {

      var cocktailButtonEl = document.createElement("button");
      cocktailButtonEl.setAttribute("data-cocktail", savedCocktails[i]);
      cocktailButtonEl.classList = "button"
      cocktailButtonEl.innerHTML = savedCocktails[i];
    
      cocktailButtonsEl.appendChild(cocktailButtonEl);
  
      }
  }
 
};



loadButtons();
cocktailButtonsEl.addEventListener('click', buttonClickHandler);
cocktailSelectBtnEl.addEventListener("click", searchCocktailHandler);
