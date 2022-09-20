import Notiflix from 'notiflix';
const inputDelayEl = document.querySelector('.js-delay');
const inputStepEl = document.querySelector('.js-step');
const inputAmountEl = document.querySelector('.js-amount');
const formEl = document.querySelector('.form');

console.dir(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target.elements;

  let amountNum = Number(amount.value);
  let stepNum = Number(step.value);
  let delayNum = Number(delay.value);
  console.log(delayNum);
  for (let i = 1; i < amountNum; i += 1) {
    createPromise(i, delayNum)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayNum += stepNum;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");}},2000);
// });
