<?php
  /* 1. CONSTANTS */
  define('THEMEROOT', get_stylesheet_directory_uri());
  define('CSS', THEMEROOT . '/css');
  define('JS', THEMEROOT . '/js');
  define('IMG', THEMEROOT . '/img');

  /* 2. ACF options page */
  if (function_exists('acf_add_options_page')) {
    acf_add_options_page();
  }


  register_nav_menus(array(
    'top_links' => 'Top Links',
    'foot_1' => 'Footer Menu 1',
    'foot_2' => 'Footer Menu 2',
    'foot_3' => 'Footer Menu 3',
    'foot_4' => 'Footer Menu 4',
    'bottom_links' => 'Bottom Links',
    'mobile_menu' => 'Mobile Menu',
  ));

  /* 4. Styles and scripts */
  function theme_scripts() {
    wp_enqueue_style('main', CSS . '/main.css');
    wp_enqueue_style('my', CSS . '/my.css');
    wp_enqueue_script('scripts', JS . '/main.js', array('jquery'), null, true);
  }

  add_action('wp_enqueue_scripts', 'theme_scripts');

  /* 5. Additional functions */
//comments_template();
  add_theme_support('post-thumbnails');
  add_image_size('featured', 563, 563, true);
  add_image_size('volonteer', 395, 260, true);
  add_image_size('team', 222, 296, true);

  /*Cut posts*/
  function do_excerpt($string, $word_limit) {
    $words = explode(' ', $string, ($word_limit + 1));
    if (count($words) > $word_limit)
      array_pop($words);
    echo implode(' ', $words) . ' ...';
  }

// excerpt length 12 words
  function wpdocs_custom_excerpt_length($length) {
    return 12;
  }

  add_filter('excerpt_length', 'wpdocs_custom_excerpt_length', 999);

  function new_excerpt_more($more) {
    return '...';
  }

  add_filter('excerpt_more', 'new_excerpt_more');


//add class to prev-next buttons
  add_filter('next_posts_link_attributes', 'posts_link_attributes');
  add_filter('previous_posts_link_attributes', 'posts_link_attributes');

  function posts_link_attributes() {
    return 'class="button"';
  }


//require get_template_directory() . '/classes/class-twentytwenty-walker-comment.php';


  function mytheme_add_woocommerce_support() {
    add_theme_support('woocommerce');
  }

  add_action('after_setup_theme', 'mytheme_add_woocommerce_support');

  remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0);
  remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);
  remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar', 10);
  remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
  remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10);
// // remove_action( 'woocommerce_before_single_product', 'wc_print_notices', 10 );
  remove_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20);
  remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);
  remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
  remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
  remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
  remove_action('woocommerce_before_main_content', 'woocommerce_product_archive_description', 10);
  remove_action('woocommerce_before_single_product', 'woocommerce_output_all_notices', 10);

  remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);

  add_action('woocommerce_before_single_product_summary', 'woocommerce_output_all_notices', 10);


  /**
   * WC: change products per page
   * @return int
   */
  function so22835795_loop_shop_per_page() {
    return -1; //return any number, -1 === show all
  }

  ;
  add_filter('loop_shop_per_page', 'so22835795_loop_shop_per_page', 10, 0);


  add_filter('woocommerce_return_to_shop_redirect', 'st_woocommerce_shop_url');
  /**
   * Redirect WooCommerce Shop URL
   */

  function st_woocommerce_shop_url() {

    return site_url() . '/product-category/pain-matters/';

  }


  /**
   * Add ajaxurl on the frontend
   */

  add_action('wp_enqueue_scripts', 'add_ajax_url', 99);

  function add_ajax_url() {
    wp_localize_script('scripts', 'ajaxurl',
      array(
        'url' => admin_url('admin-ajax.php')
      )
    );

  }

  /**
   * Ajax buy annual subscription
   */
  add_action('wp_ajax_buy_annual_subscription', 'buy_annual_subscription_action');

  function buy_annual_subscription_action() {
    // Annual subscription product ID: 11326
    // Annual subscription + membership product ID: 11327
    $product_id = 11326;
    $added_product = WC()->cart->add_to_cart($product_id);

    if ($added_product !== '') {
      echo "Subscription added to cart!";
    } else {
      echo "Subscription not add to cart!";
    }

    wp_die();
  }


  /**
   * Add Membership checkbox field to the checkout page
   */
  add_action('woocommerce_after_order_notes', 'add_membership_checkbox', 20);
  function add_membership_checkbox($checkout) {
    $membership_arguments = [
      'type' => 'checkbox',
      'class' => array(
        'checkout-checkbox'
      ),
      'label' => __('I wish to join Pain Concern as a member of charity &pound;1.00'),
      'required' => false,
    ];

    $membership_value = $checkout->get_value('membership_tick_box');

    echo '<div class="membership_checkbox_wrapper">';
    echo '  <h3>Membership</h3>';
    woocommerce_form_field('membership_tick_box', $membership_arguments, $membership_value);
    echo '  <div class="membership_notification notification_hide"></div>';
    echo '</div>';
  }

  /**
   * Add Gift Aid checkbox field to the checkout page
   */
  add_action('woocommerce_after_order_notes', 'add_gift_aid_checkbox', 30);
  function add_gift_aid_checkbox($checkout) {
    $gift_aid_arguments = [
      'type' => 'checkbox',
      'class' => array(
        'checkout-checkbox'
      ),
      'label' => __('I want all donations I make from the date of this declaration, until I notify you otherwise, to be Gift Aid (Please tick box)'),
      'required' => false,
    ];
    $gift_aid_value = $checkout->get_value('gift_aid_tick_box');

    echo '<div class="gift_aid_checkbox_wrapper">';
    echo '  <h3>GIFT AID IT</h3>';

    woocommerce_form_field('gift_aid_tick_box', $gift_aid_arguments, $gift_aid_value);

    echo '<p class="gift-aid-note">To qualify for Gift Aid, you must pay in income tax or capital gains tax at least the amount we will claim in the tax year</p>';
    echo '</div>';
  }


  /**
   * Ajax buy annual subscription
   */
  add_action('wp_ajax_make_donation', 'make_donation_action');
  add_action('wp_ajax_nopriv_make_donation', 'make_donation_action');
  function make_donation_action() {
    // Annual subscription product ID: 11326
    // Annual subscription + membership product ID: 11327
    $product_id = 11336;
    $product_cart_id = WC()->cart->generate_cart_id($product_id);
    $is_product_in_the_cart = WC()->cart->find_product_in_cart($product_cart_id);
    $added_product = null;

    if (!$is_product_in_the_cart) {
      $added_product = WC()->cart->add_to_cart($product_id);

      if ($added_product !== '') {
        echo "<span class='msg msg_success'>Membership added to cart!</span>";
      } else {
        echo "<span class='msg msg_error'>Membership not add to cart!</span>";
      }
    } else {
      echo "<span class='msg msg_info'>You have already added a membership</span>";
    }

    wp_die();
  }

