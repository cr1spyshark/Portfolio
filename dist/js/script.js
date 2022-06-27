const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', function() {
    menu.classList.add('active');
});

close.addEventListener('click', function() {
    menu.classList.remove('active');
}); 

overlay.addEventListener('click', function() {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;

});

new WOW().init();