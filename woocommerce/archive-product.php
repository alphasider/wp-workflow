<?php
  /**
   * The Template for displaying product archives, including the main shop page which is a post type archive
   *
   * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
   *
   * HOWEVER, on occasion WooCommerce will need to update template files and you
   * (the theme developer) will need to copy the new files to your theme to
   * maintain compatibility. We try to do this as little as possible, but it does
   * happen. When this occurs the version of the template file will be bumped and
   * the readme will list any important changes.
   *
   * @see https://docs.woocommerce.com/document/template-structure/
   * @package WooCommerce/Templates
   * @version 3.4.0
   */

  defined('ABSPATH') || exit;

  get_header('shop');

  /**
   * Hook: woocommerce_before_main_content.
   *
   * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
   * @hooked woocommerce_breadcrumb - 20
   * @hooked WC_Structured_Data::generate_website_data() - 30
   */
  do_action('woocommerce_before_main_content');

?>

<?php
  global $wp_query;
  $cat = $wp_query->get_queried_object();
  $thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
  $catimage = wp_get_attachment_url($thumbnail_id);
?>

  <!--BANNER SECTION END-->
  <!-- <header class="woocommerce-products-header"> -->


<?php
  /**
   * Hook: woocommerce_archive_description.
   *
   * @hooked woocommerce_taxonomy_archive_description - 10
   * @hooked woocommerce_product_archive_description - 10
   */
  //do_action( 'woocommerce_archive_description' );
?>
  <!-- </header> -->

<?php
  $thislug = $cat->slug;
  if ($thislug == 'amputation-and-phantom-limbs'):?>
    <main>
      <section class="section_intro">
        <div class="container nopad circles">
          <div class="row align-items-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div class="intro_txt amput">
                <h1><?php woocommerce_page_title(); ?></h1>
                <?php the_archive_description(); ?>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-6 ">

            </div>
          </div>
        </div>
      </section>
      <!--products loop-->
      <div class="container nopad">
        <?php woocommerce_product_loop_start(); ?>
        <?php while (have_posts()) : the_post(); ?>
          <?php wc_get_template_part('content', 'product'); ?>
        <?php endwhile; // end of the loop.
        ?>
        <?php woocommerce_product_loop_end(); ?>
      </div>
    </main>
  <?php endif; ?>

<?php if ($thislug == 'leaflets'): ?>
  <main>
    <section class="section_intro">
      <div class="container nopad circles">
        <div class="row align-items-center">
          <div class="col-12 col-sm-8 col-lg-6">
            <div class="intro_txt amput">
              <h1><?php woocommerce_page_title(); ?></h1>
              <?php the_archive_description(); ?>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-lg-6 ">
            <div class="leaf_image">
              <?php if ($catimage): ?>
                <img src="<?php echo $catimage; ?>" alt="" data-no-retina>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--products loop-->
    <div class="container nopad grid30">
      <?php woocommerce_product_loop_start(); ?>
      <?php while (have_posts()) : the_post(); ?>
        <?php wc_get_template_part('content', 'product-2'); ?>
      <?php endwhile; // end of the loop. ?>
      <?php woocommerce_product_loop_end(); ?>
    </div>

  </main>
<?php endif; ?>

<?php if ($thislug == 'pain-matters'): ?>
  <main>
    <section class="section_intro">
      <div class="container nopad">
        <div class="row align-items-center">
          <div class="col-12 col-sm-8 col-lg-6">
            <div class="intro_txt matters">
              <h1><?php woocommerce_page_title(); ?></h1>
              <?php the_archive_description(); ?>
              <div class="button_place">
                <div>
                  <?php if ($green_button = get_field('green_button', 'product_cat_' . $cat->term_id)): ?>
                    <a href="<?php echo $green_button['url']; ?>"
                       class="button pink" <?php if ($green_button['target']) {
                      echo "target='_blank'";
                    } ?>>
                      <?php echo $green_button['title']; ?>
                    </a>
                  <?php endif; ?>
                </div>
                <div>
                  <?php if ($red_button = get_field('red_button', 'product_cat_' . $cat->term_id)): ?>

                    <a href="#subscribe_annual_data" class="button wave" id="subscribe_annual">
                      <?php echo $red_button['title']; ?>
                    </a>

                    <div style="display:none">
                      <div id="subscribe_annual_data">
                        <a href="http://painconcern/basket/?add-to-cart=11326&quantity=1" class="button"
                           style="width: 100%; margin: 10px">
                          Subscribe for 1 year
                        </a>
                        <a href="http://painconcern/basket/?add-to-cart=11327&quantity=1" class="button"
                           style="width: 100%; margin: 10px">
                          Subscribe for 1 year (+ Membership)
                        </a>
                      </div>
                    </div>
                  <?php endif; ?>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4 col-lg-6 intro_img">
            <?php if ($catimage): ?>
              <img src="<?php echo $catimage; ?>" alt="" data-no-retina>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container nopad">
        <div class="rounded_panel catalog">
          <h2>Latest Issue</h2>
          <?php
            $custom_args = array(
              'post_type' => 'product',
              'posts_per_page' => 1,
              'product_cat' => 'pain-matters',
              'order_by' => 'post_title',
              'order' => 'ASC'
            );
            $custom_query = new WP_Query($custom_args);

          ?>
          <?php if ($custom_query->have_posts()) : ?>
            <?php while ($custom_query->have_posts()) : $custom_query->the_post();
              ?>

              <div class="row catalog_row">
                <div class="col-12 col-lg-6 catalog_img">
                  <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-5">
                      <a href="<?php the_permalink(); ?>">
                        <?php if (has_post_thumbnail()): ?>
                          <?php the_post_thumbnail(); ?>
                        <?php else: ?>
                          <img src="<?php echo IMG; ?>/default-1.png" alt="">
                        <?php endif; ?>
                      </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-8 col-lg-6 col-xl-7">
                      <div class="price">
                        <?php
                          $product = wc_get_product(get_the_ID());
                          echo $product->get_price_html();
                        ?>
                      </div>
                      <a href="<?php echo get_permalink(362); ?>?add-to-cart=<?php echo get_the_ID(); ?>"
                         class="button wave">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="catalog_txt">
                    <p><strong> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></strong></p>
                    <p><?php
                        $content = wp_strip_all_tags(get_the_content());
                        do_excerpt($content, 47);
                      ?> </p>
                  </div>
                </div>
              </div>
            <?php endwhile; ?>
          <?php endif;
            wp_reset_query(); ?>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container nopad">
        <div class="rounded_panel catalog">
          <h2>Back Catalogue</h2>
          <div class="row catalog_before">
            <div class="col-lg-5">
              <?php the_field('back_catalogue', 'product_cat_' . $cat->term_id); ?>
              <?php if ($back_catalogue_button = get_field('back_catalogue_button', 'product_cat_' . $cat->term_id)): ?>
                <a href="<?php echo $back_catalogue_button['url']; ?>"
                   class="button wave" <?php if ($back_catalogue_button['target']) {
                  echo "target='_blank'";
                } ?>>
                  <?php echo $back_catalogue_button['title']; ?>
                </a>
              <?php endif; ?>
            </div>
          </div>

          <?php
            $back_catalogue_args = array(
              'post_type' => 'product',
              'posts_per_page' => -1,
              'product_cat' => 'pain-matters',
              'order_by' => 'post_title',
              'order' => 'ASC'
            );
            $back_catalogue_query = new WP_Query($back_catalogue_args);
            $the_latest_post = true;
          ?>

          <?php if ($back_catalogue_query->have_posts()) : ?>
            <?php while ($back_catalogue_query->have_posts()) : $back_catalogue_query->the_post();
              // Remove the latest added product from the list
              if ($the_latest_post) {
                $the_latest_post = false;
                continue;
              }
              ?>
              <div class="row catalog_row">
                <div class="col-12 col-lg-6 catalog_img">
                  <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-5">
                      <a href="<?php the_permalink(); ?>">
                        <?php if (has_post_thumbnail()): ?>
                          <?php the_post_thumbnail(); ?>
                        <?php else: ?>
                          <img src="<?php echo IMG; ?>/default-1.png" alt="">
                        <?php endif; ?>
                      </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-8 col-lg-6 col-xl-7">
                      <div class="price">
                        <?php
                          $product = wc_get_product(get_the_ID());
                          echo $product->get_price_html();
                        ?>
                      </div>
                      <a href="<?php echo get_permalink(362); ?>?add-to-cart=<?php echo get_the_ID(); ?>"
                         class="button wave">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="catalog_txt">
                    <p><strong> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></strong></p>
                    <p><?php
                        $content = wp_strip_all_tags(get_the_content());
                        do_excerpt($content, 47);
                      ?> </p>
                  </div>
                </div>
              </div>
            <?php endwhile; ?>
          <?php endif;
            wp_reset_query(); ?>
        </div>
      </div>
    </section>

  </main>

<?php endif; ?>
<?php get_footer('shop');