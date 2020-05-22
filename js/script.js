$('.header__menu-btn').on('click', function(e) {
	e.preventDefault();
	$('.header__menu').toggleClass('menu_active');
	})

$('.header__menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('header__menu-btn_active')
});

/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(1000);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/