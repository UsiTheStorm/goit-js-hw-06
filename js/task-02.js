const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// let ingredientList;
const list = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    list.append(listItem);
});
