// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

let inputNumber = 0
const dom_inputControls = document.querySelector('#controls input');
const dom_buttonsControls = document.querySelectorAll('#controls button');
const dom_divBoxes = document.querySelector('#boxes');

dom_inputControls.addEventListener('blur', el => inputNumber = el.target.value);
dom_buttonsControls.forEach(el => el.addEventListener('click', el => el.target.dataset.action === 'render' ? createBoxes(inputNumber) : destroyBoxes()));

const createBoxes = function(amount) {
  let size = 30;
  dom_divBoxes.innerHTML ? destroyBoxes(false) : '';
  for (let i=0; i<amount; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    size += 10;
    dom_divBoxes.append(newDiv);
  }
};
const destroyBoxes = function(isInputReset = true) {
  isInputReset ? dom_inputControls.value = '' : '';
  dom_divBoxes.innerHTML = '';
}