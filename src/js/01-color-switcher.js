const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

startBtnEl.addEventListener('click', onClickStartBtn);
stopBtnEl.addEventListener('click', onClickStopBtn);
let setIntervalBgr = null;
function onClickStartBtn(event) {
  setIntervalBgr = setInterval(changeBgrColor, 1000);
  startBtnEl.disabled = true;
}
function changeBgrColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStopBtn(event) {
  clearInterval(setIntervalBgr);
  startBtnEl.disabled = false;
}
