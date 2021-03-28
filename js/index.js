import colors from './colors'

const startBtnRef = document.querySelector('[data-action="start"]')
const stopBtnRef = document.querySelector('[data-action="stop"]')

const TIME_INTERVAL = 1000;
let intervalId = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtnRef.addEventListener('click', onStartBtnClick)
stopBtnRef.addEventListener('click', onStopBtnClick)

function onStartBtnClick() {
    intervalId = setInterval(changeBodyBgC, TIME_INTERVAL)
    startBtnRef.setAttribute('disabled', true)
}

function onStopBtnClick() {
    clearInterval(intervalId);
    startBtnRef.removeAttribute('disabled')
    document.body.removeAttribute('style')
}

function changeBodyBgC() {
    const colorBodyBgr = randomIntegerFromInterval(0, colors.length - 1)
    document.body.setAttribute('style', `background-color:${colors[colorBodyBgr]}`)
}






