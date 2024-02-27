const btnMenu = document.querySelector('.menu');
const btnExit = document.querySelector('.exit');
const background = document.querySelector('.background');
const buttons = document.querySelector('.buttons');

btnMenu.addEventListener('click', e => {
    if(!buttons.classList.contains('active')) {
        buttons.classList.add('active');
        background.classList.add('active');
    }
});

btnExit.addEventListener('click', e => {
    if(buttons.classList.contains('active')){
        buttons.classList.remove('active');
        background.classList.remove('active');
    }
});