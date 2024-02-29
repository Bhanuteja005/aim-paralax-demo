(function($) {

    // Wait for the DOM to be fully loaded
    var ssPreloader = function() {
        var $WIN = $(window);

    // Force page scroll position to top at page refresh
    $('html, body').animate({ scrollTop: 0 }, 'normal');

    // Hide Pace.js progress bar
    Pace.on('done', function () {
        $('.pace-inactive').fadeOut('slow');
    });

    // Hide the preloader
    $WIN.on('load', function() {
        $("#loader").fadeOut("slow", function() {
            $("#preloader").delay(100).fadeOut("slow");
        });
    });

    };

    // Initialize preloader function
    ssPreloader();

    /* Menu on Scrolldown
     * ------------------------------------------------------ */
    var ssMenuOnScrolldown = function() {
        var menuTrigger = $('#header-menu-trigger');

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            } else {
                menuTrigger.removeClass('opaque');
            }
        });
    };

    /* OffCanvas Menu
     * ------------------------------------------------------ */
    var ssOffCanvas = function() {
        var menuTrigger = $('#header-menu-trigger'),
            nav = $('#menu-nav-wrap'),
            closeButton = nav.find('.close-button'),
            siteBody = $('body');

        // Open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // Close menu by clicking the close button
        closeButton.on('click', function(e) {
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // Close menu clicking outside the menu itself
        $(document).on('click', function(e) {
            if (!$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span')) {
                menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });
    };

    // Initialize functions on document ready
    $(document).ready(function() {
        ssMenuOnScrolldown();
        ssOffCanvas();
    });
    
    


})(jQuery);

