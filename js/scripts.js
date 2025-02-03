



/*    $( document ).ready(function(){
        $( '#docs_gallery_popup .gallery_slide img' ).hover(function(){
            $( '#docs_gallery_popup .lilac_button' ).show();
        }, function(){
            $( '#docs_gallery_popup .lilac_button' ).hide();
        });
    });*/
$(document).on("change", "#education_request_form_6_select", function() {
    $('#education_request_form_6_input').val($(this).val());
});
$(document).on("change", "#education_request_form_7_select", function() {
    $('#education_request_form_7_input').val($(this).val());
});
$(document).on("change", "#education_request_form_16_select", function() {
    $('#education_request_form_16_input').val($(this).val());
});
/* CUSTOM SELECT */

$(".select").each(function () {

    if (this.id == 'education_request_form_6_select') {
        return true;
    }
    if (this.id == 'education_request_form_7_select') {
        return true;
    }
    if (this.id == 'education_request_form_16_select') {
        return true;
    }

    const _this = $(this),
        selectOption = _this.find("option"),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(":selected"),
        duration = 150; // РґР»РёС‚РµР»СЊРЅРѕСЃС‚СЊ Р°РЅРёРјР°С†РёРё

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $("<div>", { class: "new-select", text: _this.children("option:disabled").text() }).insertAfter(_this);

    const selectHead = _this.next(".new-select");
    $("<div>", { class: "new-select__list" }).insertAfter(selectHead);

    const selectList = selectHead.next(".new-select__list");
    for (let i = 1; i < selectOptionLength; i++) {
        $("<div>", { class: "new-select__item", html: $("<span>", { text: selectOption.eq(i).text() })
        })
            .attr("data-value", selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find(".new-select__item");
    selectList.slideUp(0);

    selectHead.on("click", function () {

        if (!$(this).hasClass("on")) {
            $(this).addClass("on");
            selectList.slideDown(duration);

            selectItem.on("click", function () {
                let chooseItem = $(this).data("value");
                console.log($(this).parent().parent().find('select').id);
                //console.log(chooseItem);
                //console.log($(this).find("span").text());

                //console.log( 'РєР»РёРє РїРѕ - ' + $(this).attr('id') );
                //console.log( 'РЅСѓР¶РЅС‹Р№ СЃРµР»РµРєС‚ id - ' + $(this).parent().parent().find('select').attr('id') );
                //$("select").val(chooseItem).attr("selected", "selected");
                $(this).parent().parent().find('select').val(chooseItem).attr("selected", "selected");


                //selectHead.text('<span>' + $(this).find("span").text() + '</span>');
                selectHead.html('<span>' + $(this).find("span").text() + '</span>');


                selectList.slideUp(duration);
                selectHead.removeClass("on");
            });
        } else {
            $(this).removeClass("on");
            selectList.slideUp(duration);
        }
    });

});



/* POPUPS */
function PopUpShow(popup, video_id ) {
    $('.blur_container').addClass('blur');
    //$('html,body').addClass("no_scroll");
    //if( video_id ){ $('#' + popup + ' ._pop_window .video_container').append('<iframe src="https://www.youtube.com/embed/' + video_id + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'); }
    if( video_id ){ $('#' + popup + ' ._pop_window .video_container').append('<iframe src="https://rutube.ru/play/embed/' + video_id + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'); }
    /*var object = document.getElementById(popup);
    document.body.appendChild(object);*/


    $('#' + popup).removeClass('HidePopUp').addClass('ShowPopUp');
}

function PopUpShowGallery(popup, slide_id ) {
    $('.blur_container').addClass('blur');
    var object = document.getElementById(popup);
    document.body.appendChild(object);
    $('#' + popup).removeClass('HidePopUp').addClass('ShowPopUp');
    gallerySwiper.slideTo( slide_id,0,true );
}

function PopUpClose(popup) {
    $('.blur_container').removeClass('blur');
    //$('html,body').removeClass("no_scroll");
    $('#' + popup).removeClass('ShowPopUp').addClass('HidePopUp');
    if ($('#' + popup + ' ._pop_window .video_container iframe').length > 0) { $('#' + popup + ' ._pop_window .video_container iframe').remove(); }
}


$(document).on("click",'._pop_close',function() { PopUpClose( $(this).parent().parent().attr('id') );});


var imageUrl = $('.author .wrapper .left_column img').attr('src');
$('.author .wrapper .right_column .image_wrapper').css('background-image', 'url(' + imageUrl + ')');

var imageUrlCollaboration = $('.collaboration .wrapper .left_column img').attr('src');
$('.collaboration .wrapper .right_column .image_wrapper').css('background-image', 'url(' + imageUrlCollaboration + ')');

var imageUrlVeryIMportant = $('.very_important .wrapper .left_column img').attr('src');
$('.very_important .wrapper .right_column .image_wrapper').css('background-image', 'url(' + imageUrlVeryIMportant + ')');

var imageUrlMyCompetence = $('.my_competence .wrapper .left_column img').attr('src');
$('.my_competence .wrapper .right_column .image_wrapper').css('background-image', 'url(' + imageUrlMyCompetence + ')');

var imageUrlIamAuthor = $('.iam_author .wrapper .left_column img').attr('src');
$('.iam_author .wrapper .right_column .image_wrapper').css('background-image', 'url(' + imageUrlIamAuthor + ')');

var imageUrlJoyCrafts = $('.joy_crafts .wrapper .left_column img').attr('src');
$('.joy_crafts .wrapper .right_column .image_wrapper').css('background-image', 'url(' + imageUrlJoyCrafts + ')');

var imageUrlStudyCases = $('.study_cases .wrapper .left_column img').attr('src');
$('.study_cases .wrapper .right_column .image_wrapper').css('background-image', 'url(' + imageUrlStudyCases + ')');

var imageUrlVideoAbout = $('.video_on_about .wrapper .left_column span img').attr('src');
$('.video_on_about .wrapper .right_column .image_wrapper').css('background', 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + imageUrlVideoAbout + ')');
$('.video_on_about .wrapper .right_column .image_wrapper').css('background-size', 'cover');

var animatioNotShowed = true;
var townsNotShowed = true;

function elem_in_visible_area(selector)
{
    let elem_p = $(selector),
        elem_p_height = elem_p.height(),
        offset_top_el = elem_p.offset().top,
        offset_bottom_el = offset_top_el + elem_p.height(),
        scrolled = $(window).scrollTop(),
        scrolled_bottom = scrolled + $(window).height();

    if (scrolled_bottom > offset_top_el && offset_bottom_el > scrolled){ return true; }
    return false;
}

function countersAnimation()
{
    animatioNotShowed = false;
    const counters = document.querySelectorAll('.value');
    const speed = 100;
    counters.forEach( counter => {
        const animate = () =>
        {
            const value = +counter.getAttribute('akhi');
            const data = +counter.innerText;

            const time = value / speed;
            //console.log(time);
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 50);
            }else{
                counter.innerText = value;
            }
        }
        animate();
    });
}

function townsAnimation()
{
    townsNotShowed = false;

    $( "._town .town_1 img" ).animate({ opacity: 1.0 });

    console.log('townsAnimation');

}




var gallerySwiper = new Swiper(".gallery_swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".gallery_swiper_button_next",
        prevEl: ".gallery_swiper_button_prev",
    },
    pagination: {
        el: ".gallery_swiper_pagination",
        clickable: true,
        renderBullet: function (index, className) { return '<span class="' + className + '">' + '</span>'; }
    },
});




var studySwiper = new Swiper(".study_guides_details_slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    touchEventsTarget: 'wrapper',
    navigation: {
        nextEl: ".study_swiper_button_next",
        prevEl: ".study_swiper_button_prev",
    },
    pagination: {
        el: ".study_swiper_pagination",
        clickable: true,
        renderBullet: function (index, className) { return '<span class="' + className + '">' + '</span>'; }
    },
});


/* Universal Details Slider */
var studySwiper = new Swiper("._uni_details_page_slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    touchEventsTarget: 'wrapper',
    navigation: {
        nextEl: ".study_swiper_button_next",
        prevEl: ".study_swiper_button_prev",
    },
    pagination: {
        el: ".study_swiper_pagination",
        clickable: true,
        renderBullet: function (index, className) { return '<span class="' + className + '">' + '</span>'; }
    },
});

if($("._uni_details_page_slider .swiper-wrapper .swiper-slide").length == 3) {
    //console.log('Stop swiper _uni_details_page_slider');
    //$('.swiper-wrapper').addClass( "disabled" );
    //$('.swiper-pagination').addClass( "disabled" );
    studySwiper.disable();
}

setTimeout(function() {

    /*
                var bodyHeight = $(document).height();
                console.log( 'bodyHeight - ' + bodyHeight);

                var windowHeight = $(window).height();
                console.log( 'windowHeight - ' + windowHeight);

                var footerHeight = $('footer').height();
                console.log( 'footerHeight - ' + footerHeight);

    */
    var old_bottom = $('.scroll_to_top').css('bottom');

    $(window).scroll(function() {

        // Р°РЅРёРјР°С†РёСЏ СЃС‡РµС‚С‡РёРєРѕРІ РµСЃР»Рё РѕРЅРё РµСЃС‚СЊ РЅР° СЃС‚СЂР°РЅРёС†Рµ Рё РґРѕРєСЂСѓС‚РёР»Рё РґРѕ РЅРёС…
        if ($('.counters .wrapper ul').length > 0) { if (elem_in_visible_area('.counters .wrapper ul')){ if(animatioNotShowed){ countersAnimation(); } } }

        // РїРѕР·РёС†РёРѕРЅРёСЂРѕРІР°РЅРёРµ scroll_to_top РїРѕ footer
        //if ( elem_in_visible_area('footer') ) { $('.scroll_to_top').css('bottom', new_bottom = $(window).height() - ( $('footer').offset().top  - $(window).scrollTop() ) + ( $('.scroll_to_top').outerHeight()/2  ) + 'px'); }
        //else{ $('.scroll_to_top').css('bottom', old_bottom); }

        if ( elem_in_visible_area('footer') )
        {
            $('.scroll_to_top').addClass('scroll_to_top_freeze');
        }else{
            $('.scroll_to_top').removeClass('scroll_to_top_freeze');
        }
    })

    // Р°РЅРёРјР°С†РёСЏ СЃС‡РµС‚С‡РёРєРѕРІ РµСЃР»Рё РѕРЅРё РµСЃС‚СЊ РЅР° СЃС‚СЂР°РЅРёС†Рµ Рё СѓР¶Рµ РЅР° СЌРєСЂР°РЅРµ
    if ($('.counters .wrapper ul').length > 0) { if(elem_in_visible_area('.counters .wrapper ul')){ if(animatioNotShowed){ countersAnimation(); } } }

    // Р°РЅРёРјР°С†РёСЏ РіРѕСЂРѕРґРѕРІ РµСЃР»Рё РѕРЅРё РµСЃС‚СЊ РЅР° СЃС‚СЂР°РЅРёС†Рµ Рё СѓР¶Рµ РЅР° СЌРєСЂР°РЅРµ
    if ($('.representatives_on_main ._wrapper ._map ._town img').length > 0) {
        if (elem_in_visible_area('.representatives_on_main'))
        {
            if(townsNotShowed){ townsAnimation();  }

        }
    }

    $('.dropdown').click(function() {
        //console.log("РљР»РёРє РїРѕ dropdown");
        if( $(this).parent().children('ul').is(":visible") )
        {
            //console.log("РЎР°Р±РјРµРЅСЋ РІРёРґРёРјРѕ - Р·Р°РєСЂС‹РІР°РµРј СЃР°Р±РјРµРЅСЋ");
            $('.submenu').parent().children('ul').hide();
            $(this).removeClass('active');
        }else{
            //console.log("РЎР°Р±РјРµРЅСЋ СЃРєСЂС‹С‚Рѕ - СЂР°СЃРєСЂС‹РІР°РµРј СЃР°Р±РјРµРЅСЋ");
            $('.submenu').hide();
            $('.dropdown').removeClass('active');
            $(this).parent().children('ul').show();
            $(this).addClass('active');
        }
    });

    $(document).mouseup( function(e){
        var div = $(".submenu");
        var div2 = $(".dropdown");
        if ( !div.is(e.target) && !div2.is(e.target) && div.has(e.target).length === 0 ) {
            //console.log("РљР»РёРє РќР• РїРѕ СЃР°Р±РјРµРЅСЋ - Р·Р°РєСЂС‹РІР°РµРј СЃР°Р±РјРµРЅСЋ");
            $('.dropdown').removeClass('active');
            div.hide();
        }
    });


    /* SLIDERS */




    var mainSwiper = new Swiper(".main_slider", {

        slidesPerView: 1,
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".main_slider_right_arrow",
            prevEl: ".main_slider_left_arrow",
        },

        breakpoints: {
            // when window width is >= 720px
            720: {

            },
            // when window width is >= 1320px
            1320: {

                pagination: {
                    el: ".slider_pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        //return '<span class="' + className + '">' + (index + 1) + "</span>";
                        return '<span class="' + className + '">' + '</span>';
                    },
                },
            }
        }
    });

    var videoSwiper = new Swiper(".video_swiper", {

        // when window width is < 720px
        slidesPerView: 3,
        spaceBetween: 15,
        //width: $('.wrapper').innerWidth(),
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 720px
            720: {
                allowTouchMove: true,
                slidesPerView: 3,
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: true,
                slidesPerView: 3,
                spaceBetween: 30
            }
        }

    });

    var aboutSwiper = new Swiper(".about_swiper", {

        // when window width is < 720px
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        allowTouchMove: true,
        //pagination: { el: ".swiper-pagination", },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 720px
            720: {
                allowTouchMove: true,
                loop: true,
                slidesPerView: 4,
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: false,
                loop: false,
                slidesPerView: 4,
                spaceBetween: 30
            }
        }

    });

    var shopSwiper = new Swiper(".shop_swiper", {

        // when window width is < 720px
        slidesPerView: 4,
        spaceBetween: 30,
        //width: $('.wrapper').innerWidth(),
        loop: true,
        allowTouchMove: true,
        //pagination: { el: ".swiper-pagination", },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 720px
            720: {
                allowTouchMove: true,
                loop: true,
                slidesPerView: 4,
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: false,
                loop: false,
                slidesPerView: 4,
                spaceBetween: 30
            }
        }

    });

    var newsSwiper = new Swiper(".news_swiper", {

        // when window width is < 720px
        slidesPerView: 4,
        spaceBetween: 30,
        //width: $('.wrapper').innerWidth(),
        loop: true,
        allowTouchMove: true,
        //pagination: { el: ".swiper-pagination", },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 720px
            720: {
                allowTouchMove: true,
                slidesPerView: 4,
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: false,
                slidesPerView: 4,
                spaceBetween: 30
            }
        }

    });
    var momCanSwiper = new Swiper(".momcan_swiper", {

        // when window width is < 720px
        slidesPerView: 4,
        spaceBetween: 30,
        //width: $('.wrapper').innerWidth(),
        loop: true,
        allowTouchMove: true,
        //pagination: { el: ".swiper-pagination", },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 720px
            720: {
                allowTouchMove: true,
                slidesPerView: 4,
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: false,
                slidesPerView: 4,
                spaceBetween: 30
            }
        }

    });

    var patentsSwiper = new Swiper(".patents_swiper", {

        // when window width is < 720px
        slidesPerView: 4,
        spaceBetween: 30,
        //width: $('.wrapper').innerWidth(),
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 720px
            720: {
                allowTouchMove: true,
                slidesPerView: 4,
                grabCursor: true,
                touchEventsTarget: 'container',
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: true,
                slidesPerView: 4,
                grabCursor: true,
                touchEventsTarget: 'wrapper',
                spaceBetween: 32
            }
        }

    });

    var bigImageSwiper = new Swiper(".news_page_big_image", {

        slidesPerView: 1,
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },

    });

    $(document).scroll(function ()
    {

        //console.log('Р·РЅР°С‡РµРЅРёРµ select-1: ' + $('#_select_1').val());
        //console.log('Р·РЅР°С‡РµРЅРёРµ select-2: ' + $('#_select_2').val());
        //console.log('Р·РЅР°С‡РµРЅРёРµ select-2: ' + $('#_select_3').val());


        var currentOffset = $(document).scrollTop();
        //console.log('currentOffset ' + currentOffset );
        // SCROLL TO TOP BUTTON
        var showScrollToTopOffset = $(window).height();
        if( currentOffset > showScrollToTopOffset ){ $( '.scroll_to_top' ).show(); }else{ $( '.scroll_to_top' ).hide(); }

        // SCROLL DOWN
        var showScrollDownOffset = 400;
        if( currentOffset > showScrollDownOffset ){ $( '.scroll_down' ).hide(); }else{ $( '.scroll_down' ).show(); }

        // HUMBURGER
        //var showHumburgerOffset = $(window).height()/2;
        var showHumburgerOffset = 130;
        if( currentOffset > showHumburgerOffset ){ $( '.humburger_show' ).show(); }else{ $( '.humburger_show' ).hide(); }
    });

    $('.scroll_to_top').click(function() { $('html, body').animate({scrollTop: '0px'}, 200); });

    $('.humburger_show').click(function() {
        //$('body,html').addClass("no_scroll");
        $('.blur_container').addClass('blur'); $('.humburger_container').show(); $('.humburger_scroll_box').animate( { "right": "0px" }, 300);
    });

    $('.humburger_hide').click(function() {
        //$('html,body').removeClass("no_scroll");
        $('.blur_container').removeClass('blur'); $('.humburger_scroll_box').animate( { "right": "-292px" }, 300); setTimeout(function() { $('.humburger_container').hide(); },300);
    });

    $('.humburger ul li ul li a').click(function() {
        $('.blur_container').removeClass('blur'); $('.humburger_scroll_box').animate( { "right": "-292px" }, 300); setTimeout(function() { $('.humburger_container').hide(); },300);
    });


},200);





$(window).on('orientationchange',function(){ location.reload(); });

$( ".expand_button" ).on( "click", function() {
    $(this).parent().parent().find('dd').toggleClass('expand_dd');
    $(this).parent().parent().find('dt').toggleClass('expanded');
    $(this).parent().parent().find('.expand_button').toggleClass('expanded_button');
} );
$( "._online_school_faq ._wrapper dl dt span" ).on( "click", function() {
    $(this).parent().parent().find('dd').toggleClass('expand_dd');
    $(this).parent().parent().find('dt').toggleClass('expanded');
    $(this).parent().parent().find('.expand_button').toggleClass('expanded_button');
} );

setTimeout(function() {

    var our_priorities_Swiper = new Swiper(".our_priorities_swiper", {

        // when window width is < 720px
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".gallery_slider_pagination",
            clickable: true,
            renderBullet: function (index, className) { return '<span class="' + className + '">' + '</span>'; }
        },

        // Responsive breakpoints
        breakpoints: {
            720: {
                allowTouchMove: true,
                loop: true,
                slidesPerView: 4,
                /*
                grid: {
                    rows: 2,
                },
                */
                spaceBetween: 30
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: true,
                loop: false,
                slidesPerView: 4,
                spaceBetween: 30
            }
        }

    });

    var _family_receives_Swiper = new Swiper("._family_receives_slider", {

        // when window width is < 720px
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        allowTouchMove: true,

        // Responsive breakpoints
        breakpoints: {
            720: {
                allowTouchMove: true,
                loop: false,
                slidesPerView: 6,
                grid: {
                    rows: 2,
                },
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: true,
                loop: false,
                slidesPerView: 6,
                grid: {
                    rows: 2,
                },
                spaceBetween: 30
            }
        }

    });

    var _our_lessons_Swiper = new Swiper("._our_lessons_slider", {

        // when window width is < 720px
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        allowTouchMove: true,

        // Responsive breakpoints
        breakpoints: {
            720: {
                allowTouchMove: true,
                loop: false,
                slidesPerView: 6,
                grid: {
                    rows: 2,
                },
                spaceBetween: 15
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: true,
                loop: false,
                slidesPerView: 6,
                grid: {
                    rows: 2,
                },
                spaceBetween: 30
            }
        }

    });


    var _parents_reviews_Swiper = new Swiper("._parents_reviews_slider", {

        // when window width is < 720px
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        allowTouchMove: true,

        // Responsive breakpoints
        breakpoints: {
            720: {
                allowTouchMove: true,
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 0
            },
            // when window width is >= 1320px
            1320: {
                allowTouchMove: true,
                loop: true,
                slidesPerView: "auto",
                grabCursor: true,
                spaceBetween: 0
            }
        }

    });

},200);
