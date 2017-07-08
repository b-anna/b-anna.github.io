
(function(){
    $(document).ready(function(){
        $('ul#tabBox__head').each(function(){
            var $active, $content, $links = $(this).find('a');
            $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
            $active.addClass('active');
            $content = $($active[0].hash);
            $links.not($active).each(function () {
                $(this.hash).hide();
            });
            $($(".li>a")[0]).focus();
            $('a').on("focus", function(e){
                $active.removeClass('active');
                $active = $(this);
                $active.click();
            });
            $('a').on("click", function(e){
                $active.removeClass('active');
                $content.hide();
                $active = $(this);
                $content = $(this.hash);
                $active.addClass('active');
                $content.show();
                return false;
            });
        });

            var $tipEl = $('<p>');
            $tipEl.css({
                border: '1px solid #515151',
                padding: '3px',
                position: 'absolute',
                left: '65%',
                borderRadius: '5px'
            });
            var tip, timer;
            $Element.on('focus mouseenter', function (t) {
                if (!timer) {
                    tip = $(this).attr('title');
                    $tipEl.text(tip);
                    // $(this).attr('title', '');
                    $($tipEl).hide();
                    $(this).after($tipEl);
                    $($tipEl).fadeIn(200);
                    timer = setTimeout(function () {
                        $($tipEl).fadeOut(200);
                        return false;
                    }, 2000);
                }
                return false;
            })
                .on('blur mouseleave', function () {
                    timer = 0;
                    return false;

                });
        }
        var tipName = new TipsConst($('#tipName'));
        var tipLastname = new TipsConst($('#tipLastname'));
        var tipAddres = new TipsConst($('#tipAddres'));

        $('input[type=button]').on('click',function(){
            $(".toolTip__target").each(function(){
               $(this).focus();
            });
        });
    });
})();
