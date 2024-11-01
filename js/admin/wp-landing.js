//custom.js
var plugin_images_folder = "";
var all_templates = "";
var added_template = 0;
load_template_data();
var highestNodeId = 0;
(function( $ ){
	
	var highestNodeId = 0;
	
	$(document).on("ready", function(){
		plugin_images_folder = $("#plugin_images_folder").val();
		
		$( "#templatebody" ).sortable({
			"handle": '.sort'
		});


		$(".wp-module-options").on("click", function(e){
			var moduleId = $(this).data("module-id");
			var moduleType = $(this).data("module-type");
			var nodeId = ++highestNodeId;
			var moduleObj = "";
			
			var capitalisedModuleType = moduleType.replace(/\b\w/g, function(l){ return l.toUpperCase() });
			
			if( typeof window["get"+capitalisedModuleType] === "function")
				moduleObj = window["get"+capitalisedModuleType]( moduleId, nodeId );
			
			if( moduleObj === "" )
				return;
					
			$("#templatebody").append( moduleObj.module_html );
			$("body").append( moduleObj.modal_html );
			initialiseModalSlidersAndColorPickers( $("#wplp-module-modal-"+nodeId) );
			$("#wplp-module-modal-"+nodeId).find(".tab-pane").append('<button type="button" id="apply_css" class="btn btn-success">Update</button>');
			//for move bottom
		
			var loaded_element="";
			$("div[data-id]").each(function(){
				if($(this).data("id")=="module-"+nodeId){
					loaded_element = $(this).find("div").attr("id");
				}
			});

			jQuery("html, body").animate({ scrollTop: jQuery(document).height()-550 });
			setTimeout(function(){
				jQuery(".comments-modals .nav-tabs").children("li:nth-child(2)").show();
				jQuery(".menu-modals .nav-tabs").children("li:nth-child(2)").show();
				jQuery(".hero-modals .nav-tabs").children("li:nth-child(2)").show();
				jQuery(".cta-modals .nav-tabs").children("li:nth-child(2)").show();
				jQuery(".pricing-modals .nav-tabs").children("li:nth-child(2)").show();
			},500);

		});//
		
		$("#templatebody").on("click", ".module-options .settings", function(e){
			var $moduleContainer = $(this).closest(".wplp-module-container");
			var dataId = $moduleContainer.data("id").replace("module-", "");
			$("#wplp-module-modal-"+dataId).modal("show");
		});//module-options settings


		$(document).on("click", ".module-options .settings", function(e){
			var $moduleContainer = $(this).closest(".wplp-module-container");
			var dataId = $moduleContainer.data("id").replace("module-", "");
			$("#wplp-module-modal-"+dataId).modal("show");
		});//copy of settings 

		$(document).on("click", "#link_save", function(e){
			

			var link_id = $(this).data('link_id');
			var value = $(this).prev("#link_value").val();

			var form_found = value.search("javascript:"); 
			if(validateUrl(value) || value=="#" || form_found==0){
				var text = $(this).prev("#link_value").prev("#text_value").val();
				$("#"+link_id).attr("href", value); 
				
				if(text.length>0){
					$("#"+link_id).text(text); 
				}
				
				var dataHtml = cretae_link_popover_content(link_id);
				jQuery("#"+link_id).data('bs.popover').options.content = dataHtml;
				jQuery("#"+link_id).popover('hide');
			} else {
				alert("Please enter valid URL link.");
			}
		
			
		});//copy of settings 


		$(document).on("click", "#image_save", function(e){
			var link_id = $(this).data('link_id');
			
			var value = $("#image_link_"+link_id).val();
			var logo_url = $("#image_url_"+link_id).val();

			var error=0;
			if(!check_image_url(value)){ error=1; alert("Enter valid image url"); }

			if($("#"+link_id).parent("a").length !=0){	
				if(validateUrl(logo_url) || logo_url=="#"){ 
					 
				} else {
					error=1; alert("Enter valid url");
				}
			}	
			
			if(error==0){
				$("#"+link_id).attr("src", value); 
				$("#"+link_id).attr("src", value); 
				$("#"+link_id).parent("a").attr("href", logo_url);
				var dataHtml = create_image_popup(link_id);
				jQuery("#"+link_id).data('bs.popover').options.content = dataHtml;
				jQuery("#"+link_id).popover('hide');
			}

		});//copy of settings 

		$("#templatebody").on("click", ".module-options .delete", function(e){
			var confirmation = confirm("Are you sure you want to delete this component?");
			if( confirmation )
			{
				$moduleContainer = $(this).closest(".wplp-module-container");
				var dataId = $moduleContainer.data("id");
				$moduleContainer.remove();
				$("#wplp-module-modal-"+dataId.replace("module-", "")).remove();
			}
		});//module-options delete

		$("#templatebody").on("click", ".module-options .edit", function(e){
			var k = $(this).parent("ul").next("div");
			$(k).find("p,h1,span,h2,h3,div,strong").each(function(){
					 	$(this).click(function(e){
					 		remove_edittable()
					 		var no_edit = 1;
					 		if($(this).find('img:first').length>0){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("ul")){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("nav")){
					 			no_edit=0;
					 		}
					 		
					 		if($(this).children(":first").is(".navbar-header")){
					 			no_edit=0;
					 		}
					 		if($(this).is(".navbar-toggle")){
					 			no_edit=0;
					 		}
					 		
					 		if(no_edit){
								$(this).attr('contentEditable','true').focus();
							}
					    	
					    	e.stopPropagation();
    						e.preventDefault();
					 	});
					 	
					 	$(this).blur(function () {
					   		 $(this).attr('contenteditable', false);
						});
				 	//}

			});

			$(k).find("a").each(function(){
				if($(this).find('img:first').length==0){
				  $(this).attr('data-container','body');
				  $(this).attr('data-toggle','popover');
				  $(this).attr('data-placement','top');
				  
				  var ele_id = "editl_"+(Math.floor((Math.random() * 100000)));
				  $(this).attr('id',ele_id);
			
					var dataHtml = cretae_link_popover_content(ele_id);
					$("#"+ele_id).popover({ html: true,content:dataHtml});
				}	  				 	
			});


			$(k).find("img").each(function(){
				  $(this).attr('data-container','body');
				  $(this).attr('data-toggle','popover');
				  $(this).attr('data-placement','top');
				  
				  var ele_id = "editl_"+(Math.floor((Math.random() * 100000)));
				  $(this).attr('id',ele_id);
			
				var dataHtml = create_image_popup(ele_id);
				 	 $("#"+ele_id).popover({ html: true,content:dataHtml});
			});

		
		});//module-options delete


		$("#templatebody").on("click", ".module-options .clone", function(e){
			var confirmation = confirm("Are you sure you want to make a copy of this component?");
			if( confirmation )
			{
				var $moduleContainer = $(this).closest(".wplp-module-container");
				var newNodeId = ++highestNodeId;
				cloneModule( $moduleContainer, newNodeId );
			}
		});//module-options delete
		
		$(document).on("click", ".menu-modals .add-nav-item", function(e){
			e.preventDefault();
			var htmlString = '<li>'+
											'<input type="text" class="labels" value="Label" />'+
											'<input type="text" class="links" value="#" />'+
											'<span class="remove-nav-item"><i class="fa fa-times"></i></span>'+
										'</li>';
			$(this).prev("ul").append( htmlString );
		});//add-nav-item click
		
		$(document).on("click", ".menu-modals .remove-nav-item", function(e){
			e.preventDefault();
			if(jQuery(".wp-menu-links-listing ul li").length==1){
				alert("You can't delete all links");
			} else{
				$(this).closest("li").remove();
			}
		});//.remove-nav-item click
		
		$("#templatebody").on("click", ".wplp-module-container", function(){
			$("#templatebody .wplp-module-container.hover").removeClass("hover");
			$(this).addClass("hover");
		});//.wplp-module-container click
		
		$("#save-template-button, #draft-template-button").on("click", function(e){
			e.preventDefault();
			var templateJSON = getCurrentTemplateJSON(highestNodeId);
			var get_html_data = get_updated_template_data();
			var update_id = $('#update_id').val();
			var status = $(this).attr('name');
			var url_link = $('#link_url_data').val();
			var data = {
			'action': 'cawplp_save_data',
			'value': templateJSON,
			'update_id' : update_id,
			'url_link' : url_link,
			'html_data' : get_html_data,
			'status' : status    // We pass php values differently!
			};
			// We can also pass the url value separately from ajaxurl for front end AJAX implementations
			jQuery.post(ajaxurl, data, function(response) {
				if( response.status )
				{
					alert("Saved successfully.");
					$('#update_id').val( response.post_id );
					$("#post_name").val(response.post_id);
					$("#save-template-button").text("Update/Publish");
					$("#preview_link").html('<button type="button" style="margin-right:5px;" class="btn btn-secondary btn-success" id="template_preview" name="preview">Preview</button>');
				}
				else
				{
					alert("Error!!! There was some error in updating the database...");
				}
			}, "json");
		});//#save-template-button click
		
		var data = {
			'action': 'cawplp_get_data'
		};
			// We can also pass the url value separately from ajaxurl for front end AJAX implementations
		
		jQuery.post(ajaxurl, data, function(response) {
		    jQuery('#display_data').html(response);
			//	alert('Got this from the server: ' + response);
		});



		$('#page-options-title').keyup(function(){
			//alert($('#page-options-title').val());
			//$('.update_url').val($('#page-options-title').val());
			});
		var update_id = $('#update_id').val();
			if(update_id !== undefined  && update_id != ' '){
				$('.update_url').removeAttr('readonly','');
				}
		$('#update-url').on("click",function(e){
			var post_name = $('.update_url').val();
			var id = $('#update_id').val();
			if(post_name != ''){
				var data = {
				'action': 'cawplp_save_url',
				'post_name': post_name,
				'id':id
				 // We pass php values differently!
				};
				$("#link_url_data").prop("readonly", true);
				// We can also pass the url value separately from ajaxurl for front end AJAX implementations
				jQuery.post(ajaxurl, data, function(response) {
					alert('Url Changed Successfully');
					$("#link_url_data").val(response.trim());
					$("#link_url_data").prop("readonly", false);
				});
			}
		});//#update-url click
		
		try
		{	if($("#wplp-saved-json").text().length>3){
				var saved_json = JSON.parse( $("#wplp-saved-json").text() );
				if( saved_json.post_data )
				{
					try
					{
						var modulesInfo = JSON.parse( saved_json.settings );
						highestNodeId = parseInt( modulesInfo.highestNodeId ) || 0;
						//loadTemplateJSON( JSON.parse(saved_json.settings) );
					}
					catch(e)
					{
						jQuery("#wplp-page-loader").fadeOut();
						console.error( e );
					}
				}
			}
		}
		catch(e)
		{
			console.error( e );
		}
		$('#update-url').on("click",function(e){			
		});
	});//document ready

	//enhancement due to slide
	
	$(document).on("click", ".wplp-module-container", function(e){
			$(this).find(".module-options").show();
	});//.remove-nav-item click
	
	$(document).on("click", "#template_preview", function(e){

		var post_id = $("#post_name").val().trim();
		if(post_id!=0){
			$.get(ajaxurl,{post_id:post_id,action:"get_url"}).done(function(data){
				if(data.length>0){
				window.open(data.trim(),'_blank');
				} else{
					alert("Please first Publish template")
				}
			});
		}
	});

	setTimeout(function(){
		$(".modal-body .tab-pane").each(function(){
			if($(this).attr("id")!="page-options-seo"){
				$(this).append('<button type="button" id="apply_css" class="btn btn-success">Update</button>');			
			}
		});

		//for shown facebook code
		jQuery(".comments-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery(".menu-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery(".cta-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery(".hero-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery("#wplp-page-options-modal .nav-tabs").children("li:nth-child(2)").show();
		jQuery("#page-options-analytics #apply_css").hide();
		jQuery(".pricing-modals .nav-tabs").children("li:nth-child(2)").show();

	},2000)


	$(document).on("click", "#apply_css", function(e){
	
		  var inst= $(this).parent().parent().parent().parent().parent().parent();
		  var div_id = inst.attr('id').replace("wplp-module-modal-","module-"); 
		  var main_instance = $('div[data-id="'+div_id+'"]').find("div");
		  var module_type = jQuery('div[data-id="'+div_id+'"]').attr("data-module-type"); 
 		  apply_css_changes(main_instance,module_type,inst);
 	});


	$(document).on('click', function (e) {
		var hide = 1;
		if($(e.target).parent("#link_form").length>0) { hide = 0; }
		if(hide){
			$('[data-toggle="popover"]').popover('hide');
			var item=0;
			$('[aria-describedby]').each(function(){
				//console.log($(this));
				if(typeof($(this).attr("aria-describedby"))=="undefined"){} else{
	            	if(item==0){
	            		$("#"+$(this).attr("id")).trigger("click");
	            	}
	            	item++;
	            	
        		}
				item++;
			})
		}
 
    });


//function for document click on header fixs hover
	$(document).on("click", ".load_complete_template", function(e){
		
		var r = confirm("Are you sure to add a full template? It will remove all previously added modules");
		if (r == true) {
		    load_full_template();
		} 
		
 	});

 	$(document).on("keyup", ".validate_price", function(e){
		
		var $this = $(this);
	    var val = $this.val();
	     var valLength = val.length;
	    var maxCount = 6;
	    if(valLength>maxCount){
	        $this.val($this.val().substring(0,maxCount));
	    }
 	});





})( jQuery );

function WP_RESPONSIVE_LANDING_PAGES_saving_as_draft(){
				
			var templateJSON = getCurrentTemplateJSON(highestNodeId);
			var get_html_data = get_updated_template_data();
			var update_id = jQuery('#update_id').val();
			var status = jQuery(this).attr('name');
			var url_link = jQuery('#link_url_data').val();
			var data = {
			'action': 'cawplp_save_data',
			'value': templateJSON,
			'update_id' : update_id,
			'url_link' : url_link,
			'html_data' : get_html_data,
			'status' : status    // We pass php values differently!
			};
			// We can also pass the url value separately from ajaxurl for front end AJAX implementations
			jQuery.post(ajaxurl, data, function(response) {
				if( response.status )
				{
					//alert("Saved successfully.");
					//alert(response.post_id)
					jQuery('#update_id').val( response.post_id );
					jQuery("#post_name").val(response.post_id);
					if(parseInt(jQuery("#post_name").val().trim())!=0){
						jQuery("#save-template-button").text("Update/Publish");
						jQuery("#preview_link").html('<button type="button" style="margin-right:5px;" class="btn btn-secondary btn-success" id="template_preview" name="preview">Preview</button>');
					}
				}
				else
				{
					alert("Error!!! There was some error in updating the database...");
				}
			}, "json");
}
//jQuery("#preview_link").html("");
var interval = setInterval(WP_RESPONSIVE_LANDING_PAGES_saving_as_draft,4000);


