const up = document.querySelector('.up');
const logo_header = document.querySelector('.logo_header');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    if (window.pageYOffset > 65){
    up.classList.add('active');
    logo_header.classList.add('active');
    logo.classList.add('active');
    menu.classList.add('active');
    up.style.transition = `all 500ms`;
    logo_header.style.transition = `all 1000ms`;
    logo.style.transition = `all 1000ms`;
    menu.style.transition = `all 1500ms`;
    };
    if (window.pageYOffset < 65){
    up.classList.remove('active');
    logo_header.classList.remove('active');
    logo.classList.remove('active');
    menu.classList.remove('active');
    up.style.transition = `all 500ms`;
    logo_header.style.transition = `all 1000ms`;
    logo.style.transition = `all 1000ms`;
    menu.style.transition = `all 1500ms`;
    };
});
