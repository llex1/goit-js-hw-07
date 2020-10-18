//todo Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let dom_Ingredients = document.querySelector('#ingredients');
const dataOut=[];
ingredients.forEach(el => {
  let createLi = document.createElement('li');
  createLi.textContent = el;
  dataOut.push(createLi);
})
dom_Ingredients.append(...dataOut);