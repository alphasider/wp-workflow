<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
          <div class="col-12">
            <div class="rounded_panel news_block amput">
              <h2><a href="<?php the_permalink(); ?>"><?php echo $product->name; ?></a></h2>
              <div class="row">
                <div class="col-12 col-sm-4 col-lg-3">
                  <div class="date"><?php echo get_the_date('F j, Y');?></div>
                  <div class="comment noborder"><?php comments_number(); ?></div>
                </div>
                <div class="col-12 col-sm-8 col-lg-6">
                  <div class="excerpt">
                    <?php echo substr(apply_filters( 'woocommerce_short_description', $post->post_excerpt ),0, 130).''; ?>
                  </div>
                </div>
                <div class="col-12 col-lg-3 btn_place">
                  <a href="<?php the_permalink(); ?>" class="button">Continue Reading</a>
                </div>
              </div>
            </div>
          </div>