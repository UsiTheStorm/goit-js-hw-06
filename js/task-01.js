const cat = document.querySelector('#categories');
console.dir(cat.children.length);
console.dir(cat.children);
// const title = document.querySelector('.title');
// console.dir(title);

[...cat.children].forEach((element) => {
    console.dir(element.children[0].textContent);
    console.dir(element.children[1].children.length);
});
