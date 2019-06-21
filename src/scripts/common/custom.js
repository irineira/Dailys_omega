$(document).ready(() => {


    // burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $('body').css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    $('.adaptmenu nav').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
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
//     $(document).on('click', '.sectmenu__item a', function() {
//         event.preventDefault();
//         var id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({
//             scrollTop: top
//         }, 500);
//     })

    
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

    // var swiper = new Swiper('.swiper-container', {
    //     loop: false,
    //     slidesPerView: 1,
    //     centeredSlides: false,
    //     pagination:{
    //         el: '.swiper-pagination'
    //     },
    //     autoplay: {
    //         delay: 90000,
    //         disableOnInteraction: false,
    //     }
    //   });



});

                                                                        

                                                                           

                                        

