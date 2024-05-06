const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// let ingredientList;
const list = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
    const listItem = document.createElement('li');
    // console.log(listItem);
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    // ingredientList += listItem;
    // console.log(listItem);
    list.append(listItem);
});
// console.log(ingredientList);
