<?php
/*
Plugin Name: WP Responsive Landing Pages
Description: Landing page template framework with variant testing. 
Version: 2.0.0
Author: Thewpexperts
*/
if ( ! defined( 'ABSPATH' ) ) exit;
if(!class_exists('WP_Responsive_Landing_Pages'))
{
	class WP_Responsive_Landing_Pages
	{
		public function __construct()
		{	
			define('WP_RESPONSIVE_LANDING_PAGES_TABLE_NAME',"wpl_landing_pages");
			register_activation_hook( __FILE__,[ $this, 'installTables' ] );
			add_action( 'init', [$this, 'installTables']  );
			add_action( 'admin_init', [$this, 'add_meta_boxes' ] );
			add_action( 'save_post',  [$this, 'save_custom_fields'] );
			add_filter( 'post_row_actions', [$this,'remove_row_actions'], 10, 1 );
			add_filter( 'get_edit_post_link', [$this,'my_edit_post_link'], 10, 3 );
			add_filter( 'template_include', [$this, 'include_template_function'],99);
			add_action( 'init', [$this,'create_landing_pages'] );
			self::load_constants();
			self::load_files();
		}
		
		private static function load_constants()
		{
			global $wpdb;
			define('WP_RESPONSIVE_LANDING_PAGES_CURRENT_VERSION', '5.0.0');
			define('WP_RESPONSIVE_LANDING_PAGES_URL', plugins_url( '/' , __FILE__ ) );
			define('WP_RESPONSIVE_LANDING_PAGES_DIR', WP_PLUGIN_DIR.'/'.plugin_basename( dirname(__FILE__) ).'/' );
			define('WP_RESPONSIVE_LANDING_PAGES_TEMPLATE_TABLE' , $wpdb->prefix.'landing_pages_template' );
			define('WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH' , plugins_url('images/', __FILE__ ));

		}
		
		public function installTables(){
			global $wpdb;
			
			$charset_collate = $wpdb->get_charset_collate();
			$table_name = WP_RESPONSIVE_LANDING_PAGES_TABLE_NAME;
			if($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
				$table_name = $wpdb->prefix.'landing_pages';
				$sql = "Create table ".$table_name. "( Id int(11) NOT NULL AUTO_INCREMENT,
									Settings text NOT NULL,
									Time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL, 
									UNIQUE KEY Id (Id)
						)
						$charset_collate";
				 $wpdb->get_var($sql); 
			} 

			$template_table_name = WP_RESPONSIVE_LANDING_PAGES_TEMPLATE_TABLE;
			if($wpdb->get_var("SHOW TABLES LIKE '$template_table_name'") != $template_table_name) {
				$sql = "CREATE TABLE `".$template_table_name."` (
						`id` INT(11) NOT NULL AUTO_INCREMENT,
						`module_name` VARCHAR(100) NOT NULL,
						`hook` VARCHAR(100) NOT NULL,
						`data` TEXT NOT NULL,
						PRIMARY KEY (`id`)
						)
						$charset_collate";
				$wpdb->get_var($sql);
				// now need to insert defalt data
				$wpl_template_data = array(
									array( // row #0
										'id' => 1,
										'module_name' => 'menu',
										'hook' => 'menu-1',
										'data' => '<div class=\"header\" id=\"header\">\r\n <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n     <div class=\"logo\"><a href=\"#\"><img src=\"images\/logo.png\" alt=\"logo\"><\/a><\/div>\r\n    <\/div>\r\n    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 pull-right\">\r\n     <nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation<\/span>\r\n        <span class=\"icon-bar\"><\/span>\r\n        <span class=\"icon-bar\"><\/span>\r\n        <span class=\"icon-bar\"><\/span>\r\n      <\/button>\r\n    <\/div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\"#\">Link 1<\/a><\/li>\r\n        <li><a href=\"#\">Link 2<\/a><\/li>\r\n        <li><a href=\"#\">Link 3<\/a><\/li>\r\n        <li><a href=\"#\">Link 4<\/a><\/li>\r\n        <li><a href=\"#\">Link 5<\/a><\/li>\r\n        <li><a href=\"#\">Link 6<\/a><\/li>\r\n        <li><a href=\"#\">Link 7<\/a><\/li>\r\n      <\/ul>\r\n    <\/div><!-- \/.navbar-collapse -->\r\n  <\/div><!-- \/.container-fluid -->\r\n<\/nav>\r\n\r\n    <\/div>\r\n  <\/div>  \r\n <\/div>\r\n<\/div>',
									),
									array( // row #1
										'id' => 2,
										'module_name' => 'hero',
										'hook' => 'hero-1',
										'data' => '<div class=\"hero\" id=\"hero\">\r\n  <div class=\"container\">\r\n     <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n       <div class=\"hero_left\">\r\n       <h1><span>Flat and Clean<\/span> Landing Page Template<\/h1>\r\n       <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et. Sed rhoncus, montes! Nisi ec, duis sagittis nec, a et. Sed rhoncusUrna lectus phasellus montes porta mid. Eros non magna cras amet. Eros non magna cras amet.<\/p>\r\n       <a href=\"#\">More Info<\/a>\r\n       <\/div>\r\n      <\/div>\r\n      <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-12 pull-right\">\r\n       <div class=\"hero_right text-center\">\r\n        <h2>Join Us and Get Free Access For 15 Days!<\/h2>\r\n        <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta.<\/p>\r\n          <div class=\"form-group\">\r\n    \r\n    <input class=\"form-control\" placeholder=\"Name\" id=\"follow-up-name\" name=\"name\" type=\"text\">\r\n  <\/div>\r\n        <div class=\"form-group\">\r\n    \r\n    <input class=\"form-control\" placeholder=\"Email\" id=\"follow-up-email\" name=\"email\" type=\"text\">\r\n  <\/div>\r\n       <a href=\"javascript:WP_RESPONSIVE_LANDING_PAGES_send_hero_mail()\" class=\"hero_get_access\">Get Access<\/a>\r\n       <span>We will NEVER give or sell your information<\/span>\r\n       <\/div>\r\n      <\/div>\r\n     <\/div>\r\n   <\/div>\r\n<\/div>',
									),
									array( // row #2
										'id' => 3,
										'module_name' => 'logos',
										'hook' => 'logo-1',
										'data' => '<div class=\"featured\" id=\"featured\">\r\n\t<div class=\"container\">\r\n     <div class=\"row\">\r\n     \t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\r\n         <div class=\"title\">Featured In:<\/div>\r\n        <\/div>\r\n     <\/div>\r\n     <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n       <div class=\"featured-inner\">\r\n        <img src=\"images\/logo.png\" alt=\"featured logo\">\r\n       <\/div>\r\n      <\/div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n       <div class=\"featured-inner\">\r\n        <img src=\"images\/logo.png\" alt=\"featured logo\">\r\n       <\/div>\r\n      <\/div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n       <div class=\"featured-inner\">\r\n        <img src=\"images\/logo.png\" alt=\"featured logo\">\r\n       <\/div>\r\n      <\/div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n       <div class=\"featured-inner\">\r\n        <img src=\"images\/logo.png\" alt=\"featured logo\">\r\n       <\/div>\r\n      <\/div>\r\n     <\/div>\r\n   <\/div>\r\n<\/div>',
									),
									array( // row #3
										'id' => 4,
										'module_name' => 'benifits',
										'hook' => 'benifit-1',
										'data' => '<div class=\"benifits\" id=\"benifits\">\n  <div class=\"container\">\n     <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n         <div class=\"title\"><h2 class=\"heading-h2\">Awesome Benefits</h2>\n         <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis</p>\n         </div>\n        </div>\n     </div>\n     <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n       <div class=\"benifits-inner text-center\">\n        <img src=\"images/demo-img.jpg\" alt=\"benifits\">\n        <strong>Awesome Benifits</strong>\n        <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis</p>\n       </div>\n      </div>\n      \n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n       <div class=\"benifits-inner text-center\">\n        <img src=\"images/demo-img.jpg\" alt=\"benifits\">\n        <strong>Awesome Benifits</strong>\n        <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis</p>\n       </div>\n      </div>\n      \n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n       <div class=\"benifits-inner text-center\">\n        <img src=\"images/demo-img.jpg\" alt=\"benifits\">\n        <strong>Awesome Benifits</strong>\n        <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis</p>\n       </div>\n      </div>\n      \n     </div>\n   </div>\n</div>',
									),
									array( // row #4
										'id' => 5,
										'module_name' => 'features',
										'hook' => 'feature-1',
										'data' => '<div class=\"features\" id=\"features\">\n  <div class=\"container\">\n     <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n       <div class=\"features-left\">\n         <h2 class=\"heading-h2\">Amazing Features!</h2>\n         <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis</p>\n         <ul>\n           <li><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span><p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque!</p></li>\n           <li><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span><p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque!</p></li>\n           <li><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span><p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque!</p></li>\n         </ul>\n         <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis</p>\n       </div>\n      </div>\n      \n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n       <div class=\"features-right\">\n        <img src=\"images/567-500.jpg\" alt=\"features\" class=\"img-responsive\">\n       </div>\n      </div>\n      \n      </div>\n     </div>\n</div>',
									),
									array( // row #5
										'id' => 6,
										'module_name' => 'quote',
										'hook' => 'quote-1',
										'data' => '<div class=\"testimonial\" id=\"testimonial\">\n  <div class=\"container\">\n     <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n         <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, convallis ut interdum a, convallis ut interdum a, consequat sit amet mauris. Vivamus sed tincidunt enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, consectetur adipiscing elit. Vestibulum nibh neque,”</p>\n        <img src=\"images/150-150.png\" alt=\"testimonial\">\n        <strong>Jimmy Smith - Product Director</strong>\n      </div>\n      </div>\n     </div>\n</div>',
									),
									array( // row #6
										'id' => 7,
										'module_name' => 'price',
										'hook' => 'price-1',
										'data' => '<div class=\"pricing\" id=\"pricing\">\n\t<div class=\"container\">\n     <div class=\"row\">\n     \t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n         <div class=\"title\"><h2 class=\"heading-h2\">Our Pricing</h2>\n         <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis</p>\n         </div>\n        </div>\n     </div>\n     <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n      <span class=\"best-price\">Best Price</span>\n       <div class=\"pricing-inner text-center\">\n       <div class=\"price\"><span>$</span><ps>999</ps></div>\n        <div class=\"basic-pricing\">\n         <strong>Basic Pricing</strong>\n         <hr>\n         <ul>\n          <li>Clean Design</li>\n          <li>Intuitive </li>\n          <li>Responsive</li>\n          <li>Amazing Framwork</li>\n         </ul>\n         <a href=\"#\">Get Access</a>\n        </div>\n       </div>\n      </div>\n      \n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n      <span class=\"best-price\">Best Price</span>\n       <div class=\"pricing-inner text-center active\">\n       <div class=\"price\"><span>$</span><ps>999</ps></div>\n        <div class=\"basic-pricing\">\n         <strong>Basic Pricing</strong>\n         <hr>\n         <ul>\n          <li>Clean Design</li>\n          <li>Intuitive </li>\n          <li>Responsive</li>\n          <li>Amazing Framwork</li>\n         </ul>\n         <a href=\"#\">Get Access</a>\n        </div>\n       </div>\n      </div>\n      \n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n      <span class=\"best-price\">Best Price</span>\n       <div class=\"pricing-inner text-center\">\n       <div class=\"price\"><span>$</span><ps>999</ps></div>\n        <div class=\"basic-pricing\">\n         <strong>Basic Pricing</strong>\n         <hr>\n         <ul>\n          <li>Clean Design</li>\n          <li>Intuitive </li>\n          <li>Responsive</li>\n          <li>Amazing Framwork</li>\n         </ul>\n         <a href=\"#\">Get Access</a> \n        </div>\n       </div>\n      </div>\n      \n     </div>\n     <div class=\"row\">\n     <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\"> \n      <div class=\"payment-get\">\n       <a href=\"\"><img src=\"images/payment-1.jpg\"></a>\n       <a href=\"\"><img src=\"images/payment-2.jpg\"></a>\n       <a href=\"\"><img src=\"images/payment-3.jpg\"></a>\n       <a href=\"\"><img src=\"images/payment-4.jpg\"></a>\n       <a href=\"\"><img src=\"images/payment-5.jpg\"></a>\n      </div>\n      <p>Cuis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis\u0003</p>\n     </div>\n    </div>\n   </div>\n</div>',
									),
									array( // row #7
										'id' => 8,
										'module_name' => 'cta',
										'hook' => 'cta-1',
										'data' => '<div class=\"join-us\" id=\"join-us\">\n\n  <div class=\"container\">\n     <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n         <h3>Join Us And Get FREE Access For 15 Days!</h3>\n         <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis\u0003</p>\n         \n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n            <input class=\"form-control\" id=\"cta_name\" placeholder=\"Name\" type=\"text\">\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" id=\"cta_email\"  placeholder=\"Email\" type=\"text\">\n          </div>\n          <a href=\"javascript:WP_RESPONSIVE_LANDING_PAGES_process_cta()\" class=\"footer_get_access\">Get Access</a>\n        </form>\n      </div>\n      </div>\n     </div>\n  </div>',
									),
									array( // row #8
										'id' => 9,
										'module_name' => 'faq',
										'hook' => 'faq-1',
										'data' => '<div class=\"faq\" id=\"faq\">\r\n   <div class=\"container\">\r\n    <div class=\"row\">\r\n     \t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\r\n         <div class=\"title\"><h2 class=\"heading-h2\">FAQ<\/h2>\r\n         <\/div>\r\n        <\/div>\r\n     <\/div>\r\n     <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n       <div class=\"faq-inner\">\r\n        <strong>Urna lectus phasellus montes porta mid?<\/strong>\r\n        <p>Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis<\/p>\r\n       <\/div>\r\n      <\/div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n       <div class=\"faq-inner\">\r\n        <strong>Urna lectus phasellus montes porta mid?<\/strong>\r\n        <p>Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis<\/p>\r\n       <\/div>\r\n      <\/div>\r\n     <\/div>\r\n     <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n       <div class=\"faq-inner\">\r\n        <strong>Urna lectus phasellus montes porta mid?<\/strong>\r\n        <p>Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis<\/p>\r\n       <\/div>\r\n      <\/div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n       <div class=\"faq-inner\">\r\n        <strong>Urna lectus phasellus montes porta mid?<\/strong>\r\n        <p>Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta. Nec, duis sagittis nec, a et.estas pellentesque! Arcu tortor eros porta. Nec, duis sagittis<\/p>\r\n       <\/div>\r\n      <\/div>\r\n     <\/div>\r\n    <\/div>\r\n<\/div>',
									),
									array( // row #9
										'id' => 10,
										'module_name' => 'comment',
										'hook' => 'comment-1',
										'data' => '<div class=\"facebook\" id=\"facebook\">\r\n   <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\r\n         <div class=\"title\"><h2>Facebook Comments<\/h2>\r\n         <\/div>\r\n        <\/div>\r\n     <\/div>\r\n     <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n       <div class=\"faq-inner\">\r\n       <iframe src=\"https:\/\/www.facebook.com\/plugins\/comment_embed.php?href=https%3A%2F%2Fwww.facebook.com%2Fzuck%2Fposts%2F10102577175875681%3Fcomment_id%3D1193531464007751%26reply_comment_id%3D654912701278942&width=560&include_parent=false&height=136&appId\" width=\"100%\" height=\"136\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"><\/iframe>\r\n       <\/div>\r\n      <\/div>\r\n     <\/div>\r\n    <\/div>\r\n<\/div>',
									),
									array( // row #10
										'id' => 11,
										'module_name' => 'footer',
										'hook' => 'footer-1',
										'data' => '<div class=\"footer\" id=\"footer\">\r\n  <div class=\"container\">\r\n   <div class=\"row\">\r\n   \t<div class=\"col-md-12 text-center\">\r\n     <ul class=\"social-network social-circle\">\r\n       <li><a href=\"#\" target=\"_blank\" class=\"icoFacebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"><\/i><\/a><\/li>\r\n       <li><a href=\"#\" target=\"_blank\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fa fa-twitter\"><\/i><\/a><\/li>\r\n       <li><a href=\"#\" target=\"_blank\" class=\"icoGoogle\" title=\"Google +\"><i class=\"fa fa-google-plus\"><\/i><\/a><\/li>\r\n       <li><a href=\"#\" target=\"_blank\" class=\"icoLinkedin\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"><\/i><\/a><\/li>\r\n       <li><a href=\"#\" target=\"_blank\" class=\"icoGoogle\" title=\"Youtube\"><i class=\"fa fa-youtube\"><\/i><\/a><\/li>\r\n       <li><a href=\"#\" target=\"_blank\" class=\"icoLinkedin\" title=\"Instagram\"><i class=\"fa fa-instagram\"><\/i><\/a><\/li>\r\n     <\/ul>\t\t\t\t\r\n\t<\/div>\r\n   <\/div>\r\n   <div class=\"row\">\r\n   \t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\r\n     <p>Urna lectus phasellus montes porta mid. Eros non magna cras amet in egestas pellentesque! Arcu tortor eros porta..<\/p><\/div>\r\n   <\/div>\r\n  <\/div>\r\n<\/div>',
									),
								);
				foreach ($wpl_template_data as $data) {
					$data_sql = "INSERT INTO ".WP_RESPONSIVE_LANDING_PAGES_TEMPLATE_TABLE." (`module_name`, `hook`, `data`) VALUES ('".$data['module_name']."', '".$data['hook']."', '".$data['data']."')";
					$wpdb->get_var($data_sql); 
				}
			} 
		}
		
		function add_meta_boxes() {
			add_meta_box("wp_landing_page", "Extra Fields", array(__CLASS__, 'add_landing_page_meta_box') , "landing-page", "normal", "low");
		}
		public function add_landing_page_meta_box()
		{
			global $post;
			$custom = get_post_custom( $post->ID );
			?>
			<style>.width99 {width:99%;}</style>
			<p>
				<label><?php _e('Keywords:','wp-responsive-landing-pages'); ?></label><br />
				<textarea rows="5" name="keywords" class="width99"><?php echo $custom["keywords"][0] ?></textarea>
			</p>
			<p>
				<label><?php _e('Head Tracking Code:','wp-responsive-landing-pages'); ?></label><br />
				<textarea rows="5" name="head_tracking_code" class="width99"><?= $custom["head_tracking_code"][0] ?></textarea>
			</p>
			<p>
				<label><?php _e('Body Tracking Code:','wp-responsive-landing-pages'); ?></label><br />
				<textarea rows="5" name="body_tracking_code" class="width99"><?= $custom["body_tracking_code"][0] ?></textarea>
			</p>
			<?php
		}
		/**
		 * Save custom field data when creating/updating posts
		 */
		function save_custom_fields(){
			global $post;
			if ( $post )
			{
				if(isset($_POST["keywords"])){
					update_post_meta($post->ID, "keywords", sanitize_text_field($_POST["keywords"]));
				}
				if(isset($_POST["head_tracking_code"])){	
					update_post_meta($post->ID, "head_tracking_code", esc_html($_POST["head_tracking_code"]));
				}
				if(isset($_POST["body_tracking_code"])){
					update_post_meta($post->ID, "body_tracking_code", esc_html($_POST["body_tracking_code"]));
				}
			}
		}
		function remove_row_actions( $actions )
		{
			if( get_post_type() === 'landing-page' )
				unset( $actions['inline hide-if-no-js'] );
			return $actions; 
		}
		
		function create_landing_pages() {
			$slug 	= 	'landing-page';
			$add_new = '<a href="'.admin_url().'admin.php?page=wp-landing'.'">Add New</a>';
			register_post_type( 'landing-page',
				array(
					'labels' => array(
						'name' => __('Landing Pages', 'wp-responsive-landing-pages' ),
						'singular_name' => __('Landing Page', 'wp-responsive-landing-pages' ),
						'add_new' => __('Add New',  'wp-responsive-landing-pages' ),
						'add_new_item' =>  __('Add New Landing Page' , 'wp-responsive-landing-pages' ),
						'edit' => 'Edit',
						'edit_item' =>  __('Edit Landing Page' , 'wp-responsive-landing-pages' ),
						'new_item' =>  __('New Landing Page' , 'wp-responsive-landing-pages' ),
						'view' => 'View',
						'view_item' => __('View Landing Page' , 'wp-responsive-landing-pages' ),
						'search_items' => __('Search Landing Page' , 'wp-responsive-landing-pages' ),
						'not_found' =>  __('Nothing found' , 'wp-responsive-landing-pages' ),
						'not_found_in_trash' => __('Nothing found in Trash' , 'wp-responsive-landing-pages' ),
						'parent' => 'Parent Landing Page'
					),
					'public' => true,
					'show_in_menu' => false,
					'supports' => array( 'title', 'editor', 'comments', 'thumbnail', 'custom-fields' ),
					'taxonomies' => array( '' ),
					'publicly_queryable' => true,
					'show_ui' => true,
					'query_var' => true,
					'capability_type' => 'post',
					'rewrite' => array("slug" => "$slug", 'with_front' => false),
					//  'capability_type' => array('landing_page','landing_pages'),
					'map_meta_cap' => true,
					'hierarchical' => false
				)
			);
			flush_rewrite_rules();
		}

		function include_template_function( $template_path ) {
			global $post;
			if (is_singular('landing-page')) {
				// checks if the file exists in the theme first,
				// otherwise serve the file from the plugin
				if ( $theme_file = locate_template( array ( 'single-landing-page.php' ) ) ) {
					$template_path = $theme_file;
				} else {
					$template_path = plugin_dir_path( __FILE__ ) . 'single-landing-page.php';
				}
				//echo $template_path;
			}
			return $template_path;
		}
		
		function my_edit_post_link( $url, $post_id, $context )
		{
			if( get_post_type() === 'landing-page' )
				$url = 'admin.php?page=wp-landing&id='.$post_id;
			return $url;
		}
		private static function load_files()
		{
			switch (is_admin()) :
				case true :
					/* loads admin files */
					include_once( WP_RESPONSIVE_LANDING_PAGES_DIR . 'classes/class.admin-menus.php');
					include_once( WP_RESPONSIVE_LANDING_PAGES_DIR . 'classes/class.post-type.wp-landing-page.php');
					break;
				case false :
					break;
			endswitch;
		}
		/**
		 * Admin notices, collected and displayed on proper action
		 *
		 * @var array
		 */
		public static $notices = array();

		/**
		 * Whether the current PHP version meets the minimum requirements
		 *
		 * @return bool
		 */
		public static function is_valid_php_version() {
			return version_compare( PHP_VERSION, '5.3', '>=' );
		}

		/**
		 * Invoked when the PHP version check fails. Load up the translations and
		 * add the error message to the admin notices
		 */
		static function fail_php_version() {
			//add_action( 'plugins_loaded', array( __CLASS__, 'load_text_domain_init' ) );
			$plugin_url	= admin_url( 'plugins.php' );
			self::notice( __( 'WP Landing Pages requires PHP version 5.3+ to run. Your version '.PHP_VERSION.' is not high enough.<br><u>Please contact your hosting provider</u> to upgrade your PHP Version.<br>The plugin is NOT Running. You can disable this warning message by <a href="'.$plugin_url.'">deactivating the plugin</a>', 'wp-responsive-landing-pages' ) );
		}

		/**
		 * Handle notice messages according to the appropriate context (WP-CLI or the WP Admin)
		 *
		 * @param string $message
		 * @param bool $is_error
		 * @return void
		 */
		public static function notice( $message, $is_error = true ) {
			if ( defined( 'WP_CLI' ) ) {
				$message = strip_tags( $message );
				if ( $is_error ) {
					WP_CLI::warning( $message );
				} else {
					WP_CLI::success( $message );
				}
			} else {
				// Trigger admin notices
				add_action( 'all_admin_notices', array( __CLASS__, 'admin_notices' ) );

				self::$notices[] = compact( 'message', 'is_error' );
			}
		}

		/**
		 * Show an error or other message in the WP Admin
		 *
		 * @action all_admin_notices
		 * @return void
		 */
		public static function admin_notices() {
			foreach ( self::$notices as $notice ) {
				$class_name   = empty( $notice['is_error'] ) ? 'updated' : 'error';
				$html_message = sprintf( '<div class="%s">%s</div>', esc_attr( $class_name ), wpautop( $notice['message'] ) );
				echo wp_kses_post( $html_message );
			}
		}
		/* END PHP VERSION CHECKS */
	}
   
	/* Initiate Plugin */
	if ( WP_Responsive_Landing_Pages::is_valid_php_version() )
	{
		$GLOBALS['WP_Responsive_Landing_Pages'] = new WP_Responsive_Landing_Pages;
	}
	else
	{
		WP_Responsive_Landing_Pages::fail_php_version();
	}
}
	
	add_action("wp_ajax_nopriv_cawplp_save_url", "cawplp_save_url");  
	add_action("wp_ajax_cawplp_save_url", "cawplp_save_url");
	function cawplp_save_url(){
		if(!empty($_REQUEST['id'])){
			$landing_post = array(
				'ID'           => (int)sanitize_text_field($_REQUEST['id']),
				'post_type'     => 'landing-page',		
				'post_name'     => sanitize_text_field( $_REQUEST['post_name'] ),
			);
			// Update the post into the database
  			$ID 			= 	wp_update_post( $landing_post );
  			$post_url 	= 	get_permalink($landing_post['ID']);
  			$post_info 	= 	get_post($landing_post['ID']);
  			echo $post_info->post_name;
		}
		exit;
	}
	add_action("wp_ajax_nopriv_cawplp_save_data", "cawplp_save_data");  
	add_action("wp_ajax_cawplp_save_data", "cawplp_save_data");
	function cawplp_save_data()
	{   
		global $wpdb;
		$settings_data= $_REQUEST['value'];
		unset($settings_data['page_tracking_code_head']);
		unset($settings_data['page_tracking_code_body']);
		$dataArray = array(
			'ID'           => (int)sanitize_text_field($_REQUEST['update_id']),
			'post_type'     => 'landing-page',		
			'post_title'    => sanitize_text_field( $_REQUEST['value']['page_title'] ),
			'post_name'       => sanitize_text_field($_REQUEST['url_link']),
			'post_content'  => sanitize_text_field($_REQUEST['value']['page_description']),
			'post_status'   => sanitize_text_field($_REQUEST['status']),
			'keywords'   => sanitize_text_field($_REQUEST['value']["page_keywords"]),
			'post_author'   => 1,
			'html_data'   => esc_js($_REQUEST['html_data']),
			'settings_data'   => esc_js(wp_json_encode($settings_data)),

		);

		if(!empty($dataArray['ID'])){
			if(get_post_status($dataArray['ID'])=="publish"){
				$dataArray['post_status'] = get_post_status($dataArray['ID']);
			}
			// Update the post into the database
  			$post_ID = wp_update_post( $dataArray );
		 	if ( $post_ID )
		  	{	if(!empty($dataArray['keywords'])){
					update_post_meta($post_ID, "keywords", $dataArray['keywords']);
				}
				if(!empty($_REQUEST['value']["page_tracking_code_head"])){
					update_post_meta($post_ID, "head_tracking_code", esc_html($_REQUEST['value']["page_tracking_code_head"]));
				}
				if(!empty($_REQUEST['value']["page_tracking_code_body"])){
					update_post_meta($post_ID, "body_tracking_code", esc_html($_REQUEST['value']["page_tracking_code_body"]));
				}
				if(!empty($_REQUEST['value'])){
					update_post_meta($post_ID, "settings", html_entity_decode($dataArray['settings_data']));
				}

				update_post_meta($post_ID, "html_data",html_entity_decode($dataArray['html_data']));
		  	}
		} else {
				// Insert the post into the database
				$post_ID = wp_insert_post( $dataArray );
				if($post_ID){
					if(!empty($dataArray['keywords'])){
						update_post_meta($post_ID, "keywords", $dataArray['keywords']);
					}
					if(!empty($_REQUEST['value']["page_tracking_code_head"])){
						update_post_meta($post_ID, "head_tracking_code", esc_html($_REQUEST['value']["page_tracking_code_head"]));
					}
					if(!empty($_REQUEST['value']["page_tracking_code_body"])){
						update_post_meta($post_ID, "body_tracking_code", esc_html($_REQUEST['value']["page_tracking_code_body"]));
					}
					if(!empty($_REQUEST['value'])){
						update_post_meta($post_ID, "settings", html_entity_decode($dataArray['settings_data']));
					}

					update_post_meta($post_ID, "html_data", html_entity_decode($dataArray['html_data']));
				}
		}
		echo json_encode(array('status' => '1', 'post_id' => $post_ID));
	 	exit();	
	}//cawplp_save_data()
	
	add_action("wp_ajax_nopriv_cawplp_get_data", "cawplp_get_data");  
	add_action("wp_ajax_cawplp_get_data", "cawplp_get_data");
	function cawplp_get_data()
	{   
		global $wpdb;
		$data_values 		= 	array();
		$requested_id 				= 	(int)sanitize_text_field($_REQUEST['id']);
		$page_data['keywords']="";
		$page_data['head_tracking_code']="";
		$page_data['body_tracking_code']="";
		$page_data['settings']="";
		$page_data['post_data']="";
		if(isset($requested_id)){
			$page_data['keywords'] .=  get_post_meta($requested_id,'keywords',true);
			$page_data['head_tracking_code'] .=  get_post_meta($requested_id,'head_tracking_code',true);
			$page_data['body_tracking_code'] .=  get_post_meta($requested_id,'body_tracking_code',true);
			$page_data['settings'] .=  get_post_meta($requested_id,'settings',true);
			$page_data['post_data'] = get_post($requested_id);
			$data_values = $page_data;
		}
		return $data_values;
		//exit();
	}
	add_action("wp_ajax_ca_wplandingpages_send_hero_mail", "ca_wplandingpages_send_hero_mail");
	add_action("wp_ajax_nopriv_ca_wplandingpages_send_hero_mail", "ca_wplandingpages_send_hero_mail");
	function ca_wplandingpages_send_hero_mail()
	{
		$to = "";
		$subject= "";
		$data = json_decode(get_post_meta(sanitize_text_field($_POST['page_id']),'settings',true));
		foreach ($data->modules as $module_details) {
			if($module_details->node_id ==sanitize_text_field($_POST['node_id'])){
				$to		  = 	$module_details->follow_up_recepient_email;
				$subject   = 	$module_details->follow_up_email_subject;
			}	
		}
		//now sending mail
		$body = __('Hello,','wp-responsive-landing-pages').' <br><br>'.__(' A visitor want to contact to you there details are below.','wp-responsive-landing-pages').'<br><br>';
		$body .= '<strong>'.__('Name:','wp-responsive-landing-pages').' </strong>'.sanitize_text_field($_POST['name']).'<br>';
		$body .= '<strong>'.__('Email:').' </strong>'.sanitize_text_field($_POST['email']).'<br>';
		$headers = array('Content-Type: text/html; charset=UTF-8');
		wp_mail( $to, $subject, $body, $headers );
		echo 1;
		die;
	}
	
	add_action("wp_ajax_ca_wplandingpages_send_cta_mail", "ca_wplandingpages_send_cta_mail");
	add_action("wp_ajax_nopriv_ca_wplandingpages_send_cta_mail", "ca_wplandingpages_send_cta_mail");
	function ca_wplandingpages_send_cta_mail()
	{
		$to = "";
		$subject= "";
		$data = json_decode(get_post_meta((int)sanitize_text_field($_POST['page_id']),'settings',true));
		foreach ($data->modules as $module_details) {
			
			if($module_details->node_id ==sanitize_text_field($_POST['node_id'])){
				$to = $module_details->follow_up_recepient_email;
				$subject = $module_details->follow_up_email_subject;
			}	
		}
		//now sending mail
		$body = __('Hello,','wp-responsive-landing-pages').' <br><br>'.__(' A visitor want to contact to you there details are below.','wp-responsive-landing-pages').'<br><br>';
		$body .= '<strong>'.__('Name:','wp-responsive-landing-pages').' </strong>'.sanitize_text_field($_POST['name']).'<br>';
		$body .= '<strong>'.__('Email:','wp-responsive-landing-pages').' </strong>'.sanitize_text_field($_POST['email']).'<br>';
		$headers = array('Content-Type: text/html; charset=UTF-8');
		wp_mail( $to, $subject, $body, $headers );
		echo 1;
		die;
	}

	
	add_action("wp_ajax_get_template_data", "get_template_data"); //for public usage
	//add_action("wp_ajax_nopriv_get_template_data", "get_template_data"); // for restrict usage
	function get_template_data() {
		global $wpdb;
		$get_data 	= 	"SELECT module_name,hook,data FROM ".WP_RESPONSIVE_LANDING_PAGES_TEMPLATE_TABLE;
		$posts 	= 	$wpdb->get_results($get_data, ARRAY_A);
		echo json_encode($posts);
		die;
	}
	add_action("wp_ajax_get_last_work", "get_last_work"); //for public usage
	function get_last_work() {
		global $wpdb;
		$complete_data 			= 	array();
		$requested_id 			= 	(int)sanitize_text_field($_REQUEST['post_id']);
		$complete_data['html'] 	=	 json_decode(get_post_meta($requested_id,'html_data',true));
		$complete_data['settings'] = 	get_post_meta($requested_id,'settings',true);
		echo json_encode($complete_data);
		die;
	}
	add_action("wp_ajax_get_url", "get_url"); //for public usage
	function get_url() {
		$requested_id = (int)sanitize_text_field($_REQUEST['post_id']);
		echo get_post_permalink($requested_id);
		die;
	}
	add_filter( 'manage_edit-landing-page_columns', 'my_edit_landing_page' ) ;
	function my_edit_landing_page( $columns ) {
		$columns = array(
			'cb' => '<input type="checkbox" />',
			'title' => __( 'Name' ),
			'url' => __( 'URL' ),
			'date' => __( 'Date' )
		);
		return $columns;
	}
	add_action( 'manage_landing-page_posts_custom_column', 'landing_page_columns', 10, 2 );
	function landing_page_columns( $column, $post_id ) {
		global $post;
		switch( $column ) {
			/* If displaying the 'Director' column. */
			case 'url' :
					echo get_permalink($post_id);
				 break;
			case 'date' :
			default :
				break;
		}
	}
?>