//burger
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu, .header__logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//sign-in form
$(document).ready(function() {
	$('.header__form-clicker').click(function(event) {
		$('.header__form').toggleClass('active');
	});
});
//hide form when click on other area
$(document).ready(function() {
	$('main').click(function(event) {
		$('.header__form').removeClass('active');
	});
});

//ibg
function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();