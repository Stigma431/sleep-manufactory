$(".mm-listitem__text-one").hover(function () {
    $('.sub-menu_image-container-one').toggleClass("image-container-active");
});
$(".mm-listitem__text-two").hover(function () {
    $('.sub-menu_image-container-one').toggleClass("image-container-desabled");
    $('.sub-menu_image-container-two').toggleClass("image-container-desabled");
});
$(".mm-listitem__text-three").hover(function () {
    $('.sub-menu_image-container-one').toggleClass("image-container-desabled");
    $('.sub-menu_image-container-two').toggleClass("image-container-active");
    $('.sub-menu_image-container-three').toggleClass("image-container-desabled");
});