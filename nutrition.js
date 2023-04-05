const addButton = document.querySelector('.add-button');
const container = document.querySelector('.container');
const box = document.querySelector('.box');

addButton.addEventListener('click', () => {
  const row = document.createElement('div');
  row.classList.add('row');
  
  const foodNameInput = document.createElement('input');
  foodNameInput.type = 'text';
  foodNameInput.placeholder = 'Food Name';
  foodNameInput.name = 'foodName';
  foodNameInput.classList.add('textbox');

  const servingsInput = document.createElement('input');
  servingsInput.type = 'text';
  servingsInput.placeholder = 'Servings';
  servingsInput.name = 'servings';
  servingsInput.classList.add('textbox');

  const equalsSign = document.createElement('span');
  equalsSign.textContent = '=';

  const caloriesInput = document.createElement('input');
  caloriesInput.type = 'text';
  caloriesInput.placeholder = 'Calories';
  caloriesInput.name = 'calories';
  caloriesInput.classList.add('textbox');

  row.appendChild(foodNameInput);
  row.appendChild(servingsInput);
  row.appendChild(equalsSign);
  row.appendChild(caloriesInput);

  box.appendChild(row);

  box.style.height = parseInt(getComputedStyle(box).height) + 50 + 'px';
});
