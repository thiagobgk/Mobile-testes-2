// Developed by Thiago Brito - XBGK
// September 2013


$(document).ready(function(){
	$('a.icon-config').click(function(){
		
		var element = $('div.wrap-body').html();
		//var canvas = $('canvas');
		
		$('div.wrap-film').fadeIn(250,function(){
		 	
			$('div.wrap-film div.content-config').animate({left: '0'},450);
			$('div.wrap-film div.fundo-blur').animate({left: '0'},450);
			$('div.content-blur').append(element);
			$('div.wrap-film div.film').fadeIn(450);
		})

		
		
	}),
	$('a.icon-back').click(function(){
		$('div.wrap-film div.content-config').animate({left: '-64%'},450),
		$('div.wrap-film').fadeOut(250),
		$('div.content-blur').empty();
		$('div.people-list svg image').attr('style','');
	})
})