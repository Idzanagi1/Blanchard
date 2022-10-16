let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('nav-active');
    document.body.classList.toggle('stop__scrol');
  })

const button = document.querySelector('.header__button')
const form = document.querySelector('.form')

button.addEventListener('click', function () {
  form.classList.toggle('form__active')
  form.querySelector("input").value = "";
  button.classList.toggle('active')
})

const closed = document.querySelector('.form__closed')

closed.addEventListener('click', function (event) {
  form.classList.remove('form__active')
  button.classList.remove('active')
  event.preventDefault()
})
