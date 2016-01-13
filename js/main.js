function navbarClick(sectionID, liID) {
	var topOf = $('#' + sectionID).offset().top;
	$('body, html').animate({ scrollTop:topOf });

	$('.navbar li').css('background-color', '#FB3640')	
	$('#' + liID).css('background-color', '#1D3461')
}

$('#about-li').click( function() {
	navbarClick('about', 'about-li')
});

$('#projects-li').click( function() {
	navbarClick('projects', 'projects-li')
});

$('#hobbies-li').click( function() {
	navbarClick('hobbies', 'hobbies-li')
});