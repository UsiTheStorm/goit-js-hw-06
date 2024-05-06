const categories = document.querySelector('#categories');
const categoryItems = Array.from(categories.children);
console.log(`Number of categories: ${categoryItems.length}`);
console.log('');

categoryItems.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelector('ul').children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
    console.log('');
});
