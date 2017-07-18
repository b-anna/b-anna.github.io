/*! jCarousel - v0.3.5 - 2017-03-15
 * http://sorgalla.com/jcarousel/
 * Copyright (c) 2006-2017 Jan Sorgalla; Licensed MIT */
(function($) {
    'use strict';
    var curentLeft = 0;
    var method={
        init: function(options){
            var init = $(this).data('lineCarousel');
            if (init) {
                return this;
            } else {
                $(this).data('lineCarousel', true);
                return this;
            }
        },
        nextSlide: function(){
            if(curentLeft>-1400) {
                curentLeft -= 200;
            }else{
                curentLeft = 0;
            }
            $(".carousel__items").animate({
                left: curentLeft+'px'
            },400);
            return false;
        },
        prevSlide: function(){
            if(curentLeft<0) {
                curentLeft += 200;
            }else{
                curentLeft = -1400;
            }
            $(".carousel__items").animate({
                left: curentLeft+'px'
            },400);
            return false;
        }
    };
    $.fn.lineCarousel = function(outMethod){
        if (outMethod==='nextSlide') {
            method.nextSlide();
        }else if (outMethod==='prevSlide'){
            method.prevSlide();
        }
    }

}(jQuery, document));
