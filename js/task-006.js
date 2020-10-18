// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const dom_inputValidationInput = document.querySelector('#validation-input');
dom_inputValidationInput.addEventListener('blur', e => {
  if (e.target.value) {
    if (e.target.value.length == e.target.dataset.length) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
    } else {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
    }
  } else {
    e.target.classList.remove('valid');
    e.target.classList.remove('invalid');
  }
});
