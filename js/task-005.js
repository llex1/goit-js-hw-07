// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const dom_inputNameInput = document.querySelector('#name-input');
const dom_spanNameOutput = document.querySelector('#name-output');

dom_inputNameInput.addEventListener('input', e => {
  e.target.value ? dom_spanNameOutput.innerText = e.target.value : dom_spanNameOutput.innerText = 'незнакомец';
});