// using this file is optional
// you can also load the code snippets in using your browser's console

// DEMONSTRATING EVENT LISTENERS

const main = document.getElementById('main');

main.addEventListener('click', function (event) {
  alert('I was clicked!');
})


// CODE FOR WHICH KEY WAS PRESSED
// const input = document.querySelector('input');

// input.addEventListener('keydown', function (e) {
//   console.log(e.which);
// });


// CODE FOR RESTRICTING INPUT ('g')
const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {
  if (e.which === 71) {
    return e.preventDefault();
  } else {
    console.log(e.which);
  }
});


// BUBBLING
// let divs = document.querySelectorAll('div');

// function bubble(e) {
//   console.log(this.firstChild.nodeValue.trim() + ' bubbled');
// }

// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', bubble);
// }

// CAPTURING
// divs = document.querySelectorAll('div');

// function capture(e) {
//   console.log(this.firstChild.nodeValue.trim() + ' captured');
// }

// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', capture, true);
// }


// REWRITE BUBBLING EXAMPLE TO STOP PROPAGATION

const divs = document.querySelectorAll('div');

function bubble(e) {
  //stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}