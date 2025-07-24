// DOM Manipulation

// Event Listenters

// element.addEventListener("click", function);

const button2 = document.querySelector('.card-button2');

function alertBtn() {
  alert('I also love JavaScript');
}

button2.addEventListener("click", alertBtn);

// Mouseover

const button3 = document.querySelector('.card-button3');

function changeButton3() {
  button3.style.backgroundColor = 'blue';
}

button3.addEventListener("mouseover", changeButton3);