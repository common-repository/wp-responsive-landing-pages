//modules-json.js
var optionsString = 	'<ul class="module-options">'+
										'<li class="sort" title="move"><i class="fa fa-arrows"></i></li>'+
										'<li class="settings" title="settings"><i class="fa fa-gear"></i></li>'+
										'<li class="clone" title="clone"><i class="fa fa-clone"></i></li>'+
										'<li class="delete" title="delete"><i class="fa fa-times"></i></li>'+
									'</ul>';
									
var marginPaddingString = '<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>';
									
function getMenu( menuId, nodeId, lastdata)
{


	var placeholderImage = '';
	
	var modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals menu-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#menu-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#menu-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active menu-modal-stylings" id="menu-modal-styling-'+nodeId+'">'+
														marginPaddingString+											
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#181E26" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Text</label>'+
																'<input class="spectrum-colorpicker menu-text-color" color="#fff" data-property="menu-text-color" />'+
															'</div>'+
														'</div>'+														
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Menu</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider menu-text-size" data-property="menu-text-size" data-min="14" data-val="18" data-max="25" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane menu-modal-contents" id="menu-modal-content-'+nodeId+'">'+
														'<div class="wp-menu-links-listing">'+
															'<h4>Nav links</h4>'+
															'<ul>'+
																'<li>'+
																	'<input type="text" class="labels" value="Home">'+
																	'<input type="text" class="links" value="#">'+
																	'<span class="remove-nav-item"><i class="fa fa-times"></i></span>'+
																'</li>'+
															'</ul>'+
															'<a class="btn btn-default add-nav-item">Add new link</a>'+
														'</div>'+
														'<div class="sections">'+
															'<div class="row">'+
																'<label>Logo url:</label>'+
																'<input type="text" class="logo-url" data-property="logo-url" value="" />'+
															'</div>'+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( menuId )
	{
		case 2:
			placeholderImage = '<img src="http://placehold.it/800x100?text=Menu+2" alt="Menu 2" />';
			break;
			
		case 3:
			placeholderImage = '<img src="http://placehold.it/800x100?text=Menu+3" alt="Menu 3" />';
			break;
			
		case 1:
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'/template-modules/template-1/menu/menu-1.jpg" alt="Menu 1" />';
			break;
	}//switch()
	var template_data
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("menu","menu-1");
	}


					
	var menuHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="menu" data-module-id="'+menuId+'">'+
									optionsString+template_data+
								'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);							
	// get data from ajax 	
	setTimeout(function(){ update_menu_content(nodeId) },1000);						
	return {"module_html": menuHtml, "modal_html": modalHtml};


}//getMenu()


function getHero( heroId, nodeId, lastdata)
{		
	var background_image = path.wp_responsive_landing_pages_image_path+"pattern.jpg";
	var placeholderImage = '';
	/*its was the old text now its chnaged its managed by inline*/
	var previous_text = '<div class="sections">'+
															'<h4>Left section</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<input type="text" class="left-heading-text" data-property="left-heading-text" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Para text</label>'+
																'<textarea class="left-para-text" data-property="left-para-text"></textarea>'+
															'</div>'+
															'<div class="row">'+
																'<label>Button label</label>'+
																'<input type="text" class="left-button-label" data-property="left-button-label" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Button link</label>'+
																'<input type="text" class="left-button-link" data-property="left-button-link" />'+
															'</div>'+
														'</div>'+
														'<div class="sections">'+
															'<h4>Right section</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<input type="text" class="right-heading-text" data-property="right-heading-text" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Para text</label>'+
																'<textarea class="right-para-text" data-property="right-para-text"></textarea>'+
															'</div>'+
															'<div class="row">'+
																'<label>Button label</label>'+
																'<input type="text" class="right-button-label" data-property="right-button-label" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Button link</label>'+
																'<input type="text" class="right-button-link" data-property="right-button-link" />'+
															'</div>'+
														'</div>';
	/*variable contain the text related to the form settings	*/
	var follow_up_form = '<div class="sections"><h4>Follow up Form settings</h4>'
								+'<div class="row">'
									+'<label>Name Placeholder</label>'
										+'<input type="text" id="follow_up_name_placeholder" value="name" class="follow-up-name-placeholder" data-property="follow-up-name-placeholder">'
								+'</div>'
								+'<div class="row">'
									+'<label>Email Placeholder</label>'
										+'<input type="text" id="follow_up_email_placeholder" value="email" class="follow-up-email-placeholder" data-property="follow-up-email-placeholder">'
								+'</div>'
								+'<div class="row">'
									+'<label>Recipeint email</label>'
										+'<input type="text" id="follow_up_recepient_email" class="follow-up-recepient-email" data-property="follow-up-recepient-email">'
								+'</div>'
								+'<div class="row">'
									+'<label>Email Subject</label>'
										+'<input type="text" id="follow_up_email_subject" class="follow-up-email-subject" data-property="follow-up-email-subject">'
								+'</div>'
							+'</div>';											
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals hero-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#hero-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#hero-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active hero-modal-stylings" id="hero-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-val="124" data-min="0" data-max="125" data-step="1"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-val="124" data-min="0" data-max="125" data-step="1"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Background image url</label>'+
																'<input type="text" class="background-image-url" data-property="background-image-url" value="'+background_image+'" />'+
															'</div>'+
														'</div>'+														
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#202731" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Left heading text color</label>'+
																'<input class="spectrum-colorpicker left-heading-text-color" data-property="left-heading-text-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Left para text color</label>'+
																'<input class="spectrum-colorpicker left-para-text-color" data-property="left-para-text-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Right heading text color</label>'+
																'<input class="spectrum-colorpicker right-heading-text-color" data-property="right-heading-text-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Right para text color</label>'+
																'<input class="spectrum-colorpicker right-para-text-color" data-property="right-para-text-color" />'+
															'</div>'+
														'</div>'+														
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-val="30" data-min="1" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Sub-heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider sub-heading-text-size" data-property="sub-heading-text-size" data-val="18" data-min="1" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane hero-modal-contents" id="hero-modal-content-'+nodeId+'">'+follow_up_form
													+'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( heroId )
	{
		case 2:
			placeholderImage = '<img src="http://placehold.it/800x300?text=Hero+2" alt="Hero 2" />';
			break;
			
		case 3:
			placeholderImage = '<img src="http://placehold.it/800x300?text=Hero+3" alt="Hero 3" />';
			break;
			
		case 1:
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/hero/hero-1.jpg" alt="Hero 1" />';
			break;
	}//switch()
	
	
	var template_data;
	if(typeof(lastdata) !="undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("hero","hero-1");
	}
	
	template_data.replace('class="hero_right text-center"','class="hero_right text-center" data-nodeid="'+nodeId+'"');
	
	var template_data = template_data.replace('id="hero"', 'id="hero" data-nodeid="'+nodeId+'"');
	var template_data = template_data.replace("send_hero_mail()", "send_hero_mail('"+nodeId+"')");
	

	var heroHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="hero" data-module-id="'+heroId+'">'+
									optionsString+template_data+
								'</div>';

	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);
								
	return {"module_html": heroHtml, "modal_html": modalHtml};


	
}//getHero()


function getLogos( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var logosString = '';
	var numLogos = 10;
	for( var i = 0; i < numLogos; i++ )
	{
		var logoNum = i + 1;
		logosString += 	'<div class="row">'+
										'<label>Logo '+logoNum+'</label>'+
										'<input type="text" class="logo-'+logoNum+'-url" data-property="logo-'+logoNum+'-url" />'+
									'</div>';
	}//for()
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals logos-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#logos-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#logos-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active logos-modal-stylings" id="logos-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-val="48" data-property="padding-top" data-min="0" data-max="100" data-step="1"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-val="48" data-property="padding-bottom" data-min="0" data-max="100" data-step="1"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input color="#181e25" class="spectrum-colorpicker background-color" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" color="#647A97" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-val="19" data-min="1" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane logos-modal-contents" id="logos-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<input type="text" class="heading-text" data-property="left-heading-text" value="Featured in:" />'+
															'</div>'+
														'</div>'+
														'<div class="sections">'+
															'<h4>Logos</h4>'+
															logosString+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		case 2:
			placeholderImage = '<img src="http://placehold.it/800x300?text=logos+2" alt="logos 2" />';
			break;
			
		case 3:
			placeholderImage = '<img src="http://placehold.it/800x300?text=logos+3" alt="logos 3" />';
			break;
			
		case 1:
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/logos/logos-1.jpg" alt="logos 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("logos","logo-1");
	}
	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="logos" data-module-id="'+moduleId+'">'+
									optionsString+template_data+
								'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);		

	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getLogos()


function getBenefits( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var blocksString = '';
	var numBlocks = 3;
	for( var i = 0; i < numBlocks; i++ )
	{
		var blockNum = i + 1;
		blocksString += 	'<div class="sections">'+
											'<h4>Benefit '+blockNum+'</h4>'+
											'<div class="row">'+
												'<label>Image url(200x200)</label>'+
												'<input type="text" class="benefit-'+blockNum+'-image-url" data-property="benefit-'+blockNum+'-image-url" value="http://placehold.it/200x200" />'+
											'</div>'+
											'<div class="row">'+
												'<label>Heading text</label>'+
												'<input type="text" class="benefit-'+blockNum+'-heading-text" data-property="benefit-'+blockNum+'-heading-text" value="Awesome Benefits" />'+
											'</div>'+
											'<div class="row">'+
												'<label>Para text</label>'+
												'<textarea class="benefit-'+blockNum+'-para-text" data-property="benefit-'+blockNum+'-para-text">'+
													'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem '+
												'</textarea>'+
											'</div>'+
										'</div>';
	}//for()
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals benefits-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#benefits-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#benefits-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active benefits-modal-stylings" id="benefits-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-val="121" data-max="130" data-step="1"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-val="121" data-max="130" data-step="1"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#DDDDDD" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div data-val="32" class="slider heading-text-size" data-property="heading-text-size" data-min="1" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane benefits-modal-contents" id="benefits-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															'<div class="row">'+
																'<label>Main Heading text</label>'+
																'<input type="text" class="main-heading-text" data-property="main-heading-text" value="Awesome Benefits" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Main para text</label>'+
																'<textarea type="text" class="main-para-text" data-property="main-para-text" value="Featured in:"></textarea>'+
															'</div>'+
														'</div>'+
														'<div class="sections">'+
															'<h4>Benefit blocks</h4>'+
															blocksString+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		case 2:
			placeholderImage = '<img src="http://placehold.it/800x300?text=benefits+2" alt="benefits 2" />';
			break;
			
		case 3:
			placeholderImage = '<img src="http://placehold.it/800x300?text=benefits+3" alt="benefits 3" />';
			break;
			
		case 1:
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/benefits/benefits-1.jpg" alt="benefits 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("benifits","benifit-1");
	}

	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="benefits" data-module-id="'+moduleId+'">'+
									optionsString+template_data+
								'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);				
	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getBenefits()


function getFeatures( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var blocksString = '';
	var numBlocks = 10;
	for(var i = 0; i < numBlocks; i++ )
	{
		var blockNum = i + 1;
		var textString = '';
		if( i < 4 )
			textString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
		
		blocksString += '<div class="row">'+
										'<label>Feature '+blockNum+'</label>'+
										'<textarea class="feature-list-'+blockNum+'-text" data-property="feature-list-'+blockNum+'-text">'+
											textString+
										'</textarea>'+
									'</div>';
	}//for()
	
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals features-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#features-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#features-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active features-modal-stylings" id="features-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-val="125" data-min="0" data-max="125" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-val="125" data-min="0" data-max="125" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#F8F8F8" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-val="36" data-min="14" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane features-modal-contents" id="features-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															'<div class="row">'+
																'<label>Main Heading text</label>'+
																'<input type="text" class="main-heading-text" data-property="main-heading-text" value="Amazing Features" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Para 1 text</label>'+
																'<textarea class="para-1-text" data-property="para-1-text" value="">'+
																	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum vulputate enim, finibus mollis neque tincidunt vel. Sed id lorem nec lacus lacinia tempus non a est. Fusce ultrices arcu nec diam laoreet sagittis. Sed lobortis volutpat orci. '+
																'</textarea>'+
															'</div>'+
															'<div class="row">'+
																'<label>Para 2 text</label>'+
																'<textarea class="para-2-text" data-property="para-2-text" value="">'+
																	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum vulputate enim, finibus mollis neque tincidunt vel. Sed id lorem nec lacus lacinia tempus non a est. Fusce ultrices arcu nec diam laoreet sagittis. Sed lobortis volutpat orci. '+
																'</textarea>'+
															'</div>'+
															'<div class="row">'+
																'<label>Right side image url (567x500)</label>'+
																'<input type="text" class="right-image-url" data-property="right-image-url" value="http://placehold.it/567x500" />'+
															'</div>'+
														'</div>'+
														'<div class="sections">'+
															'<h4>Feature list texts</h4>'+
															blocksString+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/features/features-1.jpg" alt="features 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("features","feature-1");
	}

	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="features" data-module-id="'+moduleId+'">'+
										optionsString+template_data+
									'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);

	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getFeatures()


function getQuotes( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var blocksString = '';
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals quotes-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#quotes-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#quotes-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active quotes-modal-stylings" id="quotes-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-val="125" data-max="136" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-val="125" data-max="136" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#202833" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" color="#ffffff" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-min="14" data-val="20" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane quotes-modal-contents" id="quotes-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															'<div class="row">'+
																'<label>Quote text</label>'+
																'<textarea class="quote-text" data-property="quote-text">'+
																	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum vulputate enim, finibus mollis neque tincidunt vel. Sed id lorem nec lacus lacinia tempus non a est. Fusce ultrices arcu nec diam laoreet sagittis. '+
																'</textarea>'+
															'</div>'+
															'<div class="row">'+
																'<label>Image (150x150)</label>'+
																'<input type="text" class="image" data-property="image" value="http://placehold.it/150x150" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Name</label>'+
																'<input type="text" class="name" data-property="name" value="Jimmy Smith" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Designation</label>'+
																'<input type="text" class="designation" data-property="designation" value="Product Director" />'+
															'</div>'+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/quotes/quotes-1.jpg" alt="quotes 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("quote","quote-1");
	}
	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="quotes" data-module-id="'+moduleId+'">'+
										optionsString+template_data+
									'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);		

	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getQuotes()


function getPricing( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var blocksString = '';
	var numBlocks = 3;
	for( var i = 1; i <= numBlocks; i++ )
	{
		blocksString += '<h4>Plan '+i+'</h4>'+
									'<div class="row">'+
										'<label>Price</label>'+
										'<input type="text" class="price-'+i+' validate_price" data-property="price-'+i+'" value="999" />'+
									'</div>';/*+
									'<div class="row">'+
										'<label>Currency</label>'+
										'<input type="text" class="currency-'+i+'" data-property="currency-'+i+'" value="$" />'+
									'</div>'+
									'<div class="row">'+
										'<label>Name</label>'+
										'<input type="text" class="name-'+i+'" data-property="name-'+i+'" value="Basic Pricing" />'+
									'</div>'+
									'<div class="row">'+
										'<label>Features( separated by | symbol )</label>'+
										'<input type="text" class="features-'+i+'" data-property="features-'+i+'" value="Clean Design|Intuitive|Responsive|Amazing Framework " />'+
									'</div>'+
									'<div class="row">'+
										'<label>Button Text</label>'+
										'<input type="text" class="button-text-'+i+'" data-property="button-text-'+i+'" value="Get Access" />'+
									'</div>'+
									'<div class="row">'+
										'<label>Button Link</label>'+
										'<input type="text" class="button-link-'+i+'" data-property="button-link-'+i+'" value="#" />'+
									'</div>';*/
	}//for()
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals pricing-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#pricing-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#pricing-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active pricing-modal-stylings" id="pricing-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-val="120" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-val="125" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#DDDDDD" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-min="1" data-val="36" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane pricing-modal-contents" id="pricing-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															/*'<div class="row">'+
																'<label>Main Heading text</label>'+
																'<input type="text" class="main-heading-text" data-property="main-heading-text" value="Our Pricing" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Main para text</label>'+
																'<textarea class="main-para-text" data-property="main-para-text">'+
																	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum vulputate enim, finibus mollis neque tincidunt vel.'+
																'</textarea>'+
															'</div>'+
															'<div class="row">'+
																'<label>Footnote text</label>'+
																'<textarea class="footnote-text" data-property="footnote-text">'+
																	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'+
																'</textarea>'+
															'</div>'+
														'</div>'+*/
														'<div class="sections">'+
															'<h4>Pricing blocks</h4>'+
															blocksString+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/pricing/pricing-1.jpg" alt="pricing 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("price","price-1");
	}

	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="pricing" data-module-id="'+moduleId+'">'+
										optionsString+
										template_data+
									'</div>';

	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);								
	return {"module_html": moduleHtml, "modal_html": modalHtml};

}//getPricing()


function getCta( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var blocksString = '';

	var cta_form = '<div class="sections"><h4>Follow up Form settings</h4>'
								+'<div class="row">'
									+'<label>Name Placeholder</label>'
										+'<input type="text" id="cta_name_placeholder" value="name" class="cta-name-placeholder" data-property="follow-up-name-placeholder">'
								+'</div>'
								+'<div class="row">'
									+'<label>Email Placeholder</label>'
										+'<input type="text" id="cta_email_placeholder" value="email" class="cta-email-placeholder" data-property="follow-up-email-placeholder">'
								+'</div>'
								+'<div class="row">'
									+'<label>Recipeint email</label>'
										+'<input type="text" id="cta_recepient_email" class="cta-recepient-email" data-property="follow-up-recepient-email">'
								+'</div>'
								+'<div class="row">'
									+'<label>Email Subject</label>'
										+'<input type="text" id="cta_email_subject" class="cta-email-subject" data-property="follow-up-email-subject">'
								+'</div>'
							+'</div>';	
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals cta-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#cta-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#cta-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active cta-modal-stylings" id="cta-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-val="103" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-val="114" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#202833" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-min="1" data-val="35" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane cta-modal-contents" id="cta-modal-content-'+nodeId+'">'+
													cta_form +	
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/cta/cta-1.jpg" alt="cta 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("cta","cta-1");
	}

	template_data = template_data.replace('id="join-us"','id="join-us" data-cta_id="'+nodeId+'"');
	template_data = template_data.replace("process_cta()","process_cta('"+nodeId+"')");

	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="cta" data-module-id="'+moduleId+'">'+
										optionsString+template_data+
									'</div>';
	
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);

	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getCta()


function getFaq( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var blocksString = '';
	var numBlocks = 10;
	for( var i = 1; i <= numBlocks; i++ )
	{
		var questionString = '';
		var answerString = '';
		
		if( i <= 4 )
		{
			questionString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
			answerString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum vulputate enim, finibus mollis neque tincidunt vel. Sed id lorem nec lacus lacinia tempus non a est.';
		}
		
		blocksString += '<h4>FAQ '+i+'</h4>'+
									'<div class="row">'+
										'<label>Question text</label>'+
										'<input type="text" class="question-'+i+'" data-property="question-'+i+'" value="'+questionString+'" />'+
									'</div>'+
									'<div class="row">'+
										'<label>Answer text</label>'+
										'<textarea class="answer-'+i+'" data-property="answer-'+i+'" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">'+
											answerString+
										'</textarea>'+
									'</div>';
									
	}//for()
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals faq-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#faq-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#faq-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active faq-modal-stylings" id="faq-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-val="126" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-val="125" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" data-property="background-color" color="#DDDDDD" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-min="1" data-val="36" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane faq-modal-contents" id="faq-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															'<div class="row">'+
																'<label>Main Heading text</label>'+
																'<input type="text" class="main-heading-text" data-property="main-heading-text" value="FAQ" />'+
															'</div>'+
														'</div>'+
														'<div class="sections">'+
															'<h4>FAQ\'s</h4>'+
															blocksString+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/faq/faq-1.jpg" alt="faq 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("faq","faq-1");
	}

	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="faq" data-module-id="'+moduleId+'">'+
										optionsString+template_data+
									'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);	

	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getFaq()


function getComments( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals comments-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#comments-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#comments-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active comments-modal-stylings" id="comments-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-val="114" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-val="125" data-max="130" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input class="spectrum-colorpicker background-color" color="#ECECEC" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Heading text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Heading text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-min="1" data-val="56" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane comments-modal-contents" id="comments-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															'<div class="row" style="display:none">'+
																'<label>Main Heading text</label>'+
																'<input type="text" class="main-heading-text" data-property="main-heading-text" value="Facebook Comments" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Comments iframe code</label>'+
																'<textarea class="iframe-code" data-property="iframe-code""></textarea>'+
															'</div>'+'<div class="row"><label></label>For more help please <a href="https://developers.facebook.com/docs/plugins/embedded-comments" target="_blank">click</a> for facebook official documentation</div>'+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/comments/comments-1.jpg" alt="comments 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("comment","comment-1");
	}

	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="comments" data-module-id="'+moduleId+'">'+
										optionsString+template_data+
									'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);
					
	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getComments()


function getFooter( moduleId, nodeId, lastdata)
{										
	var placeholderImage = '';
	
	var blocksString = '';
	var socialLinks = ["facebook", "twitter", "google-plus", "linkedin", "youtube", "instagram"];
	
	for( var i = 0; i < socialLinks.length; i++ )
	{
		var name = socialLinks[i];
		blocksString += '<div class="row">'+
										'<label>'+name+' url</label>'+
										'<input type="text" class="'+name+'-url" data-property="'+name+'-url" />'+
									'</div>';
	}//for()
	
	var  modalHtml = '<div id="wplp-module-modal-'+nodeId+'" class="modal fade module-modals footer-modals">'+
									'<div class="modal-dialog modal-lg">'+
										'<div class="modal-content container-fluid">'+
											'<div class="modal-header">'+
												'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>'+
												'<ul class="nav nav-tabs">'+
													'<li class="active"><a href="#footer-modal-styling-'+nodeId+'" data-toggle="tab">Styling</a></li>'+
													'<li><a href="#footer-modal-content-'+nodeId+'" data-toggle="tab">Content</a></li>'+
												'</ul>'+
											'</div>'+
											'<div class="modal-body">'+
												'<div class="tab-content container-fluid">'+
													'<div class="tab-pane active footer-modal-stylings" id="footer-modal-styling-'+nodeId+'">'+
														'<div class="sections">'+
															'<h4>Appearances</h4>'+
															'<div class="row">'+
																'<label>Margin</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider margin-top" data-property="margin-top" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider margin-right" data-property="margin-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider margin-bottom" data-property="margin-bottom" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider margin-left" data-property="margin-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+
															'<div class="row">'+
																'<label>Padding</label>'+
																'<div>'+
																	'<div class="slider-4cols">'+
																		'<div>Top </div>'+
																		'<div class="slider padding-top" data-property="padding-top" data-min="0" data-val="38" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Right </div>'+
																		'<div class="slider padding-right" data-property="padding-right" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Bottom </div>'+
																		'<div class="slider padding-bottom" data-property="padding-bottom" data-min="0" data-val="33" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																	'<div class="slider-4cols">'+
																		'<div>Left </div>'+
																		'<div class="slider padding-left" data-property="padding-left" data-min="0" data-max="100" data-step="5"></div>'+
																		'<div class="value"></div>'+
																	'</div>'+
																'</div>'+
															'</div>'+															
															'<div class="row">'+
																'<label>Border</label>'+
																'<div class="slider-4cols">'+
																	'<div class="slider border-width" data-property="border-width" data-min="0" data-max="20" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+													
														'<div class="sections">'+
															'<h4>Colors</h4>'+															
															'<div class="row">'+
																'<label>Border color</label>'+
																'<input class="spectrum-colorpicker border-color" data-property="border-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Background color</label>'+
																'<input color="#DDDDDD" class="spectrum-colorpicker background-color" data-property="background-color" />'+
															'</div>'+
															'<div class="row">'+
																'<label>Paragraph text color</label>'+
																'<input class="spectrum-colorpicker heading-text-color" data-property="heading-text-color" />'+
															'</div>'+
														'</div>'+												
														'<div class="sections">'+
															'<h4>Text Size</h4>'+
															'<div class="row">'+
																'<label>Paragraph text</label>'+
																'<div class="slider-2cols">'+
																	'<div class="slider heading-text-size" data-property="heading-text-size" data-val="12" data-min="1" data-max="100" data-step="1"></div>'+
																	'<div class="value"></div>'+
																'</div>'+
															'</div>'+
														'</div>'+
													'</div>'+													
													'<div class="tab-pane footer-modal-contents" id="footer-modal-content-'+nodeId+'">'+
														'<div class="sections">'+
															'<div class="row">'+
																'<label>Footnote text</label>'+
																'<input type="text" class="footnote-text" data-property="footnote-text" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum vulputate enim" />'+
															'</div>'+
														'</div>'+										
														'<div class="sections">'+						
															'<h4>Social links</h4>'+
															blocksString+
														'</div>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
								
	switch( moduleId )
	{
		default: 
			placeholderImage = '<img src="'+plugin_images_folder+'template-modules/template-1/footer/footer-1.jpg" alt="footer 1" />';
			break;
	}//switch()
	
	var template_data;
	if(typeof(lastdata) != "undefined" && lastdata.length>0){
		template_data = lastdata;
	} else {
		template_data = get_template_data("footer","footer-1");
	}

	var moduleHtml = '<div class="row wplp-module-container" data-id="module-'+nodeId+'" data-module-type="footer" data-module-id="'+moduleId+'">'+
										optionsString+template_data+'</div>';
	var make_edit_id = 'data-id="module-'+nodeId+'"';							
	var module_id = get_template_id(template_data);
	make_editable(make_edit_id,module_id);				
	return {"module_html": moduleHtml, "modal_html": modalHtml};
}//getFooter()



function cloneModule( $originalModule, newNodeId)
{
	var moduleType = $originalModule.data("module-type");
	var moduleId = $originalModule.data("module-id");
	var moduleObj = "";
	
	var capitalisedModuleType = moduleType.replace(/\b\w/g, function(l){ return l.toUpperCase() });
	jQuery("#temp_ouput_data").html("");
	var extract_data = jQuery($originalModule).html();
	jQuery("#temp_ouput_data").html(extract_data);			
	jQuery("#temp_ouput_data").find(".module-options").remove();
	var html_data = jQuery("#temp_ouput_data").html();
	jQuery("#temp_ouput_data").html("");

	if( typeof window["get"+capitalisedModuleType] === "function")
		moduleObj = window["get"+capitalisedModuleType]( moduleId, newNodeId, html_data);
			
	
	if( moduleObj === "" )
	{
		alert("Invalid module type for cloning");
		return;		
	}
				
	jQuery(moduleObj.module_html).insertAfter( $originalModule );
	jQuery("body").append( moduleObj.modal_html );
	
	$targetModal = jQuery("#wplp-module-modal-"+newNodeId)
	initialiseModalSlidersAndColorPickers( $targetModal );
	jQuery($targetModal).find(".tab-pane").append('<button type="button" id="apply_css" class="btn btn-success">Update</button>');	
	var originalDataId = $originalModule.data("id").replace("module-", "");
	var $originalModal = jQuery("#wplp-module-modal-"+originalDataId);
	
	$originalModal.find(".slider[data-property]").each(function(index){
		var property = jQuery(this).data("property");
		var value = jQuery(this).slider("value");
		$targetModal.find("."+property).slider("value", value);
	});//each
	
	$originalModal.find(".spectrum-colorpicker[data-property]").each(function(index){
		var $this = jQuery(this);
		var property = $this.data("property");
		$targetModal.find("input[data-property='"+property+"']").attr("color",$this.val());
		$targetModal.find("."+property).spectrum("set", $this.val() );
	});//each
	
	$originalModal.find("input[data-property], textarea[data-property]").each(function(index){
		$this = jQuery(this);
		var property = $this.data("property");
		$targetModal.find("."+property).val( $this.val() );
	});//each
	
	
	switch( moduleType )
	{
		case "menu":
			var linksHtml = $originalModal.find(".menu-modal-contents ul").html();
			$targetModal.find(".menu-modal-contents ul").html( linksHtml );
			
			$targetModal.find(".menu-modal-contents ul li").each(function(index){
				var $this = jQuery(this);
				var $originalLinks = $originalModal.find(".menu-modal-contents li");
				$this.find(".labels").val( $originalLinks.eq(index).find(".labels").val() );
				$this.find(".links").val( $originalLinks.eq(index).find(".links").val() );
			});//each
			break;
			
		case "hero":			
			break;	
	}//switch()
}//cloneMenu()

function initialiseModalSlidersAndColorPickers( $modal )
{
	$modal.find(".slider").each(function(index){
		var $this = jQuery(this);
		$this.slider({
			min: $this.data("min"),
			max: $this.data("max"),
			step: $this.data("step"),
			change: function( event, ui ){
				$this.next("div").text( $this.slider("value") );
			}
		});

		var default_value = $this.data("val") || $this.data("min");
		$this.slider("value", default_value );
	});//each
	


	setTimeout(function(){
		
		$modal.find(".spectrum-colorpicker").each(function(index){
			var $this = jQuery(this);
			
			var picker_color = jQuery(this).attr("color");
			var mark_color = "#000";

			if(typeof(picker_color)!=" undefined"){
				mark_color=picker_color;
			}

			jQuery(this).spectrum({
				showInput: true,
	    		color: mark_color,
	    		preferredFormat: "hex"
			});
		});//each
	},2000);


}//initialiseModalSlidersAndColorPickers()


function getCurrentTemplateJSON( highestNodeId )
{	
	var template = {};
	template.page_title = jQuery("#page-options-title").val();
	template.page_description = jQuery("#page-options-description").val();
	template.page_keywords = jQuery("#page-options-keywords").val();
	template.page_tracking_code_head = jQuery("#page-options-head-code").val().replace(/<script>|<\/script>/g, "");
	template.page_tracking_code_body = jQuery("#page-options-body-code").val().replace(/<script>|<\/script>/g, "");
	
	template.highestNodeId = highestNodeId;
	
	var modules = [];
	
	jQuery("#templatebody .wplp-module-container").each(function(index){
		var $this = jQuery(this);
		var module = {};
		
		module.module_type = $this.data("module-type");
		module.module_id = $this.data("module-id");
		module.node_id = $this.data("id").replace("module-", "");
		
		var $targetModal = jQuery("#wplp-module-modal-"+module.node_id);
		
		$targetModal.find(".slider[data-property]").each(function(index){
			var $this = jQuery(this);
			var property_name = $this.data("property").replace(/-/g, "_");
			module[ property_name ] = $this.slider("value");
		});//each
		
		$targetModal.find(".spectrum-colorpicker[data-property], input[data-property], textarea[data-property]").each(function(index){
			var $this = jQuery(this);
			var property_name = $this.data("property").replace(/-/g, "_");
			module[ property_name ] = $this.val();
		});//each
	
		switch( module.module_type )
		{
			case "menu":				
				var nav_items = [];
				$targetModal.find(".wp-menu-links-listing li").each(function(index){
					var $this = jQuery(this);
					var nav_item = {};
					nav_item.label = $this.find(".labels").val();
					nav_item.link = $this.find(".links").val();
					nav_items.push( nav_item );
				});//each
				module.nav_items = nav_items;
				break;			
		}//switch()
	
		modules.push( module );
	});//each	
	
	template.modules = modules;
	return template;
}//getCurrentTemplateJSON()


function loadTemplateJSON(modulesInfo,html_data)
{
	
	var $loader = jQuery("#wplp-page-loader");
	$loader.fadeIn();
	jQuery("#page-options-title").val( modulesInfo.page_title );
	jQuery("#page-options-description").val( modulesInfo.page_description );
	jQuery("#page-options-keywords").val( modulesInfo.page_keywords );
	jQuery("#page-options-head-code").val( modulesInfo.page_tracking_code_head );
	jQuery("#page-options-body-code").val( modulesInfo.page_tracking_code_body );
		if(typeof(modulesInfo.modules)!="undefined"){	
			modulesInfo.modules.forEach(function( item, index ){

				var module_type = item.module_type;
				var module_id = item.module_id;
				var node_id = item.node_id;
				
				var  moduleObj = "";
				
				var capitalisedModuleType = module_type.replace(/\b\w/g, function(l){ return l.toUpperCase() });
					
				if( typeof window["get"+capitalisedModuleType] === "function")
					moduleObj = window["get"+capitalisedModuleType]( module_id, node_id, html_data[index]);

				if( moduleObj === "" )
					return;
				
				jQuery("#templatebody").append( moduleObj.module_html );
				jQuery("body").append( moduleObj.modal_html );
				var $targetModal = jQuery("#wplp-module-modal-"+node_id);
				initialiseModalSlidersAndColorPickers( $targetModal );
				
				$targetModal.find(".slider[data-property]").each(function(index){
					var $this = jQuery(this);
					var property_name = $this.data("property").replace(/\-/g, "_");
					$this.slider("value", item[property_name] );
				});//each .slider 
				
				$targetModal.find(".spectrum-colorpicker[data-property]").each(function(index){
					var $this = jQuery(this);
					var property_name = $this.data("property").replace(/\-/g, "_");
					$this.spectrum("set", item[property_name] );
				});//each .spectrum-colorpicker()
				
				$targetModal.find("input[data-property], textarea[data-property]").each(function(index){
					var $this = jQuery(this);
					var property_name = $this.data("property").replace(/\-/g, "_");
					$this.val( item[property_name] );
				});//each input, textarea
				
				//module specific stuff
				switch( module_type )
				{
					case "menu":
						var nav_items_string = '';
						var nav_items = item.nav_items;
						nav_items.forEach(function( item, index ){
							nav_items_string += '<li>'+
																	'<input type="text" class="labels" value="'+item.label+'">'+
																	'<input type="text" class="links" value="'+item.link+'">'+
																	'<span class="remove-nav-item"><i class="fa fa-times"></i></span>'+
																'</li>';
						});//forEach()
						$targetModal.find(".wp-menu-links-listing ul").html( nav_items_string );
						break;
				}//switch()
			});//forEach()
		}	
	
	
	$loader.fadeOut();
}//loadTemplateJSON()


function load_template_data(){
	jQuery(document).ready(function(){
	
		if(typeof(ajaxurl)=="undefined"){} else{
			var action = "get_template_data";	
			jQuery.getJSON(ajaxurl,{action:action}).done(function(data){
				all_templates = data;
			});
		}	
		

	});
	
}

function get_template_data(item,hook){
	var complete_path = ajaxurl.replace("wp-admin/admin-ajax.php","wp-content/plugins/wp-responsive-landing-pages/images/")
	var template_data = "";
	var find = 'images/';
	var re = new RegExp(find, 'g');
	jQuery.each(all_templates,function(){
	  if(this.module_name==item && this.hook==hook){
			
	     template_data = this.data.toString().replace(re, complete_path);
	  }
	});

	return template_data;
}

function get_template_id(data){
	 //for ID
	return data.replace(/<div[\s\S]*?id=["|']([\s\S]*?)["|'][\s\S]*/img, "$1");
	//for Class
	//result = subject.replace(/<[a-z]+[^>]*class=["|']([\s\S]*?)["|'][^>]*>([\s\S]*?)<\/[a-z]+>/img, "$1");
}

function get_updated_template_data(){
	var template_data =[];
	var block_num=0;
	jQuery(".wplp-module-container").each(function(){
		jQuery("#temp_ouput_data").html(jQuery(this).html());
		jQuery("#temp_ouput_data").find(".module-options").remove();
	 	jQuery('#temp_ouput_data').contents().find("[contenteditable='true']").each(function() {
			jQuery(this).removeAttr("contenteditable");
		});
	    	template_data[block_num]=jQuery("#temp_ouput_data").html();
	 	 block_num++;
	 	jQuery("#temp_ouput_data").html();
	});
	template_data = template_data.filter(function(v){return v!==''});
	return JSON.stringify(template_data);
}


function cretae_link_popover_content(ele_id){
	var readonly = "";
	var display = "block";
	if(jQuery("#"+ele_id).parent().parent(".social-network").length>0){
		readonly ="readonly";
		display = "none";
	}	

	var link = jQuery("#"+ele_id).attr("href");
	var text = jQuery("#"+ele_id).text();

	var style="";
	if(jQuery("#"+ele_id).hasClass("hero_get_access") || jQuery("#"+ele_id).hasClass("footer_get_access")){
		style="style='display:none'";
	}

	var link_textbox = '<input type="text" value="'+link+'" id="link_value" '+style+'>';
	var dataHtml = '<div id="link_form"><input type="text" value="'+text+'" id="text_value" '+readonly+' style="display:'+display+'">'+link_textbox+'<input type="button" value="save" id="link_save" data-link_id = "'+ele_id+'"></div>';
	return dataHtml;
}



function load_last_work(id){
	var action = "get_template_data";	
	var html_data = "";
	jQuery.getJSON(ajaxurl,{action:'get_last_work',post_id:id}).done(function(data){
			loadTemplateJSON(JSON.parse(data.settings),data.html);
	});
}



function remove_edittable(){
	jQuery('#wplp-layout-area').contents().find("[contenteditable]").each(function() {
    							jQuery(this).removeAttr("contenteditable");
							});
}

function create_image_popup(ele_id){
	var image_link = jQuery("#"+ele_id).attr('src');
	var image_url = jQuery("#"+ele_id).parent("a").attr("href");
	//return '<div id="link_form"><input type="text" value="'+image_link+'" id="image_link_'+ele_id+'"><input type="button" value="Change" id="image_save" data-link_id = "'+ele_id+'"></div>';
	var image_link_input = "";
	if(jQuery("#"+ele_id).parent("a").length!=0){
	var image_link_input = '<input type="text" value="'+image_url+'" id="image_url_'+ele_id+'">'
	}

	var html = '<div id="link_form"><input type="text" value="'+image_link+'" id="image_link_'+ele_id+'">'+image_link_input+'<input type="button" value="Change" id="image_save" data-link_id = "'+ele_id+'"></div>';
	


	return html;
}


function make_editable(unique_id,module_id){


	setTimeout(function(){ 

	var $ = jQuery.noConflict();

	var k = $("div["+unique_id+"]").children("div");

	$(k).find("p,h1,span,h2,h3,div,strong,li,ps").each(function(){
					 	$(this).click(function(e){
					 		remove_edittable()
					 		var no_edit = 1;
					 		if($(this).is("ps")){
					 			no_edit=0;
					 		}
					 		
					 		if($(this).is(".price")){
					 			console.log("found");
					 			no_edit=0;
					 		}

					 		if($(this).find('img:first').length>0){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("ul")){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("nav")){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("h1")){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("h2")){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("h3")){
					 			no_edit=0;
					 		}

					 		if($(this).children(":first").is("strong")){
					 			no_edit=0;
					 		}
					 		
					 		if($(this).children(":first").is(".title")){
					 			no_edit=0;
					 		}
					 		
					 		if($(this).children(":first").is(".best-price")){
					 			no_edit=0;
					 		}
					 		//basic-pricing
							if($(this).parent(".nav").length>0){
								no_edit=0;
							}
							
							if($(this).parent(".social-network").length>0){
								no_edit=0;
							}

							if($(this).attr("class")=="form-group"){
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

				if($(k).find("a").parent().parent(".navbar-nav").length==1){

				} else {
					if($(this).find('img:first').length==0){
					  $(this).attr('data-container','body');
					  $(this).attr('data-toggle','popover');
					  $(this).attr('data-placement','top');
					  
					  var ele_id = "editl_"+(Math.floor((Math.random() * 100000)));
					  $(this).attr('id',ele_id);
				
						var dataHtml = cretae_link_popover_content(ele_id);
					 	 $("#"+ele_id).popover({ html: true,content:dataHtml}).on("show.bs.popover", function(e){
			                // hide all other popovers
			                $("[rel=popover]").not(e.target).popover("destroy");
			                $(".popover").remove(); 
				               var item=0;
				                $("[data-toggle='popover']").each(function(){

				                	if(typeof($(this).attr("aria-describedby"))=="undefined"){} else{
					                	if(item==0){
					                		
					                		$("#"+$(this).attr("id")).trigger("click");
					                	}
					                	item++;
					                	
				                	}
				                });                   
	            		});
					}
				}		  				 	
			});


			$(k).find("img").each(function(){
				//if($(this).find('img:first').length==0){
				  $(this).attr('data-container','body');
				  $(this).attr('data-toggle','popover');
				  $(this).attr('data-placement','top');
				  
				  var ele_id = "editl_"+(Math.floor((Math.random() * 100000)));
				  $(this).attr('id',ele_id);
			
				var dataHtml = create_image_popup(ele_id);
				 	 $("#"+ele_id).popover({ html: true,content:dataHtml}).on("show.bs.popover", function(e){
		                // hide all other popovers
		                $("[rel=popover]").not(e.target).popover("destroy");
		                $(".popover").remove(); 
			               var item=0;
			                $("[data-toggle='popover']").each(function(){

			                	if(typeof($(this).attr("aria-describedby"))=="undefined"){} else{
				                	if(item==0){
				                		
				                		$("#"+$(this).attr("id")).trigger("click");
				                	}
				                	item++;
				                	
			                	}
			                });                   
            		});
				//}	
				

			});
	}, 500);		
}



function apply_css_changes(module,module_type,settings){
	var $ = jQuery.noConflict();
	common_style(module,settings);

	switch( module_type )
		{

			case "menu":
			//--------------- start code for menu ----------------	
				var text_color = $(settings).find("input[data-property='menu-text-color']").next(".sp-replacer").find(".sp-preview-inner").attr("style").split(":")[1].trim().replace(";","");
				var text_size = $(settings).find("div[data-property='menu-text-size']").next(".value").html();
				$(module).find("ul.navbar-nav li a").css("color",text_color);
				$(module).find("ul.navbar-nav li a").css("font-size",text_size+"px");
				update_menu_link(module,settings);
				
			break;
			
			var background_image =$(settings).find("input[data-property='background-image-url']").val(); 
			$(module).css("background-image",background_image);
			
			break;
			
			case "logo":
			break;
			case "features":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find(".heading-h2").css("color",heading_color);
			$(module).find(".heading-h2").css("font-size",heading_font_size+"px");
			
			break;
			case "quotes":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find("p").css("color",heading_color);
			$(module).find("p").css("font-size",heading_font_size+"px");;

			break;

			case "cta":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find("h3").css("color",heading_color);
			$(module).find("h3").css("font-size",heading_font_size+"px");
			$(module).find("#cta_name").attr("placeholder",$(settings).find("#cta_name_placeholder").val());
			$(module).find("#cta_email").attr("placeholder",$(settings).find("#cta_email_placeholder").val());

			break;

			case "faq":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find(".heading-h2").css("color",heading_color);
			$(module).find(".heading-h2").css("font-size",heading_font_size+"px");

			break;

			case "comments":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find("h2").css("color",heading_color);
			$(module).find("h2").css("font-size",heading_font_size+"px");
			
			var script_data = $(settings).find(".iframe-code").val();
			$(module).find(".faq-inner").html("");
			$(module).find(".faq-inner").html(script_data);

			break;

			case "footer":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find("p").css("color",heading_color);
			$(module).find("p").css("font-size",heading_font_size+"px");

			break;

			case "benefits":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find(".heading-h2").css("color",heading_color);
			$(module).find(".heading-h2").css("font-size",heading_font_size+"px");

			break;

			case "logos":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find(".title").css("color",heading_color);
			$(module).find(".title").css("font-size",heading_font_size+"px");

			break;

			case "pricing":
			var heading_color = $(settings).find("input[data-property='heading-text-color']").val();
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			var price_list = [$(settings).find("input[data-property='price-1']").val(), $(settings).find("input[data-property='price-2']").val(), $(settings).find("input[data-property='price-3']").val()];

			var price_num=0;	
			$(module).find(".price ps").each(function(){
				$(this).html(price_list[price_num]);
				price_num++;
			});
			$(module).find(".heading-h2").css("color",heading_color);
			$(module).find(".heading-h2").css("font-size",heading_font_size+"px");

			break;
			
			case "hero":
			var left_heading_color = $(settings).find("input[data-property='left-heading-text-color']").val();
			var left_para_color = $(settings).find("input[data-property='left-para-text-color']").val();
			var right_heading_color = $(settings).find("input[data-property='right-heading-text-color']").val();
			var right_para_color = $(settings).find("input[data-property='right-para-text-color']").val();
			
			$(module).find(".hero_left").find("h1").css("color",left_heading_color);
			$(module).find(".hero_left").find("p").css("color",left_para_color);
			
			$(module).find(".hero_right").find("h2").css("color",right_heading_color);
			$(module).find(".hero_right").find("p").css("color",right_para_color);
			$(module).find(".hero_right").find("span").css("color",right_para_color);
			
			var heading_font_size = $(settings).find("div[data-property='heading-text-size']").next(".value").html();
			$(module).find(".hero_left").find("h1").css("font-size",heading_font_size+"px");
			$(module).find(".hero_right").find("h2").css("font-size",heading_font_size+"px");
			
			var paragraph_text_size = $(settings).find("div[data-property='sub-heading-text-size']").next(".value").html();
			$(module).find(".hero_left").find("p").css("font-size",paragraph_text_size+"px");
			$(module).find(".hero_right").find("p").css("font-size",paragraph_text_size+"px");
			$(module).find(".hero_right").find("span").css("font-size",paragraph_text_size+"px");
			
			/*settings update for follow up form*/
			$(module).find(".hero_right").find("#follow-up-name").attr("placeholder", $(settings).find("#follow_up_name_placeholder").val());
			$(module).find(".hero_right").find("#follow-up-email").attr("placeholder", $(settings).find("#follow_up_email_placeholder").val());
			
			break;
			
			//comments


		}//switch()
}

function common_style(module,settings){
	var $ = jQuery.noConflict();

	//------------ code for margin ---------
	var margin_top = $(settings).find("div[data-property='margin-top']").next(".value").html();
	var margin_right = $(settings).find("div[data-property='margin-right']").next(".value").html();
	var margin_bottom = $(settings).find("div[data-property='margin-bottom']").next(".value").html();
	var margin_left = $(settings).find("div[data-property='margin-left']").next(".value").html();

	$(module).first().css("margin",""+margin_top+"px "+margin_right+"px "+margin_bottom+"px "+margin_left+"px");
	//------------ code for padding ---------
	var padding_top = $(settings).find("div[data-property='padding-top']").next(".value").html();
	var padding_right = $(settings).find("div[data-property='padding-right']").next(".value").html();
	var padding_bottom = $(settings).find("div[data-property='padding-bottom']").next(".value").html();
	var padding_left = $(settings).find("div[data-property='padding-left']").next(".value").html();

	$(module).first().css("padding",""+padding_top+"px "+padding_right+"px "+padding_bottom+"px "+padding_left+"px");

	//------------ code for border ---------
	var border_color = $(settings).find("input[data-property='border-color']").next(".sp-replacer").find(".sp-preview-inner").attr("style").split(":")[1].trim().replace(";","");
	var border_width = parseInt($(settings).find("div[data-property='border-width']").next(".value").html());
	$(module).first().css("border",""+border_width+"px solid "+border_color);
	
	///----------- background  color
	var background_color = $(settings).find("input[data-property='background-color']").next(".sp-replacer").find(".sp-preview-inner").attr("style").split(":")[1].trim().replace(";","");
	$(module).first().css("background-color",background_color);
}


//function for validate url
function validateUrl(value){
  return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}


function check_image_url(value){
	var cunnk = value.split(".");
	var extension = cunnk[cunnk.length-1];
	
	if(validateUrl(value) && (extension=="png" || extension=="jpg" || extension=="jpeg" || extension=="gif")){
		return 1;
	} else {
		return 0;
	}
}


function load_full_template(){
	//added_template=1;
	var module_counter = Math.floor(Math.random()*(900-500+1)+500);
	jQuery("#templatebody").html("");
	var module_list = ["menu","hero","logos","benefits","features","quotes","pricing","cta","faq","comments","footer"];
	for(i=0; i<module_list.length; i++){
		load_html_module(module_list[i],Math.floor(Math.random()*(900-500+1)+500));
	}
	setTimeout(function(){
		jQuery(".comments-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery(".menu-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery(".cta-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery(".hero-modals .nav-tabs").children("li:nth-child(2)").show();
		jQuery("#wplp-page-options-modal .nav-tabs").children("li:nth-child(2)").show();
		jQuery(".pricing-modals .nav-tabs").children("li:nth-child(2)").show();
	},250);
}

function load_html_module(moduleType,nodeId){
	var $ = jQuery.noConflict();
	var capitalisedModuleType = moduleType.replace(/\b\w/g, function(l){ return l.toUpperCase() });
			
	if( typeof window["get"+capitalisedModuleType] === "function")
		moduleObj = window["get"+capitalisedModuleType](0, nodeId );
	
	if( moduleObj === "" )
		return;
			
	$("#templatebody").append( moduleObj.module_html );
	$("body").append( moduleObj.modal_html );
	initialiseModalSlidersAndColorPickers( $("#wplp-module-modal-"+nodeId) );
	$("#wplp-module-modal-"+nodeId).find(".tab-pane").append('<button type="button" id="apply_css" class="btn btn-success">Update</button>');

	setTimeout(function(){
		jQuery(".comments-modals .nav-tabs").children("li:nth-child(2)").show();
	},500);

}



function update_menu_content(module_id){

	var $ = jQuery.noConflict();
	var html = "";
	$('div[data-id="module-'+module_id+'"]').find(".navbar-nav li a").each(function(){
	  	var link_text = $(this).html();
		var link_href = $(this).attr("href");
			html+='<li><input class="labels" value="'+link_text+'" type="text"><input class="links" value="'+link_href+'" type="text"><span class="remove-nav-item"><i class="fa fa-times"></i></span></li>';	
	});
	
	$("#menu-modal-content-"+module_id).find(".wp-menu-links-listing ul").html("");
	$("#menu-modal-content-"+module_id).find(".wp-menu-links-listing ul").html(html);

}

function update_menu_link(module,settings){

	
	var html = "";

	jQuery(settings).find(".wp-menu-links-listing ul li").each(function(){
	  var label = jQuery(this).find(".labels").val();
	  var link = jQuery(this).find(".links").val();
	  html+='<li><a href="'+link+'">'+label+'</a></li>';

	})
	jQuery(module).find(".navbar-nav").html(html);

	var text_color = jQuery(settings).find("input[data-property='menu-text-color']").next(".sp-replacer").find(".sp-preview-inner").attr("style").split(":")[1].trim().replace(";","");
	var text_size = jQuery(settings).find("div[data-property='menu-text-size']").next(".value").html();
	jQuery(module).find("ul.navbar-nav li a").css("color",text_color);
	jQuery(module).find("ul.navbar-nav li a").css("font-size",text_size+"px");
}
