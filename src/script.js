$(document).ready(
    function() {
        $(".ev-download-link-1").hover(
            function () {
                $(this).removeClass('off').addClass('on');
            },
            function () {
                $(this).removeClass('on').addClass('off');
            }
        );

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $(".interior-of-car").css({
              "transform": "scale(" + (1 + scroll/5000) + ")"
            })
        
          })

        $('.hidden-text').fadeIn(500);
    }
)