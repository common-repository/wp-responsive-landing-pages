//custom.js
(function( $ ){
	
	$(document).on("ready", function(){
		setTimeout(function(){
			var link = $(".toplevel_page_wp-landing li:nth-child(3)").find("a").attr("href");
        	$("body.post-type-landing-page .wrap h1 a").attr("href", link);
		})
	});//document ready



})( jQuery );


