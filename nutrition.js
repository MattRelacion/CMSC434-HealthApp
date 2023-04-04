// Get references to the HTML elements
const foodNameInput = document.getElementById("foodName");
const servingsInput = document.getElementById("servings");
const caloriesInput = document.getElementById("calories");

// Add an event listener to the food name input field
foodNameInput.addEventListener("input", function(event) {
  console.log("Food name changed:", event.target.value);
});

// Add an event listener to the servings input field
servingsInput.addEventListener("input", function(event) {
  console.log("Servings changed:", event.target.value);
});

// Add an event listener to the calories input field
caloriesInput.addEventListener("input", function(event) {
  console.log("Calories changed:", event.target.value);
});

