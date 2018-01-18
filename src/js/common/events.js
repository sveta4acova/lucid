let CustomEvents = {
	MENU_CLOSE: 'menu-close'
};

$(document).on(CustomEvents.MENU_CLOSE, (event) => {
	GLOBALS.$body.removeClass('open-menu');
	GLOBALS.$menuOpenBtn.removeClass('open-menu');
});
