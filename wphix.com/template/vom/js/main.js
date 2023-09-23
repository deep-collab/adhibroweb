(function ($) {
    "use strict";


$('a.smoth-scroll').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 40
    }, 1000);
    event.preventDefault();
});


    // active
    $('.contact-list').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().find('.contact-list').removeClass('active');
    })


    // clickable menu active
    if ($('#menu-full').length) {
        const slinky = $('#menu-full').slinky()
    }
    function sidebarMainmenu() {
        var menuTrigger = $('.click-menu-active'),
            endTrigger = $('button.close-icon'),
            container = $('.transparent-mainmenu');

        menuTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('inside');
        });

        endTrigger.on('click', function () {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();


/* Search
-------------------------------------------------------*/
var $searchWrap = $('.search-wrap');
var $navSearch = $('.nav-search');
var $searchClose = $('#search-close');

$('.search-trigger').on('click', function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: 'toggle' }, 500);
    $navSearch.add($searchClose).addClass("open");
});

$('.search-close').on('click', function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: 'toggle' }, 500);
    $navSearch.add($searchClose).removeClass("open");
});

function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
}

$(document.body).on('click', function (e) {
    closeSearch();
});

$(".search-trigger, .main-search-input").on('click', function (e) {
    e.stopPropagation();
});



    /*  1. Custom Slider - 00*/
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            fade: true,
            focusOnSelect: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });
        // For Slick Animation
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    /*  2. Custom Mobile
        Menu */
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992",
        meanMenuCloseSize: "18px",
        meanRevealPosition: "right",
        meanExpand: "+",
        meanContract: "-",
        onePage: false
    });


	// Extra info bar //add class
	$('.info-bar').click(function(){
		$('.extra-inofo-bar-1').addClass('info-open');
	  })

	  // Remove clas
	  $('.close-icon').click(function(){
		$('.extra-inofo-bar-1').removeClass('info-open');
	  })


    /*  4. Custom BackGround */
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });


    /*  5. Custom Sticky Menu */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });

    /*  5. Custom Owl-Carousel Activation */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    })

    // blog - active
    $('.postbox__gallery').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* 6. MagnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* 7. MagnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    /*8. Cutom ISOTOPE Plugins */
    var $grid = $('.grid').imagesLoaded( function() {
        // init Isotope
        $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
        }});
        });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*  9. Slick-activation */
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        focusOnSelect: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                        }
            }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    });


    /*  9.h2-brand Slick-activation */
    // blog-activ
    $('.blog-active').slick({
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 900,
        focusOnSelect: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    /*  9.h2-brand Slick-activation */
    // blog-activ
    $('.h3-blog-active').slick({
        dots: false,
        autoplay:false,
        infinite: true,
        speed: 900,
        focusOnSelect: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    // blog-activ
    $('.journey-active').slick({
        dots: false,
        autoplay:false,
        infinite: true,
        speed: 900,
        focusOnSelect: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 1200,
            settings: {
            slidesToShow:1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    // blog-activ
    $('.related-project__active').slick({
        dots: false,
        autoplay:false,
        infinite: true,
        speed: 900,
        focusOnSelect: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    /*  9. h3-brand Slick-activation */
    // blog-activ
    $('.h3-brand-active').slick({
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 900,
        arrows: false,
        focusOnSelect: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    // cool-works-activ
    $('.cool-wroks-active').slick({
        dots:false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 5,
        focusOnSelect: false,
        prevArrow:'<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });

    /*   h2-testimonial-active */
    $('.testmonial-item-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        fade: true,
        asNavFor:'.testmonial-nav'
    });
    $('.testmonial-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: false,
        asNavFor: '.testmonial-item-active',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0,
    });


    /*   h3-testimonial-active */
    $('.testmonial-item-active2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        fade: true,
        asNavFor:'.testmonial-nav2'
    });
    $('.testmonial-nav2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testmonial-item-active2',
        dots: false,
        focusOnSelect: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0,
    });


    /*   h4team-active */
    $('.h4team--active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: false,
        dots: true,
        fade: true,
        asNavFor: '.team__nav--active'
    });
    $('.team__nav--active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.h4team--active',
        dots: false,
        focusOnSelect: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


/*   about-me-slider */
    $('.about-me-nav').slick({
        dots:false,
        infinite: true,
        speed: 300,
        arrows: true,
        focusOnSelect: false,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });


    /*  10. scrollToTop */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fal fa-level-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*  11. Counter Activation*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*  12. Animation Activation */
    new WOW().init();


    // js - tilt
    if ($(".js-tilt").length) {
        $('.js-tilt').tilt();
    }

    if ($("#bar1").length) {
        $('#bar1').barfiller();
    }
    if ($("#bar2").length) {
        $('#bar2').barfiller();
    }
    if ($("#bar3").length) {
        $('#bar3').barfiller();
    }
    if ($("#bar4").length) {
        $('#bar4').barfiller();
    }


    // map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(23.810331, 90.412521), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.business", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": "21" }, { "weight": "4.05" }] }]
        };
        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.810331, 90.412521),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }


})(jQuery);
