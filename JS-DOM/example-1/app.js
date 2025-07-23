// DOM Manipulation

// styling elements

// const title = document.querySelector('#header');

// title.style.color = 'blue';

// const listItem = document.querySelectorAll('.movie-meta');


// for (i = 0; i < listItem.length; i++) {
//   listItem[i].style.fontSize = '5rem';
// }

// creating elements
const ol = document.querySelector('ol');
const ul = document.createElement('li');

// adding elements
ol.append(ul);

// modifying the text
// const firstListenItem = document.querySelector('.movie-meta');

// console.log(firstListenItem.innerText);
// console.log(firstListenItem.textContent);
// console.log(firstListenItem.innerHTML);

ul.innerText = 'X-men';

// modifying attributes & classes

// ul.setAttribute('class', 'header');
// ul.removeAttribute('class');

// const title = document.querySelector('#header');

// console.log(title.getAttribute('id'));

ul.classList.add('movie-item');
console.log(ul.classList.contains('movie-item'));

// remove elements
ul.remove();



