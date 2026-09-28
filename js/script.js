/* =========================================================
   VTRENDADZ JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const pageLoader =
        document.getElementById("pageLoader");


    window.addEventListener("load", function () {

        if (pageLoader) {

            setTimeout(function () {

                pageLoader.classList.add("loaded");

            }, 500);

        }

    });



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");


    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {


        menuToggle.addEventListener(
            "click",
            function () {


                const isOpen =
                    menuToggle.classList.toggle("active");


                navMenu.classList.toggle("active");


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close menu"
                        : "Open menu"
                );


            }
        );


        /* Close menu when normal link clicked */

        navMenu
            .querySelectorAll("a")
            .forEach(function (link) {


                link.addEventListener(
                    "click",
                    function () {


                        menuToggle.classList.remove(
                            "active"
                        );


                        navMenu.classList.remove(
                            "active"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Open menu"
                        );


                    }
                );


            });

    }



    /* =====================================================
       MOBILE SERVICES DROPDOWN
    ===================================================== */

    const dropdownButtons =
        document.querySelectorAll(
            ".dropdown-btn"
        );


    dropdownButtons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function (event) {


                    /* Only mobile */

                    if (window.innerWidth <= 900) {


                        event.preventDefault();

                        event.stopPropagation();


                        const dropdown =
                            button.closest(
                                ".nav-dropdown"
                            );


                        const wasOpen =
                            dropdown.classList.contains(
                                "open"
                            );


                        /* Close all */

                        document
                            .querySelectorAll(
                                ".nav-dropdown"
                            )
                            .forEach(
                                function (item) {


                                    item.classList.remove(
                                        "open"
                                    );


                                    const itemButton =
                                        item.querySelector(
                                            ".dropdown-btn"
                                        );


                                    if (itemButton) {

                                        itemButton.setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );

                                    }

                                }
                            );


                        /* Open clicked */

                        if (!wasOpen) {

                            dropdown.classList.add(
                                "open"
                            );


                            button.setAttribute(
                                "aria-expanded",
                                "true"
                            );

                        }

                    }

                }
            );

        }
    );



    /* =====================================================
       RESET MENU WHEN GOING DESKTOP
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {


            if (window.innerWidth > 900) {


                if (navMenu) {

                    navMenu.classList.remove(
                        "active"
                    );

                }


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                }


                document
                    .querySelectorAll(
                        ".nav-dropdown"
                    )
                    .forEach(
                        function (item) {

                            item.classList.remove(
                                "open"
                            );

                        }
                    );

            }

        }
    );



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealItems =
        document.querySelectorAll(
            ".reveal"
        );


    if ("IntersectionObserver" in window) {


        const observer =
            new IntersectionObserver(
                function (entries) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.classList.add(
                                    "show"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );


                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            function (item) {

                observer.observe(item);

            }
        );


    } else {


        revealItems.forEach(
            function (item) {

                item.classList.add(
                    "show"
                );

            }
        );

    }



    /* =====================================================
       CONTACT FORM DEMO
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formMessage =
        document.getElementById(
            "formMessage"
        );


    if (
        contactForm &&
        formMessage
    ) {


        contactForm.addEventListener(
            "submit",
            function (event) {


                event.preventDefault();


                formMessage.textContent =
                    "Thank you! Your enquiry has been received.";


                contactForm.reset();

            }
        );

    }


});