var position = 0;
var index = 0;
var links = document.getElementsByClassName( 'hicca-nav-list__item' );
window.onscroll = function() {
	position = window.pageYOffset;
	// console.log(window.pageYOffset); //расположение по Y
}

function Scroll( id, i ) {
	links[ index ].className = 'hicca-nav-list__item';
	index = i;
	links[ index ].className = 'hicca-nav-list__item--active';
	var el_pos = document.getElementById( id ).offsetTop; //позиция элемента
	// console.log(el_pos); //получение расположения
	var interval;
	if ( position < el_pos ) { //нынешня поз если позиция меньше этого жлемента то то вверх
		interval = setInterval( function() {
			position += 36;
			if ( position >= el_pos ) {
				clearInterval( interval );
			} else {
				window.scrollTo( 0, position );
			}
		}, 0 )
	} else {
		interval = setInterval( function() {
			position -= 36;
			if ( position <= el_pos ) {
				clearInterval( interval );
			} else {
				window.scrollTo( 0, position );
			}
		}, 0 )
	}
}
// setInterval(function() {
// 	console.log('Hello');
// }, 2000);