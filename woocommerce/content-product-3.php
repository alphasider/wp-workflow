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
         
            <div class="row catalog_row">
              <div class="col-12 col-lg-6 catalog_img">
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-5">
                    <a href="<?php the_permalink(); ?>">
                      <?php if(has_post_thumbnail()): ?>
                        <?php the_post_thumbnail();?>
                      <?php else:?>
                        <img src="<?php echo IMG;?>/default-1.png" alt="">
                     <?php endif;?>
                    </a>
                  </div>
                  <div class="col-12 col-sm-6 col-md-8 col-lg-6 col-xl-7">
                    <div class="price">
                      <?php echo $product->get_price_html(); ?>
                    </div>
                    <a href="<?php echo get_permalink(362);?>?add-to-cart=<?php echo get_the_ID();?>" class="button wave">Add to Cart</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="catalog_txt">
                  <p> <strong> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></strong></p>
                  <?php //echo substr(apply_filters( 'woocommerce_short_description', $post->post_excerpt ),0, 460).''; ?>
                  <p><?php 
                    $content = wp_strip_all_tags(get_the_content());
                    do_excerpt($content, 47);
                  ?> 
                  </p>
                </div>
              </div>
            </div>