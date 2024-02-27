const btnMenu = document.querySelector('.menu');
const btnExit = document.querySelector('.exit');
const inputs = document.querySelectorAll('input');
const inputsIcons = document.querySelectorAll('.input > i');

const background = document.querySelector('.background');
const buttons = document.querySelector('.buttons');

btnMenu.addEventListener('click', e => {
    if(!buttons.classList.contains('active')) {
        inputs.forEach(input => input.style.zIndex = -1);
        inputsIcons.forEach(icon => icon.style.zIndex = -1);
        buttons.classList.add('active');
        background.classList.add('active');
    }
});

btnExit.addEventListener('click', e => {
    if(buttons.classList.contains('active')){
        inputs.forEach(input => input.style.zIndex = 1);
        inputsIcons.forEach(icon => icon.style.zIndex = 1);
        buttons.classList.remove('active');
        background.classList.remove('active');
    }
});