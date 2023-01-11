let frontend = document.querySelector('a:nth-of-type(1)');
let design = document.querySelector('a:nth-of-type(2)');
let and = document.querySelector('a:nth-of-type(3)');
let development = document.querySelector('a:nth-of-type(4)');
let sprint5 = document.querySelector('a:nth-of-type(5)');
let fix = document.querySelector('.fix a');
let the = document.querySelector('a:nth-of-type(6)');
let flow = document.querySelector('a:nth-of-type(7)');
let user = document.querySelector('a:nth-of-type(8)');
let interface = document.querySelector('a:nth-of-type(9)');
let events = document.querySelector('a:nth-of-type(10)')
let interaction = document.querySelector('a:nth-of-type(11)');
var allActive = document.querySelectorAll(".active");

var rotateDegrees = 0;

document.addEventListener('keydown', checkKeyPressed);

frontend.addEventListener('click', () => errorHandler(frontend));
frontend.addEventListener('animationend', () => errorHandler(frontend));

design.addEventListener('click', () => focusHandler(design));
design.addEventListener('animationend', () => focusHandler(design));

interaction.addEventListener('click', () => jumpHandler(interaction));
interaction.addEventListener('animationend', () => jumpHandler(interaction));

development.addEventListener('click', () => flipHandler(development));
development.addEventListener('animationend', () => flipHandler(development));

fix.addEventListener('click', () => poofHandler(fix));
fix.addEventListener('animationend', () => poofHandler(fix));

sprint5.addEventListener('click', colorFillHandler);

events.addEventListener('mousedown', () => flyHandler(events));
events.addEventListener('animationend', () => flyHandler(events))

document.addEventListener('wheel', function (e) {
  rotateDegrees += e.deltaY * .6;
  rotateHandler(and, rotateDegrees);
});

interface.addEventListener('dblclick', () => dblclickHandler(interface));
interface.addEventListener('animationend', () => dblclickHandler(interface));

function errorHandler(element) {
  element.classList.toggle('error');
}

function focusHandler(element) {
  element.classList.toggle('focus');
}

function flipHandler(element) {
  element.classList.toggle('flip');
}

function poofHandler(element) {
  element.classList.add('poof');
  document.querySelector('.fix div').classList.add('poof-message');
}

function rotateHandler(element, degrees) {
  element.classList.add('rotate');
  element.style.setProperty('--degrees', degrees + "deg");
}

function jumpHandler() {
  interaction.classList.toggle('jump')
}

function flyHandler(element) {
  element.classList.toggle('fly');
}

function checkKeyPressed(e) {
  switch (e.keyCode) {
    case 32:
      document.querySelectorAll('a').forEach(function (element) {
        element.classList.toggle('gradient');
      })
  }
}

function dblclickHandler(element) {
  element.classList.toggle('grow');
}

function colorFillHandler(element) {
  const colorBackground = document.querySelector(".colorBackground");

  colorBackground.style.backgroundColor = randomColor();
  colorBackground.classList.toggle("fill");
}

function randomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}