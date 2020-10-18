//todo Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// 'В списке 3 категории.'.

let categories =  document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

//todo Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Категория: Животные
// Количество элементов: 4

categories.forEach(el => {
  let dataOut = {};
  for (let innerEl of el.children) {
    if (innerEl.nodeName.toLowerCase() === 'h2'){
      dataOut.categori = innerEl.innerText;}
    else if (innerEl.nodeName.toLowerCase() === 'ul') {
      dataOut.count = innerEl.children.length;
    }
  }
  console.log(`Категория: ${dataOut.categori}\nКоличество єлементов: ${dataOut.count}`);
})
