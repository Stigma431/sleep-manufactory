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
                        "<a href=''><img src='images/Vector.svg'></a>"
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
        autoplay: true,
        autoplaySpeed: 5000,
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
        mobileFirst: true,
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