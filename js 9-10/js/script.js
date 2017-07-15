(function($) {
	    $('select').niceSelect();
	    //menu
	    {
	        $('.menu__item, .submenu__item').hover(
	            function () {
	                $(this).children('.menu__submenu').animate({
	                    height: "toggle",
	                    backgroundColor: "#ccc"
	                }, 300);
	            },
	            function () {
	                $(this).children('.menu__submenu').animate({
	                    height: "toggle",
	                    backgroundColor: '#fff'
	                }, 300);
	            }
	        );
	    }
	    //checkbox
	{

	    $('.check__js-label').each(function (item) {
	        var $s = document.createElement('span');
	        $($s).addClass('check__castom-js');
	        $($s).css({
	            position: 'relative',
	           marginLeft: '10px'
	        });
	        $('.check__js').each(function () {
	            $(this).hide();
	            if($(this).prop("checked")){
	                $(this).parent().children('span').addClass('ch__js-checked');
	            }
	            console.log($(this).prop("disabled"));
	            if($(this).prop("disabled")){

	                $(this).parent().children('span').removeClass('ch__js-checked').addClass('ch__js-checked-disabled');
	            }
	            return true;
	        });

	        $(this).prepend($($s));
	        return true;
	    });
	    $('.check__js').on('click', function (event) {
	        if($(this).prop("checked")){
	            $(this).parent().children('span').addClass('ch__js-checked');
	        }else{
	            $(this).parent().children('span').removeClass('ch__js-checked');

	        }
	    });
	}
	    //jcarousel
	    $(function() {
	        $('.jcarousel').jcarousel({
	            wrap: 'both'
	        });
	        $('.jcarousel').jcarouselAutoscroll({
	            target: '+=1',
	            interval: 3000
	        });

	        $('.jcarousel-control-prev')
	            .on('jcarouselcontrol:active', function() {
	                $(this).removeClass('inactive');
	            })
	            .on('jcarouselcontrol:inactive', function() {
	                $(this).addClass('inactive');
	            })
	            .jcarouselControl({
	                target: '-=1'

	            });

	        $('.jcarousel-control-next')
	            .on('jcarouselcontrol:active', function() {
	                $(this).removeClass('inactive');
	            })
	            .on('jcarouselcontrol:inactive', function() {
	                $(this).addClass('inactive');
	            })
	            .jcarouselControl({
	                target: '+=1'
	            });

	        $('.jcarousel-pagination')
	            .on('jcarouselpagination:active', 'a', function() {
	                $(this).addClass('active');
	            })
	            .on('jcarouselpagination:inactive', 'a', function() {
	                $(this).removeClass('active');
	            })
	            .jcarouselPagination();
	    });
	})(jQuery);
