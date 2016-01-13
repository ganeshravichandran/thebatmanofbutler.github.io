var bodyTop = $('body').offset().top;
var projectsTop = $('#projects').offset().top;
var hobbiesTop = $('#hobbies').offset().top;
console.log(bodyTop, projectsTop, hobbiesTop);
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if ( bodyTop == scroll) {
		$('.navbar li').css('background-color', '#FB3640');
		$('#about-li').css('background-color', '#1D3461');
    }
    else if ( projectsTop >= scroll && scroll < hobbiesTop ) {
		$('.navbar li').css('background-color', '#FB3640');	
		$('#projects-li').css('background-color', '#1D3461');
    }
    else if ( hobbiesTop >= scroll) {
		$('.navbar li').css('background-color', '#FB3640');
		$('#hobbies-li').css('background-color', '#1D3461');
    }

});

$('#about-li').click( function() {
	$('body, html').animate({ scrollTop:bodyTop });
});

$('#projects-li').click( function() {
	$('body, html').animate({ scrollTop:projectsTop });
});

$('#hobbies-li').click( function() {
	$('body, html').animate({ scrollTop:hobbiesTop });
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