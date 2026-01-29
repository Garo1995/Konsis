






$('.head-menu ul li a').on('click', function () {
    $('.head-menu').removeClass('menu-opened');
})

$('.open-menu').on('click', function (e) {
    e.stopPropagation();
    $('.head-menu').toggleClass('menu-opened');

})
$(window).on('click', function (e) {
    let menuSort = $('.head-menu');
    if (e.target !== menuSort) {
        menuSort.removeClass('menu-opened');
    }
    let menuCLose = $('.open-menu');
    if (e.target !== menuCLose) {
        menuCLose.removeClass('close-menu');
    }

});




let courseSwiper = new Swiper(".course-slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    speed: 600,

    navigation: {
        nextEl: ".course-button-next",
        prevEl: ".course-button-prev",
    },
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 16,
            loop: true,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
            loop: true,

        },
    }
});





let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 600,
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        // 📱 Mobile
        0: {
            pagination: {
                el: ".reviews-pagination",
                clickable: true,
                renderBullet: null, // точки
            },
        },

        // 💻 Desktop
        1020: {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' +
                        '0' + (index + 1) +
                        '</span>';
                },
            },
        },
    },

});




$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-30;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});











document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".stages-work-box");

    items.forEach(item => {
        item.addEventListener("click", () => {
            if (item.classList.contains("stages-active")) return;

            items.forEach(el => el.classList.remove("stages-active"));
            item.classList.add("stages-active");
        });
    });
});

