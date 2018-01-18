$(() => {
	$('.contact__form').validate({
    errorPlacement: (error, element) => {
    	return false;
		},
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		}
	});
});