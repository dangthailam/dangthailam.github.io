var scrollByClick = false;

$(".nav-item").click(function() {
    scrollByClick = true;
    $(".nav-item").removeClass("active");
    var id = $(this).attr("id").split('-')[1];
    $('html,body').animate({
            scrollTop: $("#" + id).offset().top + 10
        },
        'slow');
    $(this).addClass("active");
    scrollByClick = false;
});

$(".navbar-brand").click(function() {
    scrollByClick = true;
    $(".nav-item").removeClass("active");
    $('html,body').animate({
        scrollTop: 0
    }, 'slow');
    scrollByClick = false;
});

$(window).scroll(function(event) {
    if (!scrollByClick) {
        var scroll = $(window).scrollTop();
        if (scroll < $("#portfolio").offset().top) {
            $(".nav-item").removeClass("active");
        } else {
            $("section").each(function(e) {
                if ($(this).offset().top < scroll) {
                    $(".nav-item").removeClass("active");
                    $("#to-" + $(this).attr("id")).addClass("active");
                }
            });
        }
    }
});