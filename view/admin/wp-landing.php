<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div id="wplp-page-loader">
	<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>/loading-100x100.png" alt="loading..." />
</div>
<div id="wplp-modules-container"><div>
<?php $post_data = json_decode($data); ?>
</div>
	<textarea id="wplp-saved-json" class="hidden"><?php print_r($data); ?></textarea>
	<input id="plugin_images_folder" type="hidden" value="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>" />	
	<ul class="nav nav-tabs">
		<li class="active"><a href="#templates" data-toggle="tab"><?php _e('Templates','ll'); ?></a></li>
		<li><a href="#modules" data-toggle="tab"><?php _e('Modules','wp-responsive-landing-pages'); ?></a></li>
	</ul>
	<div class="tab-content">
		<div class="tab-pane" id="modules">
			<ul class="nav nav-tabs">
				<li class="active"><a href="#wplp-modules-menu" data-toggle="tab"> <?php _e('Menu','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-hero" data-toggle="tab"> <?php _e('Hero','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-logos" data-toggle="tab"> <?php _e('Logos','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-benefits" data-toggle="tab"> <?php _e('Benefits','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-features" data-toggle="tab"> <?php _e('Features','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-quotes" data-toggle="tab"> <?php _e('Quotes','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-pricing" data-toggle="tab"> <?php _e('Pricing','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-cta" data-toggle="tab"> <?php _e('CTA','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-faq" data-toggle="tab"> <?php _e('FAQ','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-comments" data-toggle="tab"> <?php _e('Comments','wp-responsive-landing-pages'); ?></a></li>
				<li><a href="#wplp-modules-footer" data-toggle="tab"> <?php _e('Footer','wp-responsive-landing-pages'); ?></a></li>
			</ul>
			<div class="tab-content">
				<div class="tab-pane active wp-modules" id="wplp-modules-menu">
					<div class="menu-options wp-module-options" data-module-id="1" data-module-type="menu">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>/template-modules/template-1/menu/menu-1.jpg" alt="Menu 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-menus -->
				<div class="tab-pane wp-modules" id="wplp-modules-hero">
					<div class="hero-options wp-module-options" data-module-id="1" data-module-type="hero">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/hero/hero-1.jpg" alt="Hero 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-hero -->
				<div class="tab-pane wp-modules" id="wplp-modules-logos">
					<div class="logos-options wp-module-options" data-module-id="1" data-module-type="logos">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/logos/logos-1.jpg" alt="logos 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-logos -->
				<div class="tab-pane wp-modules" id="wplp-modules-benefits">
					<div class="benefits-options wp-module-options" data-module-id="1" data-module-type="benefits">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/benefits/benefits-1.jpg" alt="Benefits 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-benefits -->
				<div class="tab-pane wp-modules" id="wplp-modules-features">
					<div class="features-options wp-module-options" data-module-id="1" data-module-type="features">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/features/features-1.jpg" alt="features 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-features -->
				<div class="tab-pane wp-modules" id="wplp-modules-quotes">
					<div class="quotes-options wp-module-options" data-module-id="1" data-module-type="quotes">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/quotes/quotes-1.jpg" alt="quotes 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-logos -->
				<div class="tab-pane wp-modules" id="wplp-modules-pricing">
					<div class="pricing-options wp-module-options" data-module-id="1" data-module-type="pricing">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/pricing/pricing-1.jpg" alt="pricing 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-pricing -->
				<div class="tab-pane wp-modules" id="wplp-modules-cta">
					<div class="cta-options wp-module-options" data-module-id="1" data-module-type="cta">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/cta/cta-1.jpg" alt="cta 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-cta -->
				<div class="tab-pane wp-modules" id="wplp-modules-faq">
					<div class="faq-options wp-module-options" data-module-id="1" data-module-type="faq">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/faq/faq-1.jpg" alt="faq 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-faq -->
				<div class="tab-pane wp-modules" id="wplp-modules-comments">
					<div class="comments-options wp-module-options" data-module-id="1" data-module-type="comments">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH ?>template-modules/template-1/comments/comments-1.jpg" alt="comments 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-comments -->
				<div class="tab-pane wp-modules" id="wplp-modules-footer">
					<div class="footer-options wp-module-options" data-module-id="1" data-module-type="footer">
						<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>template-modules/template-1/footer/footer-1.jpg" alt="footer 1" />
						<div class="overlay"><i class="fa fa-plus-square"></i></div>
					</div>
				</div><!-- #wplp-modules-footer -->
			</div>
		</div><!--#modules-->
		<div class="tab-pane active" id="templates">
			<h2> <?php _e('Templates','ca_wplandingpage'); ?></h2>
				<div class="wp-template-options">
					<img src="<?php echo WP_RESPONSIVE_LANDING_PAGES_IMAGE_PATH; ?>/template-modules/template-1/complete.jpg">
					<div class="overlay"><i class="fa fa-plus-square load_complete_template"></i></div>
				</div>


		</div>
	</div><!--.tab-content-->
</div><!-- #wplp-modules-container -->
<div id="wplp-save-toolbar">
	<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
		<?php 
			$wp_responsive_receiving_id = sanitize_text_field($_GET['id']);
			$old_post_data = get_post($wp_responsive_receiving_id);
			if(isset($wp_responsive_receiving_id) &&  isset($old_post_data)){
				$link = $old_post_data->post_name;
			} else {
				$link = 'landing-'.uniqid(); 
			}
			$wp_responsive_current_page = site_url("landing-page/".$link);
		?>

		<div class="btn-group" role="group" aria-label="First group">
			<button type="button" class="btn btn-secondary btn-warning" data-toggle="modal" data-target="#wplp-page-options-modal"><i class="fa fa-gear"></i></button>
			<!-- <button type="button" class="btn btn-secondary btn-warning"><i class="fa fa-tv"></i></button> -->

			<a href="javascript:void(0)" onClick='window.open("<?php echo $wp_responsive_current_page; ?>", "", "width=1280,height=800")' class="btn btn-secondary btn-warning"><i class="fa fa-tv"></i></a>
			<a href="javascript:void(0)" onClick='window.open("<?php echo $wp_responsive_current_page; ?>", "", "width=1024,height=675")'  class="btn btn-secondary btn-warning"><i class="fa fa-tv"></i></a>
			<a href="javascript:void(0)" onClick='window.open("<?php echo $wp_responsive_current_page; ?>", "", "width=320,height=480")' class="btn btn-secondary btn-warning"><i class="fa fa-mobile"></i></a>
		</div>
		<div class="btn-group search_box" role="group" aria-label="Second group" >
			<div class="row">
				<div class="col-md-6" style="margin-top:10px;"><?php echo site_url().'/'."landing-page/";?></div>
				<div class="col-md-4"><input type="text" value="<?php echo $link; ?>" name="link_url_data" id="link_url_data" readonly class="update_url" /></div>
				<div class="col-md-2"><button type="button" class="btn btn-secondary btn-success" id="update-url"><?php _e('Update Url','wp-responsive-landing-pages'); ?></button>
				</div>
			</div>
		</div>
		<div class="btn-group pull-right" role="group" aria-label="Third group">
			<span id="preview_link">
				<?php if(isset($wp_responsive_receiving_id) &&  isset($old_post_data)){ ?>
					<button type="button" style="margin-right:5px;" class="btn btn-secondary btn-success" id="template_preview" name="preview"><?php _e('Preview','wp-responsive-landing-pages'); ?></button>
				<?php } ?>
			</span>
			<?php if(!empty($wp_responsive_receiving_id)){ ?>
				<input type="hidden" id="post_name" value="<?php echo $wp_responsive_receiving_id; ?>">
				<?php } else { ?>
				<input type="hidden" id="post_name" value="">
				<?php } ?>
				<button type="button" class="btn btn-secondary btn-success" id="draft-template-button" name="draft"> <?php _e('Draft','wp-responsive-landing-pages'); ?></button>
			<?php if(!empty($wp_responsive_receiving_id)){
				echo '<input type="hidden" id="update_id" value="'.$wp_responsive_receiving_id.'"><button type="button" class="btn btn-secondary btn-success" id="save-template-button" name="publish">Update/Publish</button>';
				} else {
					echo '<input type="hidden" id="update_id" value=""><button type="button" class="btn btn-secondary btn-success" id="save-template-button" name="publish">Publish</button>';
				 } ?>
		</div>
	</div>
</div><!-- #save-toolbar -->
<h2> <?php _e('Your landing page','wp-responsive-landing-pages'); ?></h2>
<div id="wplp-layout-area">
	<div  id="templatebody" class="container-fluid template1"><p><br></p></div>
</div>
<div id="wplp-page-options-modal" class="modal fade">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
				<ul class="nav nav-tabs">
					<li class="active"><a href="#page-options-seo" data-toggle="tab"><?php _e('SEO','wp-responsive-landing-pages'); ?></a></li>
					<li><a href="#page-options-analytics" data-toggle="tab"><?php _e('Analytics','wp-responsive-landing-pages'); ?></a></li>
				</ul>
			</div>
			<div class="modal-body">
				<div class="tab-content container-fluid">
					<div class="tab-pane active" id="page-options-seo">
						<div class="row">
							<label for="page-options-title"><?php _e('Page Title','wp-responsive-landing-pages'); ?></label>
							<input type="text" name="page-options-title" id="page-options-title" value="" />
						</div><!--.row-->
								
						<div class="row">
							<label for="page-options-description"><?php _e('Page Description','wp-responsive-landing-pages'); ?></label>
							<textarea name="page-options-description" id="page-options-description" value=""></textarea>
						</div><!--.row-->
						
						<div class="row">
							<label for="page-options-keywords"><?php _e('Page Keywords','wp-responsive-landing-pages'); ?></label>
							<input type="text" name="page-options-keywords" id="page-options-keywords" value="" />
							<small><?php _e('Separate keywords by commas','wp-responsive-landing-pages'); ?></small>
						</div><!--.row-->
					</div><!-- #page-options-seo -->
					<div class="tab-pane" id="page-options-analytics">
						<div class="row">
							<p><?php _e('This section enables your ability to gather data by pasting tracking code from the analytics service provider of your choice. (i.e. Google Analytics, Visual Website Optimizer, etc.)','wp-responsive-landing-pages'); ?>
							</p>
						</div>
						
						<div class="row">
							<label for="page-options-head-code"><?php _e('Head Section Tracking Code','wp-responsive-landing-pages'); ?></label>
							<textarea name="page-options-head-code" id="page-options-head-code"></textarea>
							<p>Paste javscript code without &ltscript&gt tag</p>
						</div><!--.row-->
								
						<div class="row">
							<label for="page-options-body-code"> <?php _e('Body Section Tracking Code','wp-responsive-landing-pages'); ?></label>
							<textarea name="page-options-body-code" id="page-options-body-code"></textarea>
							<p>Paste javscript code without &ltscript&gt tag</p>
						</div><!--.row-->
					</div><!-- #page-options-analytics -->
				</div><!-- .tab-content -->
			</div>
		</div>
	</div>
</div><!-- #wplp-page-options-modal -->
<div id="temp_ouput_data" style="display:none"></div>
<script type="text/javascript">
<?php if(!empty($wp_responsive_receiving_id)){ ?>
load_last_work(<?php echo (int)$wp_responsive_receiving_id; ?>);
<?php } ?>
</script>