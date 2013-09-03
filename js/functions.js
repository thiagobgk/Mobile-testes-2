// Developed by Thiago Brito - XBGK
// September 2013


$(document).ready(function(){
	$('a.icon-config').click(function(){
		
		var element = $('div.wrap-body section.content').html();
		var canvas = $('canvas');
		
		$('div.wrap-film').fadeIn(250),
		$('div.wrap-film div.content-config').animate({left: '0'},450);
		$('div.people-list svg image').fadeOut(function(){
			$('div.people-list svg image').attr('style','filter:url(#blur-effect-1)'),
			$('div.people-list svg image').fadeIn(450)
		})
		
		
	}),
	$('a.icon-back').click(function(){
		$('div.wrap-film div.content-config').animate({left: '-64%'},450),
		$('div.wrap-film').fadeOut(250),
		$('div.people-list svg image').attr('style','');
	})
})