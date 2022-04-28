// Search form
// Part 1 Cocktail to search by (1) ingredient or (2) name of cocktail **drop down box
// Part 2 Language User to choose language ** drop down box

// Fetch data 
// Instructions of how to make cocktail
// picture of the cocktail
// ingredients list




  // // Create getCocktailData() that feeds in cocktail name and calls the Cocktail DB API URL
  // var getCocktailData = function(cocktail) {

  //   const options = {
  //       method: 'GET',
  //       headers: {
  //           'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
  //           'X-RapidAPI-Key': '5c8db769e9msh5db48a3075f2811p17399bjsn3bbad4940064'
  //       }
  //   };
    
  //   // Format the Cocktail DB API URL to accept a cocktail name
  //   var apiUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=' + cocktail;
  
  //   // Fetch cocktail data from the API URL
  //   fetch(apiUrl, options)
  //     .then(function(response) {
  //         console.log(response);
  //       // If request is successful, convert cocktail data from the URL into JSON and feed it into the function 
  //       if (response.ok) {
  //         response.json().then(function(data) {
  //           console.log(data);
  //           // Create elements for cocktail name, instructions, ingredients, and picture to display on webpage
  //           // var cocktailHeaderEl = document.createElement("h3");
  //           // cocktailHeaderEl.setAttribute("id", "cocktail-name");
  //           // cocktailHeaderEl.textContent = ;
  //           // cocktailContainerEl.appendChild(cocktailHeaderEl);


  //         });

  //       // Create alerts for any errors that might come up regarding the API call
  //       } else {
  //         alert('Error: ' + response.statusText);
  //         // Clear out data from any previous searches

  //       }
  //     })
  //     .catch(function(error) {
  //       alert('Unable to connect to Cocktail DB API');
  //     });
  // };





// Feed cocktail data into the Google Translate API 

// Fetch data
// Translation of instructions and ingredients list

// Display on page
// Dynamically generate HTML 

// Create a favorites list for the cocktails (localStorage)


var getCocktailData = function() {

  
  // Format the Cocktail DB API URL to accept a cocktail name
  var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  // Fetch cocktail data from the API URL
  fetch(apiUrl)
    .then(function(response) {
        console.log(response);
      // If request is successful, convert cocktail data from the URL into JSON and feed it into the function 
      if (response.ok) {
        response.json().then(function(data) {
          console.log(data);

          var cocktails = data.drinks;
          console.log(cocktails);
          console.log(cocktails[0]);
          console.log(cocktails[0].strDrink);
          
          for (i = 0; i < cocktails.length; i++) {

            var cocktail = cocktails[i].strDrink;
            var instructions = cocktails[i].strInstructions;
            console.log(cocktail);
            console.log(instructions);

          } ;
          // Create elements for cocktail name, instructions, ingredients, and picture to display on webpage
          // var cocktailHeaderEl = document.createElement("h3");
          // cocktailHeaderEl.setAttribute("id", "cocktail-name");
          // cocktailHeaderEl.textContent = ;
          // cocktailContainerEl.appendChild(cocktailHeaderEl);


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



getCocktailData();
