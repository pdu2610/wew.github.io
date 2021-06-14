//nav-bar js
if ($("#nav").length) {
    $('.menu-icon').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $('#nav').slideToggle('slow');
        return false;
    });
};

//includes-slider js
$('.includes-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    lazyLoad: true,

    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        479: {
            items: 1
        },
        574: {
            items: 2
        },
        767: {
            items: 2
        },
        992: {
            items: 3
        },
        1440: {
            items: 3
        }
    }
})
//includes-slider js
$('.program-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        479: {
            items: 2
        },
        574: {
            items: 2
        },
        767: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
//banner-slider js
$('.banner-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//header-form js
$("#footerdate").datepicker({});
$("#footertime").heapbox({});
$('#other-field').focus(function() {
    $('#other').prop("checked", true);
});
//footer-form js
$("#headerdate").datepicker({});
$("#headertime").heapbox({});
$('#other-field').focus(function() {
    $('#other').prop("checked", true);
});

