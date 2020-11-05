<?php
  /**
   * The template for displaying product content in the single-product.php template
   *
   * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
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

  defined('ABSPATH') || exit;

  global $product;
  $product_id = $product->get_id();
  $product_category_id = $product->get_category_ids()[0];

  if (post_password_required()) {
    echo get_the_password_form(); // WPCS: XSS ok.
    return;
  }
?>
  <div>
<?php wc_print_notices(); ?>

  <main id="product-<?php the_ID(); ?>" <?php wc_product_class(); ?>>
    <section class="section_intro">
      <div class="container nopad">
        <div class="row align-items-center">
          <div class="col-12 col-sm-8 col-lg-6">
            <div class="intro_txt amput">
              <h1><?php the_title(); ?></h1>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-lg-6 ">
            <div class="thumb_box">
              <?php if ($image = wp_get_attachment_image_src(get_post_thumbnail_id($loop->post->ID), 'full')): ?>
                <img src="<?php echo $image['0']; ?>" alt="" data-no-retina>
              <?php endif; ?>
              <?php
                $attachment_id = get_field('file');
                $url = wp_get_attachment_url($attachment_id);
                if ($attachment_id):?>
                  <div class="btn_place">
                    <a href="<?php echo $url; ?>" class="button red" download target="_blank">Download PDF</a>
                  </div>
                <?php endif; ?>
              <div class="btn_place">
                <a data-fancybox data-src="#cart-modal-<?php the_ID(); ?>" href="javascript:;" class="button">
                  Add to cart
                </a>
              </div>
              <?php
                // If category equals to Pain Matters
                if ($product_category_id == 24):?>
                  <div class="btn_place annual_subscription">
                    <a href="javascript:;" class="button">
                      Subscribe for 1 Year
                    </a>
                  </div>
                <?php endif; ?>

            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="container nopad">
      <div class="row">
        <div class="col-12">
          <div class="rounded_panel font">
            <?php the_content(); ?>

            <div class="social_links">
              <div>
                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </div>
              <div>
                <a href="mailto:?<?php bloginfo('admin_email'); ?>" target="_blank">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/intent/tweet?text=<?php the_permalink(); ?>" target="_blank">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <div>
                <a href="#" target="_blank">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <?php
          $tags = wp_get_post_terms($product_id, 'product_tag');
          $tag_slug = [];

          if ($tags) :
            foreach ($tags as $tag) {
              $tag_slug[] = $tag->slug;
            }
            $args = [
              'post__not_in' => [$product_id],
              'post_type' => 'product',
              'product_tag' => $tag_slug
            ];
            $related_products = new WP_Query($args);
            ?>

            <div class="col-12">
              <div class="rounded_panel mt70">
                <h2>Related resources</h2>
                <div class="row">
                  <div class="col-12 ">
                    <ul class="relatedlinks">
                      <?php if ($related_products) : ?>
                        <?php while ($related_products->have_posts()): ?>
                          <?php $related_products->the_post(); ?>

                          <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>

                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                      <?php endif; ?>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          <?php endif; ?>


        <div class="col-12">
          <div class="rounded_panel mt70">
            <?php if (comments_open() || get_comments_number()) : ?>
              <?php comments_template(); ?>
            <?php endif; ?>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>

    <div style="display: none;" id="cart-modal-<?php the_ID(); ?>">
      <h2>Order <?php the_title(); ?></h2>
      <div class="modalabel">
        Number of leaflets required
      </div>
      <div class="select">
        <input type="number" name="quantity">
      </div>
      <div>
        <a href="<?php echo get_permalink(362); ?>?add-to-cart=<?php echo get_the_ID(); ?>&quantity="
           class="button pink" id="addtobacket">
          Add to Cart
        </a>
      </div>

    </div>
  </main>
<?php
  /**
   * Hook: woocommerce_before_single_product_summary.
   *
   * @hooked woocommerce_show_product_sale_flash - 10
   * @hooked woocommerce_show_product_images - 20
   */
  do_action('woocommerce_before_single_product_summary');


  /**
   * Hook: woocommerce_before_single_product.
   *
   * @hooked wc_print_notices - 10
   */
  do_action('woocommerce_before_single_product');
?>

  <div class="summary entry-summary">
    <?php
      /**
       * Hook: woocommerce_single_product_summary.
       *
       * @hooked woocommerce_template_single_title - 5
       * @hooked woocommerce_template_single_rating - 10
       * @hooked woocommerce_template_single_price - 10
       * @hooked woocommerce_template_single_excerpt - 20
       * @hooked woocommerce_template_single_add_to_cart - 30
       * @hooked woocommerce_template_single_meta - 40
       * @hooked woocommerce_template_single_sharing - 50
       * @hooked WC_Structured_Data::generate_product_data() - 60
       */
      do_action('woocommerce_single_product_summary');
    ?>

  </div>

<?php
  /**
   * Hook: woocommerce_after_single_product_summary.
   *
   * @hooked woocommerce_output_product_data_tabs - 10
   * @hooked woocommerce_upsell_display - 15
   * @hooked woocommerce_output_related_products - 20
   */
  do_action('woocommerce_after_single_product_summary');

?>


<?php do_action('woocommerce_after_single_product'); ?>