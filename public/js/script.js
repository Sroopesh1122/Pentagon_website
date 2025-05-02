window.addEventListener("load",()=>{
    // Three Items Slider
    var slider = new Swiper('.three-item_carousel', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            enabled: true,
            delay: 6000
        },
        navigation: {
            nextEl: '.three-item_carousel-next',
            prevEl: '.three-item_carousel-prev',
            clickable: true,
        },
        pagination: {
            el: ".three-item_carousel-pagination",
            clickable: true,
        },
        speed: 500,
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '600': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
})

