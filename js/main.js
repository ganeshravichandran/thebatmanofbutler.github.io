$('#about-li').click( function() {
	var topOf = $('body').offset().top;
	$('body, html').animate({ scrollTop:topOf });

	$('.navbar li').css('background-color', '#FB3640')	
	$('#about-li').css('background-color', '#1D3461')
});

$('#projects-li').click( function() {
	var topOf = $('#projects').offset().top;
	$('body, html').animate({ scrollTop:topOf });

	$('.navbar li').css('background-color', '#FB3640')	
	$('#projects-li').css('background-color', '#1D3461')
});

$('#hobbies-li').click( function() {
	var topOf = $('#hobbies').offset().top;
	$('body, html').animate({ scrollTop:topOf });

	$('.navbar li').css('background-color', '#FB3640')	
	$('#hobbies-li').css('background-color', '#1D3461')
});

$('#arrow').click( function() {
	$('#arrow-popup').show();
	$('#arrow-popup').css('opacity', '1');
});

$('#kepler').click( function() {
	$('#kepler-popup').show();
});

$('#trace').click( function() {
	$('#trace-popup').show();
});

$('#lexicalPT').click( function() {
	$('#lexicalPT-popup').show();
});

$('#mrMime').click( function() {
	$('#mrMime-popup').show();
});

$('#RoboAO').click( function() {
	$('#RoboAO-popup').show();
});

$('.close-link').click( function() {
	$('.popup').hide();
});