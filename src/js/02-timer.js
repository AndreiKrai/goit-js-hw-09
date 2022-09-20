import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const calendarEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtnEl.addEventListener('click', onStartBtnClick);

startBtnEl.disabled = true;
let ms;
let selectedDatesInMs;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0].getTime() < date.getTime()) {
      window.alert('Please choose a date in the future');
      return;
    }
    startBtnEl.disabled = false;
    selectedDatesInMs = selectedDates[0].getTime();
    // ms = selectedDates[0].getTime() - date.getTime();
  },
};
flatpickr(calendarEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onStartBtnClick(event) {
  intervalId = setInterval(() => {
    ms = selectedDatesInMs - new Date().getTime();
    if (ms === 0) {
    }
    const dateCount = convertMs(ms);
    daysEl.textContent = addLeadingZero(dateCount.days);
    hoursEl.textContent = addLeadingZero(dateCount.hours);
    minutesEl.textContent = addLeadingZero(dateCount.minutes);
    secondsEl.textContent = addLeadingZero(dateCount.seconds);
    // const recurs = setInterval(onStartBtnClick, 1000);
  }, 1000);
}
// const onStartBtnCount = setInterval(onStartBtnClick, 1000);

function addLeadingZero(value) {
  // return value;
  return value.toString().padStart(2, '0');
  т;
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
