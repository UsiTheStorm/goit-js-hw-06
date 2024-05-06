const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
const ingredientList = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    ingredientList.append(listItem);
});
list.appendChild(ingredientList);
