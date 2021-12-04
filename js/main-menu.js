$(".mm-listitem__text-one").hover(function () {
    $('.sub-menu_image-container-one').addClass("image-container-active");
    $('.sub-menu_image-container-one').removeClass("image-container-desabled");
});
$(".mm-listitem__text-two").hover(function () {
    $('.sub-menu_image-container-one').addClass("image-container-desabled");
    $('.sub-menu_image-container-two').removeClass("image-container-desabled");
    $('.sub-menu_image-container-two').addClass("image-container-active");
});
$(".mm-listitem__text-three").hover(function () {
    $('.sub-menu_image-container-one').addClass("image-container-desabled");
    $('.sub-menu_image-container-two').removeClass("image-container-active");
    $('.sub-menu_image-container-two').addClass("image-container-desabled");
    $('.sub-menu_image-container-three').removeClass("image-container-desabled");
    $('.sub-menu_image-container-three').addClass("image-container-active");
});