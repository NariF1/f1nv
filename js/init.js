(function ($) {
    'use strict';
    $(document).ready(function () {
        console.log('%c  ███████╗░░███╗░░███╗░░██╗██╗░░░██╗░░░░█████╗░░█████╗░███╗░░░███╗', 'color: #125286;font-weight:bold;');
        console.log('%c  ██╔════╝░████║░░████╗░██║██║░░░██║░░░██╔══██╗██╔══██╗████╗░████║', 'color: #125286;font-weight:bold;');
        console.log('%c  █████╗░░██╔██║░░██╔██╗██║╚██╗░██╔╝░░░██║░░╚═╝██║░░██║██╔████╔██║', 'color: #125286;font-weight:bold;');
        console.log('%c  ██╔══╝░░╚═╝██║░░██║╚████║░╚████╔╝░░░░██║░░██╗██║░░██║██║╚██╔╝██║', 'color: #125286;font-weight:bold;');
        console.log('%c  ██║░░░░░███████╗██║░╚███║░░╚██╔╝░░██╗╚█████╔╝╚█████╔╝██║░╚═╝░██║', 'color: #125286;font-weight:bold;');
        console.log('%c  ╚═╝░░░░░╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝', 'color: #125286;font-weight:bold;');
    });
})(jQuery);

AOS.init();

$(window).ready(function() {
    setTimeout(function () {
        //open site content
        $(".siteLoader").fadeOut();
    }, 500);
});

window.addEventListener('DOMContentLoaded', event => {
    const messageForm = document.getElementById('contactusForm');
    if (messageForm) {
        $("#name").on("input", function() {
            if($('#email').val() && $('#name').val()) {
                $('#submit').attr('disabled', false);
            } else {
                $('#submit').attr('disabled', true);
            }
        });
        $("#email").on("input", function() {
            if($('#email').val() && $('#name').val()) {
                $('#submit').attr('disabled', false);
            } else {
                $('#submit').attr('disabled', true);
            }
        });
        $("#submit").bind("click", function (e) {
            e.preventDefault();
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'https://api.mailslurp.com/forms',
                data : {
                    email : $('#email').val(),
                    text  : $('#msgus').val(),
                    full_name : $('#name').val(),
                    _to: 'gegham@kindda.app'
                },
                success: () => {
                    $('#name').val('');
                    $('#email').val('');
                    $('#msgus').val('');
                    $('#submit').attr('disabled', true);
                },
                error: () => {
                    $('#name').val('');
                    $('#email').val('');
                    $('#msgus').val('');
                    $('#submit').attr('disabled', true);
                }
            });
        });
    }

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
