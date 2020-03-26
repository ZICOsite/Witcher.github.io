$(".main__watch").click(function () {
    $("iframe").show();
    $('.video').show();
    $('.close-btn').show();
    $('body').addClass('active');
    $(".hamburger").hide();
    // $('.slider').hide();
})
$(".main__play").click(function () {
    $("iframe").show();
    $('.video').show();
    $('.close-btn').show();
    $('body').addClass('active');
})
$(".ham").click(function () {
    $('body').toggleClass('active');
    $('main').toggleClass("lock");
    $('footer').toggleClass("lock");
})
$(".video").click(function () {
    $("iframe, .video").hide();
    $('body').removeClass('active');
    $(".ham").show();
    $('.slider').show();
})

$(document).ready(function () {
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            });
        });
        
    })
    new WOW({ mobile: false }).init();