"use strict";
$(".carousel__next").click(function(){
    $('.carousel').lineCarousel('nextSlide');
    return false;
});
$(".carousel__prev").click(function(){
    $('.carousel').lineCarousel('prevSlide');
    return false;
});
