<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$page_data	 	=	 json_decode(get_post_meta($post->ID,'settings',true));
$menu_data	 	= 	'';
$hero_data	 	=	'';
$featured_data	=	'';
$faq_data		=	'';
$html_data 		= 	get_post_meta($post->ID,'html_data',true);
 ?>
<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo $page_data->page_title;?></title>
	<?php if(isset($page_data->page_keywords)){ ?>
	<meta name="Keywords" content="<?php echo $page_data->page_keywords; ?>">
	<?php } ?>
	<?php if(isset($page_data->page_description)){ ?>
	<meta name="Description" content="<?php echo $page_data->page_description; ?>">
	<?php } ?>
	<link href="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>/css/admin/wp-landing.css" rel="stylesheet">
	<link href="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>/css/titillium.css" rel="stylesheet">
	<link href="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>/css/font-awesome.min.css" rel="stylesheet">
	<link href="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>css/custom.css" rel="stylesheet"> 
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	<script><?php echo get_post_meta($post->ID,'head_tracking_code',true); ?></script>
	<style type="text/css">
		.not_visible{        display:none;      }
	</style>
  </head>
	<body>
		<input type="hidden" id="page_id" value="<?php echo $post->ID; ?>">
		<?php $html_data = json_decode($html_data); ?>
		<?php if(count($html_data)>0){ ?>
			<?php foreach ($html_data as $blocks) { ?>
				<?php echo $blocks; ?>
			<?php  } ?>
		<?php } else { ?> 
			 <div class="alert alert-success" style="width:80%; margin-left:auto; margin-right:auto; clear:both; margin-top:25px;">Sorry there is no module is available for display.</div>
		<?php } ?> 
		<script type="text/javascript"> var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>"; </script>
		<script src="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>js/jquery.min.js"></script>
		<script src="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>js/bootstrap.min.js"></script>
		<script src="<?php echo WP_RESPONSIVE_LANDING_PAGES_URL;?>js/script.js"></script>
		<script><?php echo get_post_meta($post->ID,'body_tracking_code',true); ?></script>
	</body>
</html>