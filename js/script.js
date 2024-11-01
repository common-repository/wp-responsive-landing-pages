//action on the button events 

function WP_RESPONSIVE_LANDING_PAGES_send_hero_mail(nodeid){

	var node_instance = $('div[data-nodeid="'+nodeid+'"]');
	var name= node_instance.find("#follow-up-name").val();
	var email= node_instance.find("#follow-up-email").val();
	var page_id = $("#page_id").val();
	var node_id = nodeid;
	node_instance.find("#follow-up-name").next("span").remove();
	node_instance.find("#follow-up-name").parent().removeClass("has_error");
	node_instance.find("#follow-up-email").next("span").remove();
	node_instance.find("#follow-up-email").parent().removeClass("has_error");
	
	var error = 0;
	if(name.length==0){
		node_instance.find("#follow-up-name").after('<span class="help-block"> Neme should not be empty</span>');
		node_instance.find("#follow-up-name").parent().addClass("has_error");	
		error=1;
	}

	if(!WP_RESPONSIVE_LANDING_PAGES_isValidEmailAddress(email)){
		node_instance.find("#follow-up-email").after('<span class="help-block"> Please enter valid email</span>');
		node_instance.find("#follow-up-email").parent().addClass("has_error");	
		error=1;
	}

	if(error==0){
		/*processing user email */
		var data = {'action': 'ca_wplandingpages_send_hero_mail','name':name,'email':email,'page_id':page_id,'node_id':nodeid };		
		$.post(ajaxurl, data, function(response) {
		   if(response==1){
		   	alert("Thanks for follow up");
		   }
		});
	}
	
}


function WP_RESPONSIVE_LANDING_PAGES_process_cta(nodeid){
	var node_instance = $('div[data-cta_id="'+nodeid+'"]');
	var name= node_instance.find("#cta_name").val();
	var email= node_instance.find("#cta_email").val();
	var page_id = $("#page_id").val();
	var node_id = nodeid;

	node_instance.find("#cta_name").next("span").remove();
	node_instance.find("#cta_name").parent().removeClass("has_error");
	node_instance.find("#cta_email").next("span").remove();
	node_instance.find("#cta_email").parent().removeClass("has_error");

	var error = 0;
	if(name.length==0){
		node_instance.find("#cta_name").after('<span class="help-block"> Neme should not be empty</span>');
		node_instance.find("#cta_name").parent().addClass("has_error");	
		error=1;
	}

	if(!WP_RESPONSIVE_LANDING_PAGES_isValidEmailAddress(email)){
		node_instance.find("#cta_email").after('<span class="help-block"> Please enter valid email</span>');
		node_instance.find("#cta_email").parent().addClass("has_error");	
		error=1;
	}

	if(error==0){
		/*processing user email */
		var data = {'action': 'ca_wplandingpages_send_cta_mail','name':name,'email':email,'page_id':page_id,'node_id':nodeid };		
		$.post(ajaxurl, data, function(response) {
		   if(response==1){
		   	alert("Thanks for follow up");
		   }
		});
	}


}
function WP_RESPONSIVE_LANDING_PAGES_isValidEmailAddress(emailAddress) {
	  	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    	return pattern.test(emailAddress);
}