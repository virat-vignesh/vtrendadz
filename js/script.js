document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       PAGE LOADER
    ========================================= */

    const loader = document.querySelector(".page-loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hide");

        }, 500);

    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");

    const navMenu = document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");

        });

    }


    /* =========================================
       CLOSE MOBILE MENU
    ========================================= */

    const navLinks = document.querySelectorAll(".nav-menu a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navMenu) {

                navMenu.classList.remove("open");

            }

        });

    });


    /* =========================================
       SCROLL NAVBAR
    ========================================= */

    const navbar = document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (!navbar) return;


        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


});


/* =========================================
   CONTACT FORM
========================================= */

function submitForm(event) {

    event.preventDefault();


    alert(
        "Thank you! Your message has been received. We will contact you soon."
    );


    event.target.reset();


    return false;

}