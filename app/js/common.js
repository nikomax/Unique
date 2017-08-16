$('.single-item').slick({
        dots: true
});

// $(document).ready(function(){
//     if ($(window).width() <= '768'){
//         $('.single-item').slick({
//             arrows: false
//         });
//     } else {
//         $('.single-item').slick({
//             arrows: true
//         });
//     }
// });


var hamburger = document.querySelector(".hamburger");
var hamburgerLines = document.querySelectorAll('.hamburger__line');
var navMenu = document.querySelector('.nav');
var bannerContent = document.querySelector('.container--banner');
hamburger.onclick = function () {
    for (var i = 0; i < hamburgerLines.length; i++) {
        hamburgerLines[i].classList.toggle('hamburger__line--active');
    }
    navMenu.classList.toggle('nav--mobile');
    bannerContent.classList.toggle('banner__content--hidden');
}