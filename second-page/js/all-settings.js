document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new Mmenu("#menu", {
            "extensions": [
                "pagedim-black",
                "position-front"
            ],
            "counters": false,
            "navbars": [{
                    "position": "top",
                    "content": [
                        "close",
                        "<a href='#cartMenu'><img src='images/Vector.svg'></a>"
                    ]
                },
                {
                    "position": "bottom",
                    "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                    ]
                },
            ]

        });

    }

);

document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new Mmenu("#cartMenu", {
            "extensions": [
                "pagedim-black",
                "position-right",
                "position-front"
            ],
            navbar: {
                title: ""
              },
            "counters": false,
            "navbars": [{
                    "position": "top",
                    "content": [
                        "<div class='cart-Menu__Title'>Ваша корзина</div>",
                        "close"
                    ],
                },
                {
                    "position": "bottom",
                    "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                    ]
                },
            ]

        });

    }

);

document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new Mmenu("#cartMenuProduct", {
            "extensions": [
                "pagedim-black",
                "position-right",
                "position-front"
            ],
            navbar: {
                title: ""
              },
            "counters": false,
            "navbars": [{
                    "position": "top",
                    "content": [
                        "<div class='cart-Menu__Title'>Ваша корзина</div>",
                        "close"
                    ],
                },
                {
                    "position": "bottom",
                    "content": [
                        "<div class='cartTotalContainer'><div class='totalTitle'>Ваш общий ценник</div><div class='totalValues-container'><div class='totalValues'>5 147,17р</div><div class='savedValues'>Вы сэкономили 5 147,17р!</div></div></div>",
                        "<div class='checkoutButton'><a href='#'>Проверка</span></a></div>"
                    ]
                },
            ]

        });

    }

);


$(document).on('ready', function () {
    $(".main-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<i class="fa fa-angle-right">',
        prevArrow: '<i class="fa fa-angle-left">'
    })
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
});

$(document).on('ready', function () {
    $(".first-regular").slick({
        dots: true,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: '<i class="fa fa-angle-left">',
        asNavFor: '.second-regular'

    });

    $(".second-regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fa fa-angle-right">',
        asNavFor: '.first-regular'
    });

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
});

$(document).on('ready', function () {
    $(".slider-сarousel").slick({
        dots: false,
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: false,
        variableWidth: true,
        mobileFirst:true,
        autoplay: false,
        autoplaySpeed: 5000,
        nextArrow: '<i class="fa fa-angle-right">',
        prevArrow: '<i class="fa fa-angle-left">',
    })
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
});