const addButton = document.querySelector('.add-button');
const box = document.querySelector('.box');

addButton.addEventListener('click', () => {
  const newInputsWrapper = document.createElement('div');
  newInputsWrapper.classList.add('inputs-wrapper');
  
  const foodNameInput = document.createElement('input');
  foodNameInput.type = 'text';
  foodNameInput.placeholder = 'Food Name';
  foodNameInput.id = 'foodName';
  foodNameInput.name = 'foodName';
  foodNameInput.classList.add('food-name-input');
  
  const servingsInput = document.createElement('input');
  servingsInput.type = 'text';
  servingsInput.placeholder = 'Servings';
  servingsInput.id = 'servings';
  servingsInput.name = 'servings';
  servingsInput.classList.add('servings-input');
  
  const equalsSign = document.createElement('span');
  equalsSign.classList.add('equal-sign');
  equalsSign.innerText = '=';
  
  const caloriesInput = document.createElement('input');
  caloriesInput.type = 'text';
  caloriesInput.placeholder = 'Calories';
  caloriesInput.id = 'calories';
  caloriesInput.name = 'calories';
  caloriesInput.classList.add('calories-input');
  
  newInputsWrapper.appendChild(foodNameInput);
  newInputsWrapper.appendChild(servingsInput);
  newInputsWrapper.appendChild(equalsSign);
  newInputsWrapper.appendChild(caloriesInput);
  
  box.appendChild(newInputsWrapper);
});
