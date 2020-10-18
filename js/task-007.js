// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const dom_inputFontSizeControl = document.querySelector('#font-size-control');
const dom_spanText = document.querySelector('#text');

dom_inputFontSizeControl.addEventListener('input', e => {
  dom_spanText.style.fontSize = `${e.target.value-50+16}px`;
});
