'use strict';

var expanded = false;

$(document).ready(function() {
	
});


function headerSize() {
	if (!expanded) {
		$(".head").animate({
			height: "+=100"},
			500, function() {
			expanded = true;
		});
	} else {
		$(".head").animate({
			height: "-=100"},
			500, function() {
			expanded = false;
		});
	}
}