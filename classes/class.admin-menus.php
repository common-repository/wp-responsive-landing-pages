<?php
class WP_Responsive_Landing_Pages_Admin_Menus
{
	public function __construct()
	{
		self::add_hooks();
	}
	 public static function add_hooks()
	{
		add_action('admin_menu', array(__CLASS__, 'add_menu_pages') );    
	   	add_action( 'admin_enqueue_scripts', array(__CLASS__, 'admin_custom_js') );
	  	add_action( 'admin_enqueue_scripts', array(__CLASS__, 'admin_custom_js') );
   	}
	public static function add_menu_pages(){ 
		global $wpdb;
		$lastrowId=$wpdb->get_col("SELECT max( ID)+1 as new_id FROM ".$wpdb->prefix."posts ORDER BY post_date DESC ");
		
		$submenu = add_submenu_page('wp-landing', 'View All', 'View All', 'manage_options','edit.php?post_type=landing-page', '' );
		$menu = add_menu_page('Landing pages', 'Landing pages', 'manage_options', 'wp-landing', array(__CLASS__, 'wp_landing_output') );
	 
		$submenu = add_submenu_page('wp-landing', 'Add new page', 'Add New', 'manage_options', 'admin.php?page=wp-landing&id=&id='.$lastrowId[0]);
	}
	
	public static function landing_pages(){
		include_once(WP_RESPONSIVE_LANDING_PAGES_DIR . 'view/admin/wp-landing-display.html');
	}
	public static function admin_custom_css()	
	{

	}
	public static function admin_custom_js($hook)	
	{  
		if ( 'toplevel_page_wp-landing' != $hook ) {
			//  return;
		}
		$wp_response_admin_page = sanitize_text_field($_REQUEST['page']);
		$wp_response_admin_post_type = sanitize_text_field($_REQUEST['post_type']);
		if(isset($wp_response_admin_page) && $wp_response_admin_page=="wp-landing"){	
			wp_enqueue_script( 'bootstrap-base-script', WP_RESPONSIVE_LANDING_PAGES_URL.'js/bootstrap.min.js' );
			wp_enqueue_script( 'spectrum', WP_RESPONSIVE_LANDING_PAGES_URL . 'js/admin/spectrum.js' );
			wp_enqueue_script( 'modules-json-script', WP_RESPONSIVE_LANDING_PAGES_URL . 'js/admin/modules-json.js', array('jquery-ui-sortable','jquery-ui-slider','jquery'));
			//============= Enque the variable in for 
			$translation_array = array('wp_responsive_landing_pages_image_path' =>WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH);
			wp_localize_script( 'modules-json-script', 'path', $translation_array );
			
			wp_enqueue_script( 'my_custom_script', WP_RESPONSIVE_LANDING_PAGES_URL . 'js/admin/wp-landing.js', array('jquery-ui-sortable','jquery'));
			 
			 
			wp_enqueue_style( 'boostrap-base-style', WP_RESPONSIVE_LANDING_PAGES_URL.'css/bootstrap.min.css');
			wp_enqueue_style( 'boostrap-theme-style', WP_RESPONSIVE_LANDING_PAGES_URL.'css/bootstrap-theme.min.css');
			wp_enqueue_style( 'font-awesome-style', WP_RESPONSIVE_LANDING_PAGES_URL . 'css/admin/font-awesome.min.css');
			wp_enqueue_style( 'spectrum', WP_RESPONSIVE_LANDING_PAGES_URL . 'css/admin/spectrum.css');
			wp_enqueue_style( 'backend-css', WP_RESPONSIVE_LANDING_PAGES_URL . 'css/custom.css');
			wp_enqueue_style( 'google-fonts-style', WP_RESPONSIVE_LANDING_PAGES_URL.'css/fonts/oswald.css');
			wp_enqueue_style( 'style-name', WP_RESPONSIVE_LANDING_PAGES_URL . 'css/admin/wp-landing.css');
			wp_enqueue_style( 'jquery-ui-style', WP_RESPONSIVE_LANDING_PAGES_URL .'css/jquery-ui.css');
		}
		if(isset($wp_response_admin_post_type) && $wp_response_admin_post_type=="landing-page"){
			wp_enqueue_script('my_custom_script',WP_RESPONSIVE_LANDING_PAGES_URL.'js/admin/listing.js');
		}
	}
	public static function wp_landing_output()		{
		$data = json_encode(cawplp_get_data());
		include_once( WP_RESPONSIVE_LANDING_PAGES_DIR . 'view/admin/wp-landing.php');
	}
}
new WP_Responsive_Landing_Pages_Admin_Menus;