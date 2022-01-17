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
                        "<div class='cart-Menu__Title'>Ваша корзина <span class='itemCount'>(1)</span></div>",
                        "close"
                    ],
                },
                {
                    "position": "bottom",
                    "content": [
                        "<div class='cartTotalContainer'><div class='totalTitle'>Итого:</div><div class='totalValues-container'><div class='totalValues'>5 147,17р</div><div class='savedValues'>Вы сэкономили 5 147,17р!</div></div></div>",
                        "<div class='checkoutButton'><a href='ordering.html'>Оформить</span></a></div>"
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

$(document).on('ready', function () {
    $(".product-first-slick").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: false,
        arrows: false
    });
    $('.product-first-slick').on('click', function () {
        $(this).slick('slickNext');
    });
});

$(document).on('ready', function () {
    $(".reviews-items").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        currentDirection: 0,
        variableWidth: true,
        swipeToSlide: true,
        mobileFirst: true,
        responsive: [{
            breakpoint: 415,
            settings: {
                dots: false
            }
        }],
        autoplay: false,
        autoplaySpeed: 5000,
        nextArrow: '<i class="fa fa-angle-right">',
        prevArrow: '<i class="fa fa-angle-left">'
    });
});

$(function () {
    $('.button-one').click(function () {
        $('.button-one').addClass('button-active');
        $('.button-two').removeClass('button-active');
        $('.button-three').removeClass('button-active');
        $('.button-four').removeClass('button-active');
    });
    $('.button-two').click(function () {
        $('.button-two').addClass('button-active');
        $('.button-one').removeClass('button-active');
        $('.button-three').removeClass('button-active');
        $('.button-four').removeClass('button-active');
    });
    $('.button-three').click(function () {
        $('.button-three').addClass('button-active');
        $('.button-one').removeClass('button-active');
        $('.button-two').removeClass('button-active');
        $('.button-four').removeClass('button-active');
    });
    $('.button-four').click(function () {
        $('.button-four').addClass('button-active');
        $('.button-one').removeClass('button-active');
        $('.button-two').removeClass('button-active');
        $('.button-three').removeClass('button-active');
    });
});

//Страница оформления заказа 

$(document).ready(function () {
    $('#submit_registration').click(function (ev) {
        $('.registration').addClass(
            'disabled');
        $('#checkout-registration').removeClass(
            'disabled');
        $('.address-deactive').addClass(
            'disabled');
        $('.address').removeClass(
            'disabled');
        event.preventDefault();
    });
    $('#registrationEditButton').click(function (ev) {
        $('.registration').removeClass(
            'disabled');
        $('#checkout-registration').addClass(
            'disabled');
        $('.address-deactive').removeClass(
            'disabled');
        $('.address').addClass(
            'disabled');
        event.preventDefault();
    });
    $('#submit_address').click(function (ev) {
        $('.address').addClass(
            'disabled');
        $('#сheckout-address').removeClass(
            'disabled');
        $('.delivery-deactive').addClass(
            'disabled');
        $('.delivery').removeClass(
            'disabled');
        event.preventDefault();
    });
    $('#addressEditButton').click(function (ev) {
        $('.address').removeClass(
            'disabled');
        $('#сheckout-address').addClass(
            'disabled');
        $('.delivery-deactive').removeClass(
            'disabled');
        $('.delivery').addClass(
            'disabled');
        event.preventDefault();
    });
    $('#submit_delivery').click(function (ev) {
        $('.delivery').addClass(
            'disabled');
        $('#сheckout-delivery').removeClass(
            'disabled');
        $('.payment-deactive').addClass(
            'disabled');
        $('.payment').removeClass(
            'disabled');
        event.preventDefault();
    });
    $('#deliveryEditButton').click(function (ev) {
        $('.delivery').removeClass(
            'disabled');
        $('#сheckout-delivery').addClass(
            'disabled');
        $('.payment-deactive').removeClass(
            'disabled');
        $('.payment').addClass(
            'disabled');
        ev.stopPropagation();
    });
});

$(document).ready(function () {
    $('.form-control_promo').click(function (ev) {
        $('.promo-label_wrapper').addClass(
            'promo-label_wrapper-active');
        $('.promo-label_wrapper').removeClass(
            'promo-label_wrapper-deactive');
        $('.input_promo-border').addClass(
            'input_promo-border-active');
        ev.stopPropagation();
    });
    $('html').click(function () {
        $('.promo-label_wrapper').removeClass(
            'promo-label_wrapper-active');
        $('.promo-label_wrapper').addClass(
            'promo-label_wrapper-deactive');
        $('.input_promo-border').removeClass(
            'input_promo-border-active');
    });
});

$(function () {
    $('.closePromoIcon').click(function () {
        $('.promo-item').addClass('disabled');
        $('.promo-item').addClass('active');
        $('.cartAdd_promo').addClass('active');
        $('.cartAdd_promo').removeClass('disabled');
    });
    $('.cartAdd_promo').click(function () {
        $('.cartAdd_promo').addClass('disabled');
        $('.cartAdd_promo-form').addClass('active');
        $('.cartAdd_promo-form').removeClass('disabled');
    });
    $('.applyButtonContainer').click(function () {
        $('.cartAdd_promo-form').addClass('disabled');
        $('.promo-item').removeClass('disabled');
        $('.promo-item').addClass('active');
    });
});

//Страница авторизации 

$(document).ready(function () {
    $('.form-control_login').click(function (ev) {;
        $('.input_login-border').addClass(
            'input_login-border-active');
        ev.stopPropagation();
    });
    $('html').click(function () {
        $('.input_login-border').removeClass(
            'input_login-border-active');
    });
});

$(document).ready(function () {
    $('.form-control_password').click(function (ev) {;
        $('.input_password-border').addClass(
            'input_password-border-active');
        ev.stopPropagation();
    });
    $('html').click(function () {
        $('.input_password-border').removeClass(
            'input_password-border-active');
    });
});

//Страница регистрации 

$(document).ready(function () {
    $('.form-control_password-confirmed').click(function (ev) {;
        $('.input_password-confirmed-border').addClass(
            'input_password-confirmed-border-active');
        ev.stopPropagation();
    });
    $('html').click(function () {
        $('.input_password-confirmed-border').removeClass(
            'input_password-confirmed-border-active');
    });
});