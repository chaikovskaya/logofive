

var sliderCuratorSupportNav;
function initSliderCuratorSupportNav() {
    jQuery('.js-slider-curator-support-nav').each(function() {
        var $slider = $(this),
            $list = $slider.find('.js-slider-list'),
            sliderLength = $list.find('.swiper-slide').length;

        sliderCuratorSupportNav = new Swiper($list[0], {
            loop: false,
            pagination: false,
            navigation: false,
            threshold: 10,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 15,
                    slidesPerView: "auto",
                },
                719: {
                    spaceBetween: 15,
                    slidesPerView: 3,
                },
                1320: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                },
            },
            on: {
                afterInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
        let index = $slider.find('.curator_support_nav_item_active').index() || 0;
        sliderCuratorSupportNav.slideTo(index, 600, false);
    });
}


function initScroll() {
    $('.js-custom-scroll').each(function(){
        var customScroll = this;
        new SimpleBar(customScroll, {
            autoHide: false
        });
    });
}


$(document).ready(function () {
    initSliderCuratorSupportNav();
    initScroll();
});
