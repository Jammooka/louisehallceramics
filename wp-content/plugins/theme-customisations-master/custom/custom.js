jQuery(document).ready(function($) {
	if(jQuery('.portfolio-block').length > 0 && window.location.hash.length > 0) {
		var elemId = '#jump-' + window.location.hash.replace('#','');
		var _elem = jQuery(elemId);
		// Wait until the gallery has loaded before scrolling
		galleryAfterLoad(_elem);
	}
});

function scrollTo(target)
{
	if(target.length) {
		var breathingRoom = 30; // gap in pixels
		var offset = target.offset().top - breathingRoom;
		jQuery('html, body').animate({scrollTop: offset}, 1000);
	}
}

function galleryAfterLoad(headingElem)
{
	var _gallery = headingElem.nextAll('.foogallery-container');
	if (parseInt(_gallery.css('height')) < 100) {
		console.log(parseInt(_gallery.css('height')));
		setTimeout(galleryAfterLoad, 500, headingElem);
	}
	else {
		console.log(parseInt(_gallery.css('height')));
		scrollTo(headingElem);
	}
}
