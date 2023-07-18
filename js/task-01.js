const listCategories = document.querySelector('ul#categories');
const amountCategories = listCategories.children.length;
console.log(`Number of categories: ${amountCategories}`);

const arr = [...listCategories.children];
arr.forEach((category)=>{
    const categoryName=category.querySelector('h2').textContent;
    const amoutElements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${amoutElements}`);
});

