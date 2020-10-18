// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const dom_counter = document.querySelector('#counter');
const dom_spanValue = document.querySelector('#value');
dom_counter.addEventListener('click', e => changeCounter(e, dom_spanValue));
let counterValue = 0;



const changeCounter = function(elementIn, elementOut) {
  const increment = function() {
    counterValue++;
    elementOut.innerText = counterValue;
  }
  const decrement = function() {
    counterValue--;
    elementOut.innerText = counterValue;
  }
  if(elementIn.target.dataset.action === 'increment') {
    increment();
  } else if (elementIn.target.dataset.action === 'decrement'){
    decrement();
  }
  return {
    increment, decrement
  }
}