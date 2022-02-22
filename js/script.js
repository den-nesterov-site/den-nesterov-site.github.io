$(document).ready(function(){
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.inner'
    });
    $('.inner').slick({
        prevArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
        nextArrow: '<button type="button" class="slick-prev"><img src= "img/left.svg"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-nav'
    }
    );
});

const fadeIn = (el, timeout, display) =>{
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`
  setTimeout(() => {
      el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) =>{
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`
  el.style.opacity = 0;

  setTimeout(() => {
      el.style.display = 'none';
  },timeout);
};
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

function readMore() {
  const more_but = document.querySelector('.more');
  const about_servis = document.querySelector('.about_servis');
  const about_servis_more = document.querySelector('.about_servis_more')
  if(more_but.textContent === 'Подробнее'){
    about_servis.style.display = 'none';
    about_servis_more.style.display = 'block';
    more_but.textContent = 'Назад';
  }else{
    about_servis.style.display = 'block';
    about_servis_more.style.display = 'none';
    more_but.textContent = 'Подробнее';
  };
};

const servisGoWeb = document.getElementById('webGo');
const modalForm = document.querySelector('.modalForm');
const head_servis = document.getElementById('head_servis');
const servisGoB = document.getElementById('sv');
const close = document.querySelector('.close');
let productArray = [];
servisGoWeb.addEventListener('click', function() {
  fadeIn(modalForm, 1000);
  head_servis.textContent = 'Создание сайтов';
  let obj = {};
  obj.title = head_servis.textContent;
  productArray.push(obj);
  console.log(productArray);
});
servisGoB.addEventListener('click', function () {
  fadeIn(modalForm, 1000);
  head_servis.textContent = 'Создание ботов';
  let obj = {};
  obj.title = head_servis.textContent;
  productArray.push(obj);
  console.log(productArray);
});
close.addEventListener('click', function() {
  fadeOut(modalForm, 1000);
});

document.querySelector('.order-modal_form_p').addEventListener('submit', (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  formData.append('Товары', JSON.stringify(productArray));

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200){
              // fadeIn(thank, 1000);
              console.log('Отправлено');
          }
      }
  }
  // closeThank.addEventListener('click', (e) => {
  //     let display = e.currentTarget.style.display
  //     if(display = 'block' ) {
  //         fadeOut(thank, 1000);
  //     }
  // }); 

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);
  

  self.reset();
});
