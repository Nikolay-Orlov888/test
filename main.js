const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const toggleMenu = document.querySelector('.toggle-menu');
const mobMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('#overlay')
const bodyEl = document.body;

button.addEventListener('click', function(){
    modal.classList.remove('hidden');
})

modal.addEventListener('click', function(){
    this.classList.add('hidden')
})

modal.querySelector('#modal-login').addEventListener('click', function(event) {
    event.stopPropagation();
})

toggleMenu.addEventListener('click', function(){
    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    bodyEl.classList.toggle('noscroll');
})

mobMenu.addEventListener('click', function(){
    this.classList.remove('active');
    toggleMenu.classList.remove('active');
    overlay.classList.remove('active');
    bodyEl.classList.remove('noscroll');
})