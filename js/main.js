
(function ($) {
    "use strict";

    // Get Device width
    var device_width = window.innerWidth;

        //Toggle Js
		$('.rr-checkout-login-form-reveal-btn').on('click', function () {
			$('#rrReturnCustomerLoginForm').slideToggle(400);
		});

        $('.rr-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#rrCheckoutCouponForm').slideToggle(400);
		});
    
        // Color Scheme Swithcer
        const storageKey = 'theme-preference';

        const onClick = () => {
            theme.value = theme.value === 'light' ? 'dark' : 'light';
            setPreference();
        }

        const getColorPreference = () => {
            if (localStorage.getItem(storageKey)){
                return localStorage.getItem(storageKey);
            }else{
                return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
            }
        }

        const setPreference = () => {
            localStorage.setItem(storageKey, theme.value);
            reflectPreference();
        }

        const reflectPreference = () => {
            document.firstElementChild.setAttribute('data-theme', theme.value);
            document.querySelector('#theme-toogle')?.setAttribute('aria-label', theme.value);
        }

        const theme = {
            value: getColorPreference(),
        }
        reflectPreference();
            
        $(window).on("load", function (event) {
            reflectPreference();
            document.querySelector('#theme-toogle').addEventListener('click', onClick);
        });

        function textAnimationEffect(){
            let TextAnim = gsap.timeline();
            let splitText = new SplitType( ".text-animation-effect", { types: 'chars' });
            if( $('.text-animation-effect .char').length ){
                TextAnim.from(".text-animation-effect .char", { duration: 1, x: 50, autoAlpha: 0, stagger: 0.1 }, "-=1");
            }
        } 

        var innerBars = document.querySelectorAll(".inner-bar");
        var increment = 0;

        function animateBars() {
            for (var i = 0; i < 2; i++) {
                var randomWidth = Math.floor(Math.random() * 101);
                gsap.to(innerBars[i + increment], {
                    width: randomWidth + "%",
                    duration: 0.5,
                    ease: "none"
                });
            }

            setTimeout(function () {
                for (var i = 0; i < 2; i++) {
                    gsap.to(innerBars[i + increment], {
                        width: "100%",
                        duration: 0.5,
                        ease: "none"
                    });
                }

                increment += 2;

                if (increment < innerBars.length) {
                    animateBars();
                } else {
                    var preloaderTL = gsap.timeline();
                    preloaderTL.to(".preloader", {
                        "--preloader-clip": "100%",
                        duration: 0.8,
                        ease: "none",
                        delay: 0.8
                    });
                    preloaderTL.set(".preloader", {
                        display: "none"
                    });                
                    let splitText = new SplitType( ".text-animation-effect", { types: 'chars' });
                    if( $('.text-animation-effect .char').length ){
                        preloaderTL.from(".text-animation-effect .char", { duration: 0.8, x: 50, autoAlpha: 0, stagger: 0.1 }, "-=1");
                    }
                }
            }, 200);
        }
        
        $(window).on("load", function () {
            animateBars();
            setTimeout(function () {
                $(".preloader").remove();
            }, 3000);
        });
        

        // RTL Switcher
        $(".switcher-input").on("click", function () {
            $(this).toggleClass("rtl-mode");
            $("body").toggleClass("rtl");
            // rtlMode = true;
        });

        $(document).ready(function () {

        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
            $('body').addClass('firefox');
        }
        
        var header = $(".header"),
            stickyHeader = $(".primary-header");

        function menuSticky(w) {
            if (w.matches) {
                
                $(window).on("scroll", function () {
                    var scroll = $(window).scrollTop();
                    if (scroll >= 10) {
                        header.addClass("fixed");
                    } else {
                        header.removeClass("fixed");
                    }
                });
            }
        }

        var minWidth = window.matchMedia("(min-width: 992px)");
        if (header.hasClass("sticky-active")) {
            menuSticky(minWidth);
        }

        //Mobile Menu Js
        $(".mobile-menu-items").meanmenu({
            meanMenuContainer: ".side-menu-wrap",
            meanScreenWidth: "992",
            meanMenuCloseSize: "30px",
            meanRemoveAttrs: true,
            meanExpand: ['<i class="fa-solid fa-caret-down"></i>'],
        });

        // Check if .side-menu-wrap has class `has---mneu`
        if ($('.side-menu-wrap').hasClass('has---mneu')) {
            $(".mobile-menu-items").meanmenu({
                meanMenuContainer: ".side-menu-wrap",
                meanScreenWidth: "3000", // à¦¸à¦¬ à¦¸à§à¦•à§à¦°à¦¿à¦¨à§‡à¦‡ à¦¦à§‡à¦–à¦¾à¦¬à§‡
                meanMenuCloseSize: "30px",
                meanRemoveAttrs: true,
                meanExpand: ['<i class="fa-solid fa-caret-down"></i>']
            });
        }

        // Mobile Sidemenu
        $(".mobile-side-menu-toggle").on("click", function () {
            $(".mobile-side-menu, .mobile-side-menu-overlay").toggleClass("is-open");
        });

        $(".mobile-side-menu-close, .mobile-side-menu-overlay").on("click", function () {
            $(".mobile-side-menu, .mobile-side-menu-overlay").removeClass("is-open");
        });

        // Popup Search Box
        $(function () {
            $("#popup-search-box").removeClass("toggled");

            $(".dl-search-icon").on("click", function (e) {
                e.stopPropagation();
                $("#popup-search-box").toggleClass("toggled");
                $("#popup-search").focus();
            });

            $("#popup-search-box input").on("click", function (e) {
                e.stopPropagation();
            });

            $("#popup-search-box, body").on("click", function () {
                $("#popup-search-box").removeClass("toggled");
            });
        });

        // Popup Sidebox
        function sideBox() {
            $("body").removeClass("open-sidebar");
            $(document).on("click", ".sidebar-trigger", function (e) {
                e.preventDefault();
                $("body").toggleClass("open-sidebar");
            });
            $(document).on("click", ".sidebar-trigger.close, #sidebar-overlay", function (e) {
                e.preventDefault();
                $("body.open-sidebar").removeClass("open-sidebar");
            });
        }

        sideBox();

        // Venobox Video
        new VenoBox({
            selector: ".video-popup, .img-popup",
            bgcolor: "transparent",
            numeration: true,
            infinigall: true,
            spinner: "plane",
        });

        // Data Background
        $("[data-background").each(function () {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

        // Custom Cursor
        $("body").append('<div class="mt-cursor"></div>');
        var cursor = $(".mt-cursor"),
            linksCursor = $("a, .swiper-nav, button, .cursor-effect"),
            crossCursor = $(".cross-cursor");

        $(window).on("mousemove", function (e) {
            cursor.css({
                transform: "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
                visibility: "inherit",
            });
        });

        /* Odometer */
        $(".odometer").waypoint(
            function () {
                var odo = $(".odometer");
                odo.each(function () {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            },
            {
                offset: "80%",
                triggerOnce: true,
            }
        );

        // Nice Select Js
        $("select").niceSelect();

        // Isotop
        $(".filter-items").imagesLoaded(function () {
            // Add isotope click function
            $(".project-filter li").on("click", function () {
                $(".project-filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".filter-items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    },
                });
                return false;
            });

            $(".filter-items").isotope({
                itemSelector: ".single-item",
                layoutMode: "fitRows",
                fitRows: {
                    gutter: 0,
                },
            });
        });

        // Project Carousel
        var swiperProject = new Swiper(".project-carousel", {
            slidesPerView: 1,
            spaceBetween: 40,
            slidesPerGroup: 1,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            navigation: {
                nextEl: ".service-section .swiper-prev",
                prevEl: ".service-section .swiper-next",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });


        // Testi Carousel
        var swiperTesti = new Swiper(".testi-carousel", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1400: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
            },
        });

        // Testi Carousel
        var swiperTesti = new Swiper(".h5-testimonial", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });


            // slider__wrapper
            var swiperTesti = new Swiper(".slider__wrapper", {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                autoplay: true,
                grabcursor: true,
                speed: 700,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 25,
                    },
                    767: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                    1400: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                    },
                },
            });


        // Sponsor Carousel
        var swiperSponsor = new Swiper(".sponsor-carousel", {
            slidesPerView: 8,
            spaceBetween: 30,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                },
                1400: {
                    slidesPerView: 8,
                    slidesPerGroup: 1,
                },
            },
        });


        //Swiper Slider For Shop
        var swiper = new Swiper(".product-gallary-thumb", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".product-gallary", {
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: ".swiper-nav-next",
                prevEl: ".swiper-nav-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });

        // Pin Active
        var pin_fixed = document.querySelector('.pin-element');
            if (pin_fixed && device_width > 991) {

            gsap.to(".pin-element", {
                scrollTrigger: {
                trigger: ".pin-area",
                pin: ".pin-element",
                start: "top top",
                end: "bottom bottom",
                pinSpacing: false,
                }
            });
        }

        // scale animation 
        var scale = document.querySelectorAll(".img-zoom");
        var image = document.querySelectorAll(".img-zoom img");
        scale.forEach((item) => {
            gsap.to(item, {
            scale: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: "bottom top",
                toggleActions: 'play reverse play reverse'
            }
            });
        });
        image.forEach((image) => {
            gsap.set(image, {
            scale: 1.2,
            });
            gsap.to(image, {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: image,
                start: 'top bottom',
                end: "bottom top",
                toggleActions: 'play reverse play reverse'
            }
            });
        })

        // hover reveal start
            const hoverItem = document.querySelectorAll(".service-hover-reveal-item");
            function moveImage(e, hoverItem, index) {
                const item = hoverItem.getBoundingClientRect();
                const x = e.clientX - item.x;
                const y = e.clientY - item.y;
                if (hoverItem.children[index]) {
                    hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
                }
            }
            hoverItem.forEach((item, i) => {
                item.addEventListener("mousemove", (e) => {
                    setInterval(moveImage(e, item, 1), 50);
                });
            });
	// hover reveal end

        // carouselTicker initail 
        $('.carouselTicker-nav').carouselTicker({
        });
        $(".carouselTicker-start").carouselTicker({
            direction: "next",
        });

        // Stroke Text

        $(function(){
            let container_svg = $('.container-svg');
            let that, svg, text, bbox, width, height, calc_ratio, stroke_dasharray, new_value_stroke;
            let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            let is_retina = false;
            if (matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches){
                is_retina = true;
            }
            container_svg.each(function(){
                that = $(this);
                // Set viewBox size
                svg = $('svg', that);
                text = $('text', that);
                bbox = text[0].getBBox();
                width = that.width();
                height = bbox.height;
                svg.attr('viewBox', '0 0 '+width+' '+height);
                // Set container height with ratio
                calc_ratio = (height*100/width);
                that.css('padding-bottom', calc_ratio+'%');
                if(is_safari){ // Safari fix
                    text.attr('y', '1em');
                }
                    if(is_retina){
                    stroke_dasharray = text.css('stroke-dasharray');
                    new_value_stroke = retina_stroke_dasharray(stroke_dasharray);
                    text.css('stroke-dasharray', new_value_stroke);
                }
            })
        })
        
        function retina_stroke_dasharray(value){
            let array = value.split(",");
            for(let i = 0; i < array.length; i++){
                array[i] = (parseInt(array[i])*2)+'px';
            }
            return array.join(', ');
        }

        //Running Animated Text
        const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }

        // go full width 
        if (document.querySelectorAll(".scale-width").length > 0) {
            var go_full = document.querySelectorAll(".scale-width");
                go_full.forEach((item) => {
                gsap.set(item, {
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    width: "auto",
                });
                gsap.to(item, {
                    width: "100vw",
                    ease: "none",
                    scrollTrigger: {
                    trigger: item,
                    scrub: 0,
                    start: "top bottom",
                    end: "bottom bottom",
                    }
                });
            });
        }


        // Pin Active
        var pin_fixed = document.querySelector('.pin-element');
            if (pin_fixed && device_width > 991) {
            gsap.to(".pin-element", {
                scrollTrigger: {
                trigger: ".pin-area",
                pin: ".pin-element",
                start: "top top",
                end: "bottom bottom",
                pinSpacing: false,
                }
            });
        }

        // Image Reveal

        gsap.registerPlugin(ScrollTrigger);

        let revealContainers = document.querySelectorAll(".reveal");

        revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset"
            }
        });

        tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });

        const images = document.querySelectorAll(".img-reveal");

        const removeOverlay = overlay => {
            let tl = gsap.timeline();

            tl.to(overlay, {
                duration: 1.4,
                ease: "Power2.easeInOut",
                width: "0%"
            });

            return tl;
        };

        const scaleInImage = image => {
            let tl = gsap.timeline();

            tl.from(image, {
                duration: 1.4,
                scale: 1.4,
                ease: "Power2.easeInOut"
            });

            return tl;
        };

        images.forEach(image => {
        
            gsap.set(image, {
                visibility: "visible"
            });
        
            const overlay = image.querySelector('.img-overlay');
            const img = image.querySelector("img");

            const masterTL = gsap.timeline({ paused: true });
            masterTL
            .add(removeOverlay(overlay))
            .add(scaleInImage(img), "-=1.4");
        
        
        let options = {
            threshold: 0
        }

            const io = new IntersectionObserver((entries, options) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        masterTL.play();
                    } else {
                masterTL.progress(0).pause()
            }
                });
            }, options);

            io.observe(image);
        });

        // Img Animation
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.animate-image').forEach((el, index) => { 
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top top",
                    toggleActions: "play none none reverse",
                    markers: true
                }
            });
            
            tl
            .set(el, { transformOrigin: 'center center' })
            .fromTo(el, 
                { opacity: 0, scale: 0.8, y: 100 }, 
                { opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false }
            );
        });

        // Scroll Animation

        let typeSplit = new SplitType("[data-text-animation]", {
            types: "lines,words, chars",
            className: "line",
        });
        var text_animations = document.querySelectorAll(
            "[data-text-animation]"
            );
            
            function createScrollTrigger(triggerElement, timeline) {
            // Play tl when scrolled into view (60% from top of screen)
            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top 80%",
                onEnter: () => timeline.play(),
                toggleClass: {targets: triggerElement, className: "active"} 
            });
        }

            text_animations.forEach((animation) => {
            let type = "slide-up",
            duration = 0.75,
            offset = 80,
            stagger = 0.6,
            delay = 0,
            scroll = 1,
            split = "line",
            ease = "power2.out";
        // Set attribute
        if (animation.getAttribute("data-stagger")) {
            stagger = animation.getAttribute("data-stagger");
        }
        if (animation.getAttribute("data-duration")) {
            duration = animation.getAttribute("data-duration");
        }
        if (animation.getAttribute("data-text-animation")) {
            type = animation.getAttribute("data-text-animation");
        }
        if (animation.getAttribute("data-delay")) {
            delay = animation.getAttribute("data-delay");
        }
        if (animation.getAttribute("data-ease")) {
            ease = animation.getAttribute("data-ease");
        }
        if (animation.getAttribute("data-scroll")) {
            scroll = animation.getAttribute("data-scroll");
        }
        if (animation.getAttribute("data-offset")) {
            offset = animation.getAttribute("data-offset");
        }
        if (animation.getAttribute("data-split")) {
            split = animation.getAttribute("data-split");
        }
        if (scroll == 1) {
            if (type == "slide-up") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                yPercent: offset,
                duration,
                ease,
                opacity: 0,
                stagger: { amount: stagger },
            });
            createScrollTrigger(animation, tl);
            }
            if (type == "slide-down") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                yPercent: -offset,
                duration,
                ease,
                opacity: 0,
                stagger: { amount: stagger },
            });
            createScrollTrigger(animation, tl);
            }
            if (type == "rotate-in") {
            let tl = gsap.timeline({ paused: true });
            tl.set(animation.querySelectorAll(`.${split}`), {
                transformPerspective: 400,
            });
            tl.from(animation.querySelectorAll(`.${split}`), {
                rotationX: -offset,
                duration,
                ease,
                force3D: true,
                opacity: 0,
                transformOrigin: "top center -50",
                stagger: { amount: stagger },
            });
            createScrollTrigger(animation, tl);
            }
            if (type == "slide-from-left") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0,
                xPercent: -offset,
                duration,
                opacity: 0,
                ease,
                stagger: { amount: stagger },
            });
            createScrollTrigger(animation, tl);
            }
            if (type == "slide-from-right") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0,
                xPercent: offset,
                duration,
                opacity: 0,
                ease,
                stagger: { amount: stagger },
            });
            createScrollTrigger(animation, tl);
            }
            if (type == "fade-in") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0,
                duration,
                ease,
                opacity: 0,
                stagger: { amount: stagger },
            });
            createScrollTrigger(animation, tl);
            }
            if (type == "fade-in-right") {
                let tl = gsap.timeline({ paused: true });
                tl.from(animation.querySelectorAll(`.${split}`), {
                    x: 100,
                    autoAlpha: 0,
                    duration,
                    stagger: stagger,
                });
                createScrollTrigger(animation, tl);
            }
            if (type == "fade-in-bottom-line") {
                let tl = gsap.timeline({ paused: true });
                tl.from(animation.querySelectorAll(`.${split}`), {
                    autoAlpha: 0,
                    rotationX: -80,
                    force3D: true,
                    transformOrigin: "top center -50",
                    delay: 0.3,
                    duration,
                    stagger: stagger,
                });
                createScrollTrigger(animation, tl);
            }
            if (type == "fade-in-random") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0,
                duration,
                ease,
                opacity: 0,
                stagger: { amount: stagger, from: "random" },
            });
            createScrollTrigger(animation, tl);
            }
            if (type == "scrub") {
            let tl = gsap.timeline({
                scrollTrigger: {
                trigger: animation,
                start: "top 90%",
                end: "top center",
                scrub: true,
                },
            });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0.2,
                duration,
                ease,
                stagger: { amount: stagger },
            });
            }

            // Avoid flash of unstyled content
            gsap.set("[data-text-animation]", { opacity: 1 });
        } else {
            if (type == "slide-up") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                yPercent: offset,
                duration,
                ease,
                opacity: 0,
            });
            }
            if (type == "slide-down") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                yPercent: -offset,
                duration,
                ease,
                opacity: 0,
            });
            }
            if (type == "rotate-in") {
            let tl = gsap.timeline({ paused: true });
            tl.set(animation.querySelectorAll(`.${split}`), {
                transformPerspective: 400,
            });
            tl.from(animation.querySelectorAll(`.${split}`), {
                rotationX: -offset,
                duration,
                ease,
                force3D: true,
                opacity: 0,
                transformOrigin: "top center -50",
            });
            }
            if (type == "slide-from-right") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0,
                xPercent: offset,
                duration,
                opacity: 0,
                ease,
            });
            }
            if (type == "fade-in") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0,
                duration,
                ease,
                opacity: 0,
            });
            }
            if (type == "fade-in-random") {
            let tl = gsap.timeline({ paused: true });
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0,
                duration,
                ease,
                opacity: 0,
                stagger: { amount: stagger, from: "random" },
            });
            }
            if (type == "scrub") {
            tl.from(animation.querySelectorAll(`.${split}`), {
                opacity: 0.2,
                duration,
                ease,
            });
            }
        }
        });

        window.addEventListener("load", (event) => {
            setTimeout(() => {
                // textAnimationEffect();
            }, 200);
        });

        

        if ($(".fade-wrapper").length > 0) {
            $(".fade-wrapper").each(function () {
                var section = $(this);
                var fadeItems = section.find(".fade-top");
        
                fadeItems.each(function (index, element) {
                var delay = index * 0.10;
        
                gsap.set(element, {
                    opacity: 0,
                    y: 100,
                });
        
                ScrollTrigger.create({
                    trigger: element,
                    start: "top 100%",
                    end: "bottom 20%",
                    scrub: 0.5,
                    onEnter: function () {
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: delay,
                    });
                    },
                    once: true,
                });
                });
            });
        }

        let fadeArray_items = document.querySelectorAll(".slide-anim");
        if (fadeArray_items.length > 0) {
            const fadeArray = gsap.utils.toArray(".slide-anim")
            fadeArray.forEach((item, i) => {
            var fade_direction = "bottom"
            var onscroll_value = 1
            var duration_value = 1.15
            var fade_offset = 50
            var delay_value = 0.15
            var ease_value = "power2.out"
            if (item.getAttribute("data-offset")) {
                fade_offset = item.getAttribute("data-offset");
            }
            if (item.getAttribute("data-duration")) {
                duration_value = item.getAttribute("data-duration");
            }
            if (item.getAttribute("data-direction")) {
                fade_direction = item.getAttribute("data-direction");
            }
            if (item.getAttribute("data-on-scroll")) {
                onscroll_value = item.getAttribute("data-on-scroll");
            }
            if (item.getAttribute("data-delay")) {
                delay_value = item.getAttribute("data-delay");
            }
            if (item.getAttribute("data-ease")) {
                ease_value = item.getAttribute("data-ease");
            }
            let animation_settings = {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            }
            if (fade_direction == "top") {
                animation_settings['y'] = -fade_offset
            }
            if (fade_direction == "left") {
                animation_settings['x'] = -fade_offset;
            }
            if (fade_direction == "bottom") {
                animation_settings['y'] = fade_offset;
            }
            if (fade_direction == "right") {
                animation_settings['x'] = fade_offset;
            }
            if (onscroll_value == 1) {
                animation_settings['scrollTrigger'] = {
                trigger: item,
                start: 'top 85%',
                }
            }
                gsap.from(item, animation_settings);
            })
        }

        // Page Scroll Percentage
        function scrollTopPercentage() {
            const scrollPercentage = () => {
                const scrollTopPos = document.documentElement.scrollTop;
                const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
                const scrollElementWrap = $("#scroll-percentage");

                scrollElementWrap.css("background", `conic-gradient( var(--rr-color-theme-primary) ${scrollValue}%, var(--rr-color-common-white) ${scrollValue}%)`);
                
                // ScrollProgress
                if ( scrollTopPos > 100 ) {
                    scrollElementWrap.addClass("active");
                } else {
                    scrollElementWrap.removeClass("active");
                }

                if( scrollValue < 96 ) {
                    $("#scroll-percentage-value").text(`${scrollValue}%`);
                } else {
                    $("#scroll-percentage-value").html('<i class="fa-sharp fa-regular fa-arrow-up-long"></i>');
                }
            }
            window.onscroll = scrollPercentage;
            window.onload = scrollPercentage;

            // Back to Top
            function scrollToTop() {
                document.documentElement.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            
            $("#scroll-percentage").on("click", scrollToTop);
        }

        scrollTopPercentage();
    });

    document.querySelectorAll(".scroll-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            var sectionTarget = btn.getAttribute("data-target");
            gsap.to(window, {duration: 1, scrollTo:{y:sectionTarget, offsetY:70}});
        });
    });



        

    // One Page Nav GSPA href issue fixing way
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
        
            if (targetElement) {
            const offset = 150; // Adjust this to your header height
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;
        
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            }
        });
    });

    // create the smooth scroller FIRST!
    let smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: device_width < 1025 ? false : true,
        smoothTouch: false,
        normalizeScroll: {
            allowNestedScroll: "#sidebar-area"
        },
        ignoreMobileResize: true,
    });


    // Fix: Testimonial Swiper Initialization
    const swiperTesti = new Swiper(".h2-testimonial-wraper", {
        slidesPerView: 1,
        spaceBetween: 50,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        grabCursor: true,
        speed: 600,
        navigation: {
            nextEl: ".swiper-arrow .swiper-next",
            prevEl: ".swiper-arrow .swiper-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 25,
            },
            767: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },
    });


    const hoveritem = document.querySelectorAll(".rr-hover-reveal-item");

        function moveImage(e, hoveritem, index) {
            const item = hoveritem.getBoundingClientRect();
            const x = e.clientX - item.left;
            const y = e.clientY - item.top;

            if (hoveritem.children[index]) {
                const img = hoveritem.children[index];
                img.style.transform = `translate(${x}px, ${y}px) rotate(5deg)`; // âœ… Rotate only the image
            }
        }

        hoveritem.forEach((item, i) => {
            item.addEventListener("mousemove", (e) => {
                moveImage(e, item, 1);
            });

            item.addEventListener("mouseleave", () => {
                if (item.children[1]) {
                    item.children[1].style.transform = ""; // Reset on mouse leave (optional)
                }
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
        const items = document.querySelectorAll('.h3-service__item');
    
        // à¦ªà§à¦°à¦¥à¦® item-à¦•à§‡ active à¦•à§à¦²à¦¾à¦¸ à¦¦à¦¾à¦“
        if (items.length > 0) {
            items[0].classList.add('active');
        }
    
        // IntersectionObserver à¦¦à¦¿à§Ÿà§‡ active item à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦•à¦°à¦¬à§‹
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    items.forEach(item => item.classList.remove('active'));
                    entry.target.classList.add('active');
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // à¦¸à§à¦•à§à¦°à¦¿à¦¨à§‡ à§«à§¦% à¦†à¦¸à¦²à§‡ à¦à¦•à¦Ÿà¦¿à¦­ à¦¹à¦¬à§‡
        });
    
        items.forEach(item => {
            observer.observe(item);
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 768) {
        let projectPanels = document.querySelectorAll('.project-panel');
    
        projectPanels.forEach((section) => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom bottom',
                    endTrigger: '.project-panel-area',
                    pinSpacing: false,
                    markers: false
                },
            });
        });
    } else {
        console.log("Scroll animation is disabled for mobile devices.");
    }



    //  hover-active
    let rightItems = document.querySelectorAll('.item-wrapper .item');
    let leftItems = document.querySelectorAll('.item-wrapper .item');
    rightItems.forEach((rightItem, index) => {
        rightItem.addEventListener('mouseenter', function () {
            handleHover(rightItem, leftItems[index]);
        });
    });
    function handleHover(rightItem, leftItem) {
        rightItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('item');
        });
        leftItems.forEach(item => {
            item.classList.remove('active');
            item.classList.add('item');
        });
        rightItem.classList.add('active');
        leftItem.classList.add('active');
    }


    
        // Testimonial Carousel
        var testimonialThumb = new Swiper(".thumb-carousel", {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: true,
            speed: 800,
        });

        // content-carousel
        var testimonials = new Swiper(".content-carousel", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: true,
            speed: 600,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
            },
            thumbs: {
                swiper: testimonialThumb,
            },
        });

        // text-slider-active
        var swiper = new Swiper(".text-slider-active", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freemode: true,
            centeredSlidea: true,
            loop: true,
            speed: 5000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            },


        });

        // brand slider
        var swiper = new Swiper(".h1-brand__slider", {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            freemode: true,
            centeredSlides: true,
            loop: true,
            speed: 3000,
            allowTouchMove: false,
            autoplay: {
                delay: 1,
                disableOnInteraction: true,
            }
        });

        const slider = document.querySelector(".qs-wrapper");

if (slider) {
  const slides = slider.children;

  // Set initial classes and data-index
  for (let i = 0; i < slides.length; i++) {
    slides[i].setAttribute("data-index", i + 1);
    if (i === 0) {
      slides[i].classList.add("qs-slide-active");
    } else if (i === 1) {
      slides[i].classList.add("qs-slide-next");
    } else if (i === 2) {
      slides[i].classList.add("qs-slide-next-2");
    }
  }

  // Update pagination
  const updatePagination = (index) => {
    document.querySelectorAll(".qs-bullet").forEach((b) =>
      b.classList.remove("active")
    );
    document
      .querySelector(`.qs-bullet[data-index="${index}"]`)
      ?.classList.add("active");
  };

  const qsVSlider = () => {
    const active = slider.querySelector(".qs-slide-active");
    const next = slider.querySelector(".qs-slide-next");
    const next2 = slider.querySelector(".qs-slide-next-2");

    let currentIndex = parseInt(active.dataset.index);
    let nextIndex = currentIndex + 1;
    if (nextIndex > slides.length) nextIndex = 1;

    let next2Index = nextIndex + 1;
    if (next2Index > slides.length) next2Index = 1;

    [...slides].forEach((s) =>
      s.classList.remove("qs-slide-active", "qs-slide-next", "qs-slide-next-2")
    );

    document
      .querySelector(`.qs-slide[data-index="${currentIndex}"]`)
      ?.classList.remove("qs-slide-active");

    document
      .querySelector(`.qs-slide[data-index="${nextIndex}"]`)
      ?.classList.add("qs-slide-active");

    document
      .querySelector(`.qs-slide[data-index="${next2Index}"]`)
      ?.classList.add("qs-slide-next");

    document
      .querySelector(`.qs-slide[data-index="${currentIndex}"]`)
      ?.classList.add("qs-slide-next-2");

    updatePagination(nextIndex);
  };

  const qsVSliderRev = () => {
    const active = slider.querySelector(".qs-slide-active");
    let currentIndex = parseInt(active.dataset.index);

    let prevIndex = currentIndex - 1;
    if (prevIndex < 1) prevIndex = slides.length;

    let prev2Index = prevIndex - 1;
    if (prev2Index < 1) prev2Index = slides.length;

    [...slides].forEach((s) =>
      s.classList.remove("qs-slide-active", "qs-slide-next", "qs-slide-next-2")
    );

    document
      .querySelector(`.qs-slide[data-index="${prevIndex}"]`)
      ?.classList.add("qs-slide-active");

    document
      .querySelector(`.qs-slide[data-index="${prev2Index}"]`)
      ?.classList.add("qs-slide-next");

    document
      .querySelector(`.qs-slide[data-index="${currentIndex}"]`)
      ?.classList.add("qs-slide-next-2");

    updatePagination(prevIndex);
  };

  let autoPlay = setInterval(qsVSlider, 5000);

  document.querySelector(".next-btn")?.addEventListener("click", () => {
    clearInterval(autoPlay);
    qsVSlider();
    autoPlay = setInterval(qsVSlider, 5000);
  });

  document.querySelector(".prev-btn")?.addEventListener("click", () => {
    clearInterval(autoPlay);
    qsVSliderRev();
    autoPlay = setInterval(qsVSlider, 5000);
  });

  // Bullet click event
  document.querySelectorAll(".qs-bullet").forEach((bullet) => {
    bullet.addEventListener("click", () => {
      const index = parseInt(bullet.dataset.index);
      const nextIndex = index + 1 > slides.length ? 1 : index + 1;
      const next2Index = nextIndex + 1 > slides.length ? 1 : nextIndex + 1;

      [...slides].forEach((s) =>
        s.classList.remove("qs-slide-active", "qs-slide-next", "qs-slide-next-2")
      );

      document
        .querySelector(`.qs-slide[data-index="${index}"]`)
        ?.classList.add("qs-slide-active");
      document
        .querySelector(`.qs-slide[data-index="${nextIndex}"]`)
        ?.classList.add("qs-slide-next");
      document
        .querySelector(`.qs-slide[data-index="${next2Index}"]`)
        ?.classList.add("qs-slide-next-2");

      updatePagination(index);
    });
  });
}

// service-slider js 
        var swiper = new Swiper(".service-slider-active", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            autoplay: true,
            grabcursor: true,
            speed: 600,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1400: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
            },
        });


         // accordion js  

    document.addEventListener("DOMContentLoaded", function () {
        const mainDivs = document.querySelectorAll(".main");
        const accordionButtons = document.querySelectorAll(".accordion-button");

        function updateActiveItem(index) {
            mainDivs.forEach((main, i) => {
                main.classList.toggle("active", i === index);
            });
        }

        // Default first item
        updateActiveItem(0);

        // Accordion control
        accordionButtons.forEach((btn, idx) => {
            btn.addEventListener("click", () => {
                updateActiveItem(idx);
            });
        });
    });

})(jQuery);








const slider = document.getElementById('slider');
const track = document.getElementById('track');

let isDown = false;
let startX = 0;
let currentX = 0;
let prevX = 0;

// 👉 STOP animation completely
function stopAnimation() {
  track.style.animation = 'none';
}

// 👉 START animation again from current position
function startAnimation() {
  track.style.animation = 'scroll 20s linear infinite';
}

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  stopAnimation(); // 🔥 important
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  prevX = currentX;
  startAnimation(); // 🔥 resume
});

slider.addEventListener('mouseleave', () => {
  if (!isDown) return;
  isDown = false;
  prevX = currentX;
  startAnimation();
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const walk = e.pageX - startX;
  currentX = prevX + walk;

  track.style.transform = `translateX(${currentX}px)`;
});
