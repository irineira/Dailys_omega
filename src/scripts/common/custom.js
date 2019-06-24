$(document).ready(() => {


    // burger
    $('.burger').click(function() {
        $('.adaptmenu').toggleClass('adaptmenu_active');
        // $('body').css('overflow', 'hidden');
    });

    // $('.close').click(function() {
    //     $('.adaptmenu').removeClass('adaptmenu_active');
    //     $('body').css('overflow', 'visible');
    //     $('body').css('overflow-x', 'hidden');
    // });

    $('.adaptmenu__item').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        // $('body').css('overflow', 'visible');
        // $('body').css('overflow-x', 'hidden');
    });


    // map

    (function initMap() {
        var coordinates = {lat: 46.477807, lng: 30.754870},  
        
        
            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: 12
            });

            var image = '../images/map-marker.png';
            marker = new google.maps.Marker({
                position: {lat: 46.476452, lng: 30.752942},
                map: map,
                icon: image
            });

            marker = new google.maps.Marker({
                position: {lat: 46.468941, lng: 30.760026},
                map: map,
                icon: image
            });
    })()



    //     // scrol menu
    $(document).on('click', '.adaptmenu__item a', function() {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    })

    
//     // popap

//     body = $('body');

//     $('.button').click(function() {
//         $('.modalDialogCustom').addClass('modalDialogCustom_active');
//         $(body).css('overflow', 'hidden')
//     });

//     $('.contentpopap__close, .shadow_popap').click(function() {
//         $('.modalDialogCustom').removeClass('modalDialogCustom_active');
//         $(body).css('overflow', 'visible');
//     });




//     // slider

    var swiper = new Swiper('.swiper-container', {
        loop: false,
        slidesPerView: 3,
        centeredSlides: false,
        noSwiping: true,
        breakpoints: {
            500: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    });

});



// faq

$(document).on('click', '.questionitem', function(){
    console.log('da');
    $('.questionitem__bottom').addClass('hidden');
    $(this).find('.questionitem__bottom').removeClass('hidden');
    $('.questionitem__icon img').removeClass('trans_rot');
    $(this).find('.questionitem__icon img').addClass('trans_rot');
    // $('.img2').addClass('hidden');
    // $('.img1').removeClass('hidden');
    // $(this).find('.img2').removeClass('hidden');
    // $(this).find('.img1').addClass('hidden');
    
});




// select

$('.select').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#'+$(e.target).attr('for')).prop('checked',true);
});

$(document).click(function() {
    $('.select').removeClass('expanded');
});

      

//scroll one screen bottom

$(document).ready(function(){
    $('.scroll_bottom').click(function () {
        var win = $(window).height();
        $('body,html').animate({
            scrollTop: win
        }, 800);
        return false;
    });
});

                                                                           

                                        

