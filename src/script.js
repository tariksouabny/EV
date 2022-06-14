function min(val1, val2) {
    return Math.min(val1, val2)
}

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
              "transform": "scale(" + min(1 + scroll/5000, 1.045) + ")"
            })
        
          })

        $('.hidden-text').fadeIn(1000);


        $("h2").cooltext({
               sequence:[
                  {
                     action:"animation",
                     animation:["cool111"],
                     stagger:150
                  }
               ]
            });
    }
)