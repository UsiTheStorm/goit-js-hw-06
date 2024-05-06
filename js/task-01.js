const categories = document.querySelector('#categories');
const noOfCategories = Number(categories.children.length);
console.log(`Number of categories: ${noOfCategories}`);
console.log('');

[...categories.children].forEach((element) => {
    const categoryName = element.children[0].textContent;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${element.children[1].children.length}`);
    console.log(' ');
});
