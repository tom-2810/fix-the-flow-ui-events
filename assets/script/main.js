let frontend = document.querySelector('a:nth-of-type(1)');
let design = document.querySelector('a:nth-of-type(2)');
let and = document.querySelector('a:nth-of-type(3)');
let development = document.querySelector('a:nth-of-type(4)');
let sprint5 = document.querySelector('a:nth-of-type(5)');
let fix = document.querySelector('a:nth-of-type(6)');
let the = document.querySelector('a:nth-of-type(7)');
let flow = document.querySelector('a:nth-of-type(8)');
let user = document.querySelector('a:nth-of-type(9)');
let interface = document.querySelector('a:nth-of-type(10)');
let interaction = document.querySelector('a:nth-of-type(12)');

var rotateDegrees = 0;

frontend.addEventListener('click', () => errorHandler(frontend));
frontend.addEventListener('animationend', () => errorHandler(frontend));

design.addEventListener('click', () => focusHandler(design));
design.addEventListener('animationend', () => focusHandler(design));

interaction.addEventListener('click', () => jumpHandler(interaction));
interaction.addEventListener('animationend', () => jumpHandler(interaction));

document.addEventListener('wheel', function (e) {
  rotateDegrees += e.deltaY * .6;
  rotateHandler(and, rotateDegrees);
});

function errorHandler(element) {
  element.classList.toggle('error');
}

function focusHandler(element) {
  element.classList.toggle('focus');
}

function rotateHandler(element, degrees) {
  element.classList.add('rotate');
  element.style.setProperty('--degrees', degrees + "deg");
}

function jumpHandler(element) {
  element.classList.toggle('jump');
}
