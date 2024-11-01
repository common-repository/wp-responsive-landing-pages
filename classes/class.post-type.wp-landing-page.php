<?php
if ( !class_exists('WP_Responsive_Landing_Pages_Post_Type') )
{
	class WP_Responsive_Landing_Pages_Post_Type
	{
		function __construct()
		{  
			self::load_hooks();      
		}
		private function load_hooks()
		{
                 }

		/**
		 * register post type
		 */
		public static function register_data()
		{
		   
		}

		/**
		 * Register landing page taxonomies
		 */
		public static function register_taxonomies() {
			$args = array(
				'hierarchical' => true,
				'label' => __("Categories", 'landing-page'),
				'singular_label' => __("Landing Page Category",
				'landing-pages'),
				'show_ui' => true,
				'query_var' => true,
				"rewrite" => true
			);
			register_taxonomy( 'wp_landing_page_category', array('landing-page'), $args);
		}
	}
	new WP_Responsive_Landing_Pages_Post_Type();
}
