/*
 Theme Name: Payloan
 Theme URI: 
 Author: 
 Author URI: 
 Description: Payloan - Banking & Business Loan HTML5 Responsive Template
 Version: 1.0
 License:
 License URI:
 */
/*=======================================================================
 [Table of contents]
 ========================================================================
 1. Revolution Slider
 2. Bact To Top
 3. Related Blog Post
 4. Customer Slider
 5. Image Full Width
 6. Portfolio Suffle js
 7. Related Folio Slider
 8. Google Map
 9. Team Slider
 10. Loan Calculation
 11. Fixed Header
 12. Preloder
 13. Contact From Submit
 14. Mobile Menu
 */


(function ($) {
    'use strict';

    /*--------------------------------------------------------
     / 1. Revolution Slider
     /----------------------------------------------------------*/

    // var revapi = jQuery('#rev_slider_1').show().revolution({
    //     delay: 7000,
    //     responsiveLevels: [1400, 1200, 1140, 778, 480],
    //     gridwidth: [1140, 1140, 920, 700, 380],
    //     sliderLayout: 'fullscreen',
    //     navigation: {
    //         arrows: {
    //             enable: false
    //         },
    //         bullets: {
    //             enable: false
    //         }
    //     }
    // });

    /*--------------------------------------------------------
     / 2. Bact To Top
     /---------------------------------------------------------*/
    $("body, html").on("click", "#backTo", function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    /*--------------------------------------------------------
     / 3. Related Blog Post
     /---------------------------------------------------------*/
    if ($('.related_post_slide').length > 0) {
        $('.related_post_slide').owlCarousel({
            items: 2,
            margin: 60,
            autoplay: false,
            nav: true,
            navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        });
    }

    /*--------------------------------------------------------
     / 4. Customer Slider
     /---------------------------------------------------------*/
    if ($('.customer_area').length > 0) {
        $('.customer_area').owlCarousel({
            items: 1,
            margin: 0,
            autoplay: false,
            nav: true,
            navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
            dots: false
        });
    }

    /*--------------------------------------------------------
     / 5. Image Full Width
     /---------------------------------------------------------*/
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                row = $this.closest(".row"),
                cols = $this.closest('[class^="col-"]'),
                rect = this.getBoundingClientRect(),
                l = row[0].getBoundingClientRect(),
                s = cols[0].getBoundingClientRect(),
                r = rect.left,
                d = i - rect.right,
                c = l.left + (parseFloat(row.css("padding-left")) || 0),
                u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                p = s.left,
                f = i - s.right,
                styles = {
                    "margin-left": 0,
                    "margin-right": 0
                };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d
            }
            $this.css(styles)
        })
    }

    tw_stretch();

    /*--------------------------------------------------------
     / 6. Portfolio Suffle js
     /---------------------------------------------------------*/
    if ($("#grid_suffle").length > 0) {
        $(window).load(function () {
            $("#grid_suffle").shuffle({
                itemSelector: ".item",
                gutterWidth: 0
            });
        });
    }

    /*--------------------------------------------------------
     / 7. Related Folio Slider
     /---------------------------------------------------------*/
    if ($('.related_slide').length > 0) {
        $('.related_slide').owlCarousel({
            items: 2,
            margin: 40,
            autoplay: true,
            nav: false,
            navText: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    }

    /*--------------------------------------------------------
     / 8. Google Map
     /---------------------------------------------------------*/
    if ($("#gmap").length > 0) {
        var map;

        map = new GMaps({
            el: "#gmap",
            lat: 39.966528,
            lng: -75.158284,
            scrollwheel: false,
            draggable: false,
            zoom: 16,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false,
        });
        var image = "";
        map.addMarker({
            lat: 39.966528,
            lng: -75.158284,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    { "color": "#ffffff" }
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    { "color": "#f2f2f2" }
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    { "color": "#f2f2f2" }
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#2d2d2d" }
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    { "color": "#f2f2f2" }
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    { "saturation": 1 },
                    { "weight": 0.1 },
                    { "color": "#b1b1b1" }
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    /*------------------------------------------------------------------------------
     / 9. Team Slider
     /------------------------------------------------------------------------------*/
    if ($('.team_slider').length > 0) {
        $('.team_slider').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            dots: false,
            arrows: true,
            centerMode: true,
            asNavFor: '.slider-nav',
            centerPadding: '0'
        });

        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            asNavFor: '.team_slider',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    }

    /*--------------------------------------------------------
     / 10. Loan Calculation
     /--------------------------------------------------------*/
    if ($('#price_range').length > 0) {
        $("#price_range").slider({
            range: "min",
            value: 90800,
            min: 1,
            max: 181600,
            slide: function (event, ui) {
                $("#amount").val("$" + ui.value);
            }
        });
        $("#amount").val("$" + $("#price_range").slider("value"));
    }

    /*--------------------------------------------------------
     / 11. Fixed Header
     /--------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
            $("#header").addClass('fixedHeader animated flipInX');
        } else {
            $("#header").removeClass('fixedHeader animated flipInX');
        }
    });

    /*--------------------------------------------------------
     / 12. Preloder
     /----------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload && preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
     / 13. Contact From Submit
     /----------------------------------------------------------*/
    if ($("#contactForm").length > 0) {
        $("#contactForm").on('submit', function (e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var f_name = $("#f_name").val();
            var l_name = $("#l_name").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var address = $("#address").val();
            var message = $("#con_message").val();

            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() == '') {
                    $(this).addClass('reqError');
                    required += 1;
                } else {
                    if ($(this).hasClass('reqError')) {
                        $(this).removeClass('reqError');
                        if (required > 0) {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0) {
                $.ajax({
                    type: "POST",
                    url: 'ajax/mail.php',
                    data: {
                        f_name: f_name,
                        l_name: l_name,
                        email: email,
                        phone: phone,
                        address: address,
                        message: message
                    },
                    success: function (data) {
                        //alert(data);
                        $("#con_submit").html('Done!');
                        $("#contactForm input, #contactForm textarea").val('');
                        setTimeout(function () {
                            $("#con_submit").html('Send Message');
                        }, 2500);
                    }
                });
            } else {
                $("#con_submit").html('Failed!');
            }

        });

        $(".required").on('keyup', function (e) {
            $(this).removeClass('reqError');
        });
    }

    /*--------------------------------------------------------
     / 14. Mobile Menu
     /----------------------------------------------------------*/
    if ($('.mobilemenu').length > 0) {
        $('.mobilemenu').on('click', function (e) {
            var w = $(window).width();
            $(this).toggleClass('active');
            $('.mainmenu > ul').slideToggle('slow');
        });

        $('.mainmenu ul li.menu-item-has-children').each(function () {
            var $this = $(this);
            $this.append('<span class="submenu_toggler d-md-none d-lg-none d-xl-none"><i class="fa fa-angle-down"></i></span>');
        });

        $('.mainmenu ul li.menu-item-has-children > span.submenu_toggler').on('click', function () {
            var $this = $(this);

            if ($(this).hasClass('active-span')) {
                $('i', $this).removeClass('fa-angle-up').addClass('fa-angle-down');
            } else {
                $('i', $this).addClass('fa-angle-up').removeClass('fa-angle-down');
            }
            $(this).prev('ul.sub-menu').slideToggle();
            $(this).toggleClass('active-span');
        });
    }
})(jQuery);

var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.body.style.display = 'block';
}

// tags disabled
function wa_conversion_button(send_to, url) {
    let callback = function () {
        if (typeof (url) != 'undefined') {
            $('<a href="' + url + '" target="blank"></a>')[0].click();
        }
    };

    // if (readCookie("wa_contact_flag") !== null) {
    //     eraseCookie("wa_contact_flag");
    // }
    // createCookie("wa_contact_flag", 1, 30);

    // fbq('track', 'Lead');
    // gtag('event', 'Contacto Whatsapp', {
    //     'event_category': 'Clic boton',
    //     'event_label': 'Boton Whatsapp'
    // });
    // gtag('event', 'conversion', {
    //     'send_to': send_to,
    //     'event_callback': callback
    // });

    // return false;
}

document.addEventListener("DOMContentLoaded", function () {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(function (lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    }
});

$(document).on('ready', function () {
    if (document.cookie.indexOf("accepted_cookies=") < 0) {
        $('.cookie-overlay').css('display', 'block');
    }

    if (document.cookie.indexOf("accepted_cookies=") >= 0) {
        $('.cookie-overlay').css('display', 'none');
    }

    $('.accept-cookies').on('click', function () {
        document.cookie = "accepted_cookies=1"
        $('.cookie-overlay').css('display', 'none');
    })

    $('.close-cookies').on('click', function () {
        $('.cookie-overlay').css('display', 'none');
    })
});

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

$('#searchSchool').on("keyup input", function () {
    let inputVal = $(this).val();
    let location = $("#searchLocation").val();
    var resultDropdown = $(this).siblings("#livesearch");
    if (inputVal.length) {
        $.get("actions/search.php", { term: inputVal, location: location }).done(function (data) {
            console.log(data);
            resultDropdown.html(data);
        });
    } else {
        resultDropdown.empty();
    }
});

$(document).on("click", ".result p", function () {
    $(this).parents(".search-box").find('input[type="text"]').val($(this).text());
    $(this).parent(".result").empty();
});

// tags disabled
// $('.whatsapp-action').click(function () {
//     ttq.load('CC33NTBC77U4JJ3BKFM0');
//     ttq.page();
//     window.lintrk('track', { conversion_id: 10078308 });
// });

$('.social-action').click(function () {
    // segmntdot
});

$('.phone-action').click(function () {
    // fbq('track', 'Lead');
    // gtag('event', 'conversion', { 'send_to': 'AW-1016248286/kbQKCJyq_asDEN7vyuQD' });
    // gtag('event', 'Telefono', {
    //     'event_category': 'Clic Telefono',
    //     'event_label': 'Telefono de contacto'
    // });
    // window.lintrk('track', { conversion_id: 10078308 });

    // segmntdot
});

$('.map-action').click(function () {
    // segmntdot
});

// var $zoho = $zoho || {};
// $zoho.salesiq = $zoho.salesiq || {
//     widgetcode: "0dcd04268c0956c9d17f03dc9f12f8d63dad7703f27f5a30429890a776f27e2b980a1b36ac45c227655cbd38c51f5f17d9ffd0940de4694c902e4dd6c0b11dd8",
//     values: {},
//     ready: function () {
//         $zoho.salesiq.visitor.chat(function (visitid, data) {
//             // segmntdot
//         });
//     }
// };
// var d = document;
// s = d.createElement("script");
// s.type = "text/javascript";
// s.id = "zsiqscript";
// s.defer = true;
// s.src = "https://salesiq.zoho.com/widget";
// t = d.getElementsByTagName("script")[0];
// t.parentNode.insertBefore(s, t);

!function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = w[t] = w[t] || [];
    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) {
        t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
    };
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e
    }, ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
        var o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(o, a)
    };

    ttq.load('CC33NTBC77U4JJ3BKFM0');
    ttq.page();
}(window, document, 'ttq');