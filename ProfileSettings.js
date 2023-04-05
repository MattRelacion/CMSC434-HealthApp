// Get references to the HTML elements
const foodNameInput = document.getElementById("firstName");
const servingsInput = document.getElementById("lastName");


// Add an event listener to the first name input field
foodNameInput.addEventListener("input", function(event) {
  console.log("Food name changed:", event.target.value);
});

// Add an event listener to the last name input field
servingsInput.addEventListener("input", function(event) {
  console.log("Servings changed:", event.target.value);
});


