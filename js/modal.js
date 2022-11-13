$(document).ready(function() {
    modalButton = $("[data-modal]");
    modalWindow = $("#modal");
    modalClose = $("[data-close]")

    modalButton.on("click", function() {
        modalWindow.addClass('active');
        $("body, html").addClass('no-scroll');
    });

    modalClose.on("click", function() {
        modalWindow.removeClass('active');
        $("body, html").removeClass('no-scroll');
    });
    
    $(".modal").on("click", function() {
        $(this).removeClass('active');
        $("body, html").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

    /* ------------------------------------------ */

    burger = $('.header__menu');
    burgerBody = $('.header__nav');

    burger.on("click", function() {
        $(this).toggleClass('active');
        $(burgerBody).toggleClass('show');
    });

    /* ---------------------------------------- */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* ---------------------------------------------- */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 150
        });
    });

    /* ------------------------------------------ */

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $('[data-cat]').removeClass("hide");
        } else {
            $("[data-cat]").each(function() {

                let workCat = $(this).data("cat");
    
                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
    
            });
        }
    });
});