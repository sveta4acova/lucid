var CustomEvents = {
	MENU_CLOSE: 'menu-close'
};

$(document).on(CustomEvents.MENU_CLOSE, function(event) {
	GLOBALS.$body.removeClass('open-menu');
	GLOBALS.$menuOpenBtn.removeClass('open-menu');
});
