$(document).ready(() => {

        
    // map
    (function initMap() {
        var coordinates = {lat: 46.477807, lng: 30.754870},  
        
        
            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: 12
            });

            var image = './images/map-marker.svg';
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




    // scrol menu
        $(document).on('click', '.adaptmenu__item a, .scroll_bottom', function() {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 800);
        })




    // slider
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




    // faq
    $(document).on('click', '.questionitem', function(){
        $('.questionitem__bottom').addClass('hidden');
        $(this).find('.questionitem__bottom').removeClass('hidden');
        $('.questionitem__icon img').removeClass('trans_rot');
        $(this).find('.questionitem__icon img').addClass('trans_rot');
        
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

    $('.select').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('.header').css('box-shadow', '0px 8px 8px 0px rgba(0,0,0,0.45)');
    });



    //header
    // $(window).scroll(function(e) {
    //     var height = $(this).scrollTop();

    //     if(height > 10) {
    //         console.log('da');
    //         $('.header').addClass('subheader_fix');
    //     }
    //     else{
    //         $('.header').removeClass('subheader_fix');
    //     }
    // });


    $(function(){

        var CurrentScroll = 0;
        $(window).scroll(function(){
      
            var NextScroll = $(this).scrollTop();

                if(NextScroll === 0) {
                    $('.header').removeClass('subheader_fix');
                    $('.header').css('box-shadow', 'none');
                    $('.header').css('background', 'transparent');
                    // $('.adaptmenu').removeClass('adaptmenu_active');
                }

                else{

                    if (NextScroll > CurrentScroll) {
                        $('.header').addClass('subheader_fix');
                        $('.header').css('box-shadow', '0px 8px 8px 0px rgba(0,0,0,0.45)');
                        $('.header').css('background-image', 'url(./images/green_BG_1.jpg)');
                        $('.header').css('background-size', 'cover');
                    }
        
                    else {
                        $('.header').css('background-image', 'url(./images/green_BG_1.jpg)');
                        $('.header').css('background-size', 'cover');
                        $('.header').addClass('subheader_fix'); 
                        $('.header').css('box-shadow', '0px 8px 8px 0px rgba(0,0,0,0.45)');
                    }
                }

            CurrentScroll = NextScroll;
 
        });

        if(pageYOffset > 0) {
            $('.header').css('background-image', 'url(./images/green_BG_1.jpg)');
            $('.header').css('background-size', 'cover');
            $('.header').css('box-shadow', '0px 8px 8px 0px rgba(0,0,0,0.45)');
            $('.header').addClass('subheader_fix');
        }

    });

     // burger
     $('.burger').click(function() {
        $('.adaptmenu').toggleClass('adaptmenu_active');
        $('.header').css('box-shadow', 'none');
    });

    $('.adaptmenu__item').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
    });


});