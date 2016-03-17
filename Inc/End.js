if (window.fadeIn) {
	$('main').fadeTo('slow',1)
} else {
	setTimeout(fadeTo,3000)
}
function fadeTo() {
	$('main').fadeTo('fast',1)
}
