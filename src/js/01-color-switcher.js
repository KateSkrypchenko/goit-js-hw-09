const refs = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

const TIME_CHANGE = 1000;
let timerId = null;
refs.buttonStop.disabled = true;

refs.buttonStart.addEventListener('click', onStartChangeColor);
refs.buttonStop.addEventListener('click', onStoptChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onGetColorBody() {
  const colorBody = getRandomHexColor();
  refs.body.style.backgroundColor = colorBody;
}

function onStartChangeColor() {
  refs.buttonStart.disabled = true;
  refs.buttonStop.disabled = false;
  timerId = setInterval(onGetColorBody, TIME_CHANGE);
}

function onStoptChangeColor() {
  refs.buttonStart.disabled = false;
  refs.buttonStop.disabled = true;
  clearInterval(timerId);
}