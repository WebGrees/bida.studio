$('.header__menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.header__menu').toggleClass('menu_active');
    $('.video-content').toggleClass('video-content_active');
    $('.contacts-content').toggleClass('contacts-content_active');
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