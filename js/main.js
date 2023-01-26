
$(document).ready(function () {
    
    // feedback
    $(".button").click(function (e) {
        $('.feedback').addClass('active');
        $('.feedback').animate({
            opacity: 1,
        }, 500)

    });
    $('.feedback__exit').click(function (e) {
        $('.feedback').removeClass(`active`);
        $('.feedback').animate({
            opacity: 0,
        }, 500)

    });

    // ссылка якорь
    $('a[href^="#"]').on('click', function (e) { // Если ссылка является якорем, то выполняем следующее:
        let link = $(this).attr('href'), // берём ссылку якоря. Она же по факту id элемента
            el = $(document).find(link); // ищем элемент
        if (el.length > 0) { // если он существует


            el = el.eq(0).offset().top;// берём ПЕРВЫЙ элемент
            $('.menu').removeClass('active');
            $('.header__burger').removeClass('active');
            $('html, body').animate({
                scrollTop: (el) + 'px' // выполняем к нему скролл
            }, 500);
        }
        return false; // Отменяем переход по ссылке => и вывод якоря в адресную строку
    });
    // cлайдер uniform
    $('.uniform__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,

    })
    // cлайдер shope
    $('.shope__slider').slick({
        slidesToShow: 1,
        variableWidth: true,
        
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: true,
    })
    //invest section
    $('.invest-but').click(function () {
        $(this).addClass('active');
        $('.standart-but').removeClass('active');
        $('.standart-colum').removeClass('active');
        $('.invest-colum').addClass('active');
    })
    $('.standart-but').click(function () {
        $(this).addClass('active');
        $('.invest-but').removeClass('active');
        $('.standart-colum').addClass('active');
        $('.invest-colum').removeClass('active');

    })

    //indicator section 
    $('.indicators-invest-but').click(function () {
        $(this).addClass('active');
        $('.indicators-standart-but').removeClass('active');
        
       
        $('.financial-standart').removeClass('active');
        $('.financial-invest').addClass('active');
        
        
    })
    $('.indicators-standart-but').click(function () {
        $(this).addClass('active');
        $('.indicators-invest-but').removeClass('active');
        
        $('.financial-invest').removeClass('active');
        $('.financial-standart').addClass('active');
        
        
       

    })
    // анимация скролла для меню
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('active');

        }
        else {
            $('.header').removeClass('active');
        };
    });



});








