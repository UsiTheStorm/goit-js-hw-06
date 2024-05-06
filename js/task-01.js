const categories = document.querySelector('#categories');
const noOfCategories = Number(categories.children.length);
console.log(`Number of categories: ${noOfCategories}`);
console.log('');
// console.dir(categories.children);
// const title = document.querySelector('.title');
// console.dir(title);

[...categories.children].forEach((element) => {
    const categoryName = element.children[0].textContent;
    console.log(`Category: ${categoryName}`);
    // console.dir(element.children[0].textContent);
    console.log(`Elements: ${element.children[1].children.length}`);
    console.log(' ');
});
