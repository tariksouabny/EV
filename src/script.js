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
    }
)