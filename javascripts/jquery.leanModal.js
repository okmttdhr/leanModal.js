// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL

(function($){
    $.fn.extend({leanModal:function(options){
        var defaults={
            top:100,
            overlay:0.5,
            closeButton:null,
            position:0,
            place:"undefined",
            animate_type:"fade",
            speed_overlay:800,
            speed_modal:800,
        };

        var overlay=$("<div id='lean_overlay'></div>");
        $("body").append(overlay);

        options=$.extend(defaults,options);
        var o = options;

        return this.each(function(){
            $(this).click(function(e){
                var modal_id = $(this).attr("href");

                $("#lean_overlay").click(function(){close_modal(modal_id)});

                $(o.closeButton).click(function(){close_modal(modal_id)});

                var modal_height = $(modal_id).outerHeight();
                var modal_width = $(modal_id).outerWidth();

                $("#lean_overlay").css({"display":"block",opacity:0});
                $("#lean_overlay").transition({opacity:o.overlay},o.speed_overlay);

                if ($(window).height() < o.position) {
                    var p = 'absolute';
                    var top = ($(window).height()/2) - (modal_height/2);
                } else {
                    var p = 'fixed';
                    var top = o.top;
                }

                $(modal_id).css({
                    "display":"block",
                    "opacity":0,
                    "z-index":11000,
                    "margin-left":-(modal_width/2)+"px",
                    "position":p,
                    "top":top+"px",
                    "left":50+"%",
                });

                if (o.animate_type == "fade_scale") {
                    $(modal_id).transition({transform: 'scale(1)', opacity: 1}, o.speed_modal, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
                } else {
                    $(modal_id).css({"display":"block",opacity:0});
                    $(modal_id).transition({opacity:1},o.speed_modal);
                };

                e.preventDefault();
            })
        });

        function close_modal(modal_id){
            $("#lean_overlay").fadeOut(o.speed_overlay);
            if (o.animate_type == "fade_scale") {
                $(modal_id).css({transform: 'scale(0.5)', 'display': 'none'});
            } else {
                $(modal_id).css({"display":"none"});
            };
        }

    }})

})(jQuery);
