// DOM Manipulation

// Traverse the DOM

// Parent Node Traversal

// let li = document.querySelector('li');

// console.log(li.parentNode.parentNode);
// console.log(li.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);


// Child Node Traversal


// console.log(li.childNodes);
// console.log(li.firstChild);
// console.log(li.lastChild);

// console.log(li.children);
// console.log(li.firstElementChild);
// console.log(li.lastElementChild);


// Sibling Node Travelsal
let li = document.querySelector('li');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(li.previousElementSibling);
console.log(li.nextElementSibling);
