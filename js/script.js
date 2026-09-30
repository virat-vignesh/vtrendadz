document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    function hideLoader() {

        if (!loader) return;

        loader.classList.add("loaded");

        setTimeout(function () {

            if (loader && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }

        }, 600);
    }

    if (document.readyState === "complete") {

        setTimeout(hideLoader, 250);

    } else {

        window.addEventListener("load", function () {

            setTimeout(hideLoader, 250);

        }, { once: true });

        /* Safety fallback */
        setTimeout(hideLoader, 2500);
    }


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar =
        document.getElementById("navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }
    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    function openMenu() {

        if (!menuToggle || !navMenu) return;

        menuToggle.classList.add("active");

        navMenu.classList.add("open");

        document.body.classList.add("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );
    }


    function closeMenu() {

        if (!menuToggle || !navMenu) return;

        menuToggle.classList.remove("active");

        navMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        /* Close services dropdown */

        document
            .querySelectorAll(".nav-dropdown")
            .forEach(function (dropdown) {

                dropdown.classList.remove("open");

                const button =
                    dropdown.querySelector(
                        ".dropdown-toggle"
                    );

                if (button) {

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            });
    }


    function toggleMenu(event) {

        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (!navMenu) return;

        if (navMenu.classList.contains("open")) {

            closeMenu();

        } else {

            openMenu();

        }
    }


    /* Hamburger click */

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            toggleMenu
        );

        /*
         * Prevent touch/click events from
         * propagating to document.
         */

        // menuToggle.addEventListener(
        //     "touchend",
        //     function (event) {

        //         event.preventDefault();
        //         event.stopPropagation();

        //         toggleMenu(event);

        //     },
        //     { passive: false }
        // );
    }


    /* =====================================================
       SERVICES DROPDOWN
    ===================================================== */

    const dropdowns =
        document.querySelectorAll(
            ".nav-dropdown"
        );


    dropdowns.forEach(function (dropdown) {

        const toggle =
            dropdown.querySelector(
                ".dropdown-toggle"
            );

        if (!toggle) return;


        toggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                /* Only mobile uses click */

                if (window.innerWidth > 900) {
                    return;
                }


                const isOpen =
                    dropdown.classList.contains(
                        "open"
                    );


                /* Close other dropdowns */

                dropdowns.forEach(
                    function (other) {

                        if (other !== dropdown) {

                            other.classList.remove(
                                "open"
                            );

                            const otherToggle =
                                other.querySelector(
                                    ".dropdown-toggle"
                                );

                            if (otherToggle) {

                                otherToggle.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );
                            }
                        }
                    }
                );


                if (isOpen) {

                    dropdown.classList.remove(
                        "open"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    dropdown.classList.add(
                        "open"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );
                }

            }
        );
    });


    /* =====================================================
       NAV LINKS
    ===================================================== */

    if (navMenu) {

        navMenu
            .querySelectorAll(
                "a"
            )
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        /*
                         * Don't interfere with
                         * dropdown toggle.
                         */

                        setTimeout(function () {

                            if (
                                window.innerWidth <= 900
                            ) {
                                closeMenu();
                            }

                        }, 50);

                    }
                );
            });
    }


    /* =====================================================
       CLICK OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (!navMenu || !menuToggle) {
                return;
            }


            /* IMPORTANT:
               Do not close when hamburger is clicked */

            if (
                menuToggle.contains(event.target)
            ) {
                return;
            }


            if (
                navMenu.contains(event.target)
            ) {
                return;
            }


            if (
                navMenu.classList.contains("open")
            ) {

                closeMenu();
            }

        }
    );


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMenu();

            }
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       ACTIVE PAGE
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    document
        .querySelectorAll(
            ".nav-menu > a:not(.nav-btn)"
        )
        .forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (!href) return;


            const linkPage =
                href
                    .split("/")
                    .pop()
                    .split("#")[0]
                    .toLowerCase();


            if (
                currentPage === linkPage ||
                (
                    currentPage === "" &&
                    linkPage === "index.html"
                )
            ) {

                link.classList.add("active");
            }
        });


    /* Services active */

    const servicePages = [
        "web-development.html",
        "seo.html",
        "performance-marketing.html",
        "social-media-marketing.html",
        "content-marketing.html",
        "branding.html",
        "creative-design.html",
        "lead-generation.html"
    ];


    if (servicePages.includes(currentPage)) {

        document
            .querySelectorAll(".nav-dropdown")
            .forEach(function (dropdown) {

                dropdown.classList.add("active");

            });
    }


    /* =====================================================
       REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

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
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add("show");

            }
        );
    }


    /* =====================================================
       YEAR
    ===================================================== */

    document
        .querySelectorAll("#year")
        .forEach(function (element) {

            element.textContent =
                new Date().getFullYear();

        });

});