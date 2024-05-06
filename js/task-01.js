const categoryItems = Array.from(document.querySelectorAll('.item'));
console.log(`Number of categories: ${categoryItems.length}`);
console.log('');

categoryItems.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelector('ul').children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
    console.log('');
});
