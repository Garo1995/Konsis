

$(document).ready(function () {
    setTimeout(function () {
        $(".header").addClass("header-anime");
        $(".banner-main").addClass("start-anime");
    }, 400);
});

const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);





const isDesktop = window.innerWidth > 1024;

/* =====================
   MOBILE — CLICK
===================== */
if (!isDesktop) {

    $('.open-menu').on('click', function (e) {
        e.stopPropagation();
        $('.head-menu').toggleClass('menu-opened');
    });

    $('.head-menu ul li a').on('click', function () {
        $('.head-menu').removeClass('menu-opened');
    });

    $(window).on('click', function (e) {
        if (
            !$(e.target).closest('.head-menu').length &&
            !$(e.target).closest('.open-menu').length
        ) {
            $('.head-menu').removeClass('menu-opened');
        }
    });
}

/* =====================
   DESKTOP — HOVER + OUT
===================== */
if (isDesktop) {

    // открываем при наведении
    $('.open-menu, .head-menu').on('mouseenter', function () {
        $('.head-menu').addClass('menu-opened');
    });

    // закрываем, когда ушли с меню И кнопки
    $('.open-menu, .head-menu').on('mouseleave', function () {
        setTimeout(function () {
            if (
                !$('.open-menu:hover').length &&
                !$('.head-menu:hover').length
            ) {
                $('.head-menu').removeClass('menu-opened');
            }
        }, 100);
    });

    // аутклик (на всякий случай)
    $(document).on('click', function (e) {
        if (
            !$(e.target).closest('.head-menu').length &&
            !$(e.target).closest('.open-menu').length
        ) {
            $('.head-menu').removeClass('menu-opened');
        }
    });
}











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







$('.more-team').on('click', function () {
    $(this).addClass('btn-team-none');

    $('.our-team-box.team-none').each(function (i) {
        $(this)
            .delay(i * 120) // задержка между карточками
            .slideDown(400) // или fadeIn(400)
            .removeClass('team-none');
    });
});








$(document).ready(function () {

    const speed = 400; // медленно и красиво

    function openBlock(block) {
        const content = block.find('.stages-content');
        const autoHeight = content.css('height', 'auto').outerHeight();

        content.height(0).animate(
            { height: autoHeight },
            speed,
            function () {
                content.css('height', 'auto');
            }
        );

        block.addClass('stages-active');
    }

    function closeBlock(block) {
        block.find('.stages-content').animate(
            { height: 0 },
            speed
        );

        block.removeClass('stages-active');
    }

    // Первый блок открыт всегда
    openBlock($('.stages-work-box').first());

    // Клик по ВСЕМУ блоку
    $('.stages-work-box').on('click', function () {
        const current = $(this);

        if (current.hasClass('stages-active')) return;

        // Закрываем все открытые
        $('.stages-work-box.stages-active').each(function () {
            closeBlock($(this));
        });

        // Открываем текущий
        openBlock(current);
    });

});









document.querySelectorAll('.languages-row').forEach(row => {
    const track = row.querySelector('.languages-track');

    // Дублируем содержимое для бесконечного эффекта
    const original = track.innerHTML;
    track.innerHTML = original + original;

    // Базовая скорость (десктопная)
    let speed = parseInt(row.getAttribute('data-speed')) || 50;

/*    // Если мобильная версия → скорость медленнее
    if (window.innerWidth <= 600) {
        speed = speed * 1.8; // Увеличиваем время → анимация становится медленнее
    }*/

    const direction = row.getAttribute('data-direction') || 'left';

    // Применяем
    track.style.animationDuration = speed + 's';
    track.style.animationDirection = direction === 'left' ? 'normal' : 'reverse';
});


















$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body_fix');
});

$('.close').on('click', function () {

    $('body').removeClass('body_fix');
    let prt = $(this).parents('.modal');

    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
            $('body').removeClass('body_fix');
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});


