
function expand(obj) {

    if(screen.width > 998) {
        if (obj.id == "subcat-1") {
            document.getElementById("subcat-1").style.width = "50%";
            document.getElementById("subcat-2").style.width = "25%";
            document.getElementById("subcat-3").style.width = "25%";
            document.getElementById("subcat-di-1").style.display = "block";
            document.getElementById("subcat-di-2").style.display = "none";
            document.getElementById("subcat-di-3").style.display = "none";
        } else if (obj.id == "subcat-2") {
            document.getElementById("subcat-1").style.width = "25%";
            document.getElementById("subcat-2").style.width = "50%";
            document.getElementById("subcat-3").style.width = "25%";
            document.getElementById("subcat-di-1").style.display = "none";
            document.getElementById("subcat-di-2").style.display = "block";
            document.getElementById("subcat-di-3").style.display = "none";
        } else if (obj.id == "subcat-3") {
            document.getElementById("subcat-1").style.width = "25%";
            document.getElementById("subcat-2").style.width = "25%";
            document.getElementById("subcat-3").style.width = "50%";
            document.getElementById("subcat-di-1").style.display = "none";
            document.getElementById("subcat-di-2").style.display = "none";
            document.getElementById("subcat-di-3").style.display = "block";
        } else if (obj.id == "subcat-4") {
            document.getElementById("subcat-4").style.width = "50%";
            document.getElementById("subcat-5").style.width = "25%";
            document.getElementById("subcat-6").style.width = "25%";
            document.getElementById("subcat-di-4").style.display = "block";
            document.getElementById("subcat-di-5").style.display = "none";
            document.getElementById("subcat-di-6").style.display = "none";
        } else if (obj.id == "subcat-5") {
            document.getElementById("subcat-4").style.width = "25%";
            document.getElementById("subcat-5").style.width = "50%";
            document.getElementById("subcat-6").style.width = "25%";
            document.getElementById("subcat-di-4").style.display = "none";
            document.getElementById("subcat-di-5").style.display = "block";
            document.getElementById("subcat-di-6").style.display = "none";
        } else if (obj.id == "subcat-6") {
            document.getElementById("subcat-4").style.width = "25%";
            document.getElementById("subcat-5").style.width = "25%";
            document.getElementById("subcat-6").style.width = "50%";
            document.getElementById("subcat-di-4").style.display = "none";
            document.getElementById("subcat-di-5").style.display = "none";
            document.getElementById("subcat-di-6").style.display = "block";
        }
    } else {
        if (obj.id == "subcat-1") {
            document.getElementById("subcat-1").style.height = "280px";
            document.getElementById("subcat-2").style.height = "140px";
            document.getElementById("subcat-3").style.height = "140px";
            document.getElementById("subcat-di-1").style.display = "block";
            document.getElementById("subcat-di-2").style.display = "none";
            document.getElementById("subcat-di-3").style.display = "none";
        } else if (obj.id == "subcat-2") {
            document.getElementById("subcat-1").style.height = "140px";
            document.getElementById("subcat-2").style.height = "280px";
            document.getElementById("subcat-3").style.height = "140px";
            document.getElementById("subcat-di-1").style.display = "none";
            document.getElementById("subcat-di-2").style.display = "block";
            document.getElementById("subcat-di-3").style.display = "none";
        } else if (obj.id == "subcat-3") {
            document.getElementById("subcat-1").style.height = "140px";
            document.getElementById("subcat-2").style.height = "140px";
            document.getElementById("subcat-3").style.height = "280px";
            document.getElementById("subcat-di-1").style.display = "none";
            document.getElementById("subcat-di-2").style.display = "none";
            document.getElementById("subcat-di-3").style.display = "block";
        } else if (obj.id == "subcat-4") {
            document.getElementById("subcat-4").style.height = "280px";
            document.getElementById("subcat-5").style.height = "140px";
            document.getElementById("subcat-6").style.height = "140px";
            document.getElementById("subcat-di-4").style.display = "block";
            document.getElementById("subcat-di-5").style.display = "none";
            document.getElementById("subcat-di-6").style.display = "none";
        } else if (obj.id == "subcat-5") {
            document.getElementById("subcat-4").style.height = "140px";
            document.getElementById("subcat-5").style.height = "280px";
            document.getElementById("subcat-6").style.height = "140px";
            document.getElementById("subcat-di-4").style.display = "none";
            document.getElementById("subcat-di-5").style.display = "block";
            document.getElementById("subcat-di-6").style.display = "none";
        } else if (obj.id == "subcat-6") {
            document.getElementById("subcat-4").style.height = "140px";
            document.getElementById("subcat-5").style.height = "140px";
            document.getElementById("subcat-6").style.height = "280px";
            document.getElementById("subcat-di-4").style.display = "none";
            document.getElementById("subcat-di-5").style.display = "none";
            document.getElementById("subcat-di-6").style.display = "block";
        }
    }
}



(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350);
        $('#hero_in h1,#hero_in form').addClass('animated');
        $('.hero_single, #hero_in').addClass('start_bg_zoom');
        $(window).scroll();
    });

    function process() {
        if ($(window).width() > 998) {
            $(document).on('mouseover', '.inner-card', function(e) {
                expand(this);
            });
        } else {
            $(document).on('click', '.inner-card', function(e) {
                expand(this);
            });

        }
    }
    $(document).ready(function() {
        process();
    });
})(window.jQuery)