const addButton = document.querySelector('.add-button');
const container = document.querySelector('.container');

addButton.addEventListener('click', () => {
  const row = document.createElement('div');
  row.classList.add('row');
  
  const foodNameInput = document.createElement('input');
  foodNameInput.type = 'text';
  foodNameInput.placeholder = 'Food Name';
  foodNameInput.name = 'foodName';

  const servingsInput = document.createElement('input');
  servingsInput.type = 'text';
  servingsInput.placeholder = 'Servings';
  servingsInput.name = 'servings';

  const equalsSign = document.createElement('span');
  equalsSign.textContent = '=';

  const caloriesInput = document.createElement('input');
  caloriesInput.type = 'text';
  caloriesInput.placeholder = 'Calories';
  caloriesInput.name = 'calories';

  row.appendChild(foodNameInput);
  row.appendChild(servingsInput);
  row.appendChild(equalsSign);
  row.appendChild(caloriesInput);

  container.appendChild(row);
});