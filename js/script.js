$('.header__menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.header__menu').toggleClass('menu_active');
    $('.video-content').toggleClass('video-content_active');
    $('.contacts-content').toggleClass('contacts-content_active');
    $('.philosophy-content').toggleClass('philosophy-content_active');
    })

$('.header__menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('header__menu-btn_active')
});

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).addClass('active');
    $(this).find('.dropdown-menu').slideToggle(1000);
});

// https://stackoverflow.com/questions/13980448/jquery-focusout-click-conflict
$('.dropdown').focusout(function () {
    var that = $(this);
    window.setTimeout(function () {
        that.removeClass('active');
        that.find('.dropdown-menu').slideUp(300);
    }, 100)
});

$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

/*Translate*/
var arrLang = {
    'en': {
        'schedule': 'Mon - Sat',
        'philosophy': 'Philosophy',
        'team': 'Team',   
        'photos': 'Photos',
        'videos': 'Videos',
        'contacts': 'Contacts',
        'appointment': 'Appointment',
        'ask': 'Ask',
    },
    'ru': {
        'schedule': 'Пн - Сб',
        'philosophy': 'Философия',
        'team': 'Команда',   
        'photos': 'Фото',
        'videos': 'Видео',
        'contacts': 'Контакты',
        'appointment': 'Записаться',
        'ask': 'Спросить',
    },
    'uk': {
        'schedule': 'Пн - Сб',
        'philosophy': 'Фiлософiя',
        'team': 'Команда',   
        'photos': 'Фото',
        'videos': 'Вiдео',
        'contacts': 'Контакти',
        'appointment': 'Записатися',
        'ask': 'Запитати',
    }
}

    $(function() {
        $('.translate-btn').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});