addButton.addEventListener('click', () => {
  const row = document.createElement('div');
  row.classList.add('row');

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerHTML = '&#10006;';

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

  row.appendChild(removeButton);
  row.appendChild(foodNameInput);
  row.appendChild(servingsInput);
  row.appendChild(equalsSign);
  row.appendChild(caloriesInput);

  box.appendChild(row);

  box.style.height = parseInt(getComputedStyle(box).height) + 50 + 'px';
});
