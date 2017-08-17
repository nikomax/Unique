$('.single-item').slick({
        dots: true,
        arrows:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
]
});
// $('.responsive').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true
// });
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }

    ]
});

// var w = $(window).width();
//     $('.multiple-items').slick({if (w < '768'){
//         slidesToShow: 2;
//     } else if ($(window).width() >= '768'){
//         slidesToShow: 2
//     }
//     });




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