<!doctype html>
<html <?php language_attributes(); ?> >
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no">
    <title>
      <?php 
        global $page, $paged; 
        wp_title( '|', true, 'right' );
        bloginfo( 'name' ); 
        $site_description = get_bloginfo( 'description', 'display' );
        if ( $site_description && ( is_home() || is_front_page() ) )
          echo " | $site_description";  
        if ( $paged >= 2 || $page >= 2 )
          echo ' | ' . sprintf( __( 'Page %s', 'striped' ), max( $paged, $page ) );  
      ?>
    </title>
    <meta property="og:title" content="<?php bloginfo('name'); ?><?php wp_title( '|', true, 'left' ); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] ?>">
    <meta property="og:image" content="<?php echo IMG; ?>/og_logo.png">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class();?>>

  <div class="page_wrap">
    <div class="search_place">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 offset-lg-2">
                    <form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ) ?>">
                    <div class="row">
                        <div class="col-md-9"><input type="text" placeholder="Type here..." name="s" id="s"></div>
                        <div class="col-md-3">
                            <input type="submit" class="button" value="Search">  
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <header>
      <div class="container nopad">
        <div class="logo">
          <a href="<?php bloginfo('url');?>">
            <?php if($logo = get_field('logo', 'options')): ?>
              <img src="<?php echo $logo;?>" alt="">
            <?php endif; ?>
          </a>
        </div>
        <div class="top_menu row">
          <div class="col-auto">
            <?php 
              wp_nav_menu([
                 'menu'            => 'top_links',
                 'theme_location'  => 'top_links',
                 'container'       => false,
                 'container_id'    => '',
                 'container_class' => '',
                 'menu_id'         => false,
                 'menu_class'      => 'top_menu_links',
                 'depth'           => 1,
              ]);             
            ?>  
          </div>
          <div class="col-auto">
            <ul class="acc_menu">
              <li>
                <a href="<?php echo get_permalink('362'); ?>" class="cart_info">
                	<span class="badge"><?php echo sprintf ( _n( '%d ', '%d ', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?></span>
                  <img src="<?php echo IMG;?>/icon-1.png" alt="">
                </a>
              </li>
              <li>
                <a href="#" class="searchtrigger">
                  <img src="<?php echo IMG;?>/icon-2.png" alt="">
                </a>
              </li>
              <li class="showonmobile">
                <a href="#nav-menu">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="tab_menus row">
          <?php if( have_rows('desktop_menu', 'options') ): ?>
            <?php $i=1; while ( have_rows('desktop_menu', 'options') ) : the_row(); 
              $label = get_sub_field('label');
              $label_text = get_sub_field('label_text');
            ?>
            <div class="col">
              <div class="tab_menu_item checkborder" data-menu="menu-<?php echo $i;?>">
                <strong>
                  <a href="<?php echo $label['url']; ?>"><?php echo $label['title']; ?></a>
                </strong>
                <div class="tab_menu_item_text">
                  <p><?php echo $label_text; ?></p>
                </div>
              </div>          
            </div> 
            <?php $i++; endwhile; ?>
          <?php endif;?>
        </div>
        <div class="tab_menus_wrap">
          <div class="tab_menus_holder">
            <?php if( have_rows('desktop_menu', 'options') ): ?>
              <?php $i=1; while ( have_rows('desktop_menu', 'options') ) : the_row();?>
              <div class="tab_menus_content" id="menu-<?php echo $i;?>">
                <div class="row">
                  <?php if( have_rows('submenu') ): ?>
                    <?php while ( have_rows('submenu') ) : the_row(); 
                      $select = get_sub_field('select');
                      $block_link = get_sub_field('block_link');
                      $block_text = get_sub_field('block_text');
                      $item_text = get_sub_field('item_text');
                    ?>
                    <div class="col-sm-6 col-lg-3">
                      <?php if($select == 'list'): ?>
                        <div class="menu_block_list">
                          <ul>
                            <?php if( have_rows('list_row') ): ?>
                              <?php while ( have_rows('list_row') ) : the_row(); 
                                $link = get_sub_field('link');
                              ?>
                                <li><a href="<?php echo $link['url']; ?>" <?php if($link['target']){echo "target='_blank'";} ?>><?php echo $link['title']; ?></a></li>
                              <?php endwhile; ?>
                            <?php endif;?>
                          </ul>
                        </div>
                      <?php endif; ?>
                      <?php if($select == 'block'): ?>
                        <div class="menu_block">
                          <ul>
                            <li>
                                <?php if($block_link ): ?>
                                  <a href="<?php echo $block_link['url']; ?>" <?php if($block_link['target']){echo "target='_blank'";} ?>><?php echo $block_link['title']; ?></a>
                                <?php endif; ?>
                                <div class="menu_block_text">
                                  <?php echo $block_text; ?>
                                </div>
                            </li>
                          </ul>
                        </div>
                      <?php endif; ?>
                      <?php if($select == 'text'): ?>
                        <div class="menu_block_text menu_block_list">                
                          <?php echo $item_text; ?>
                        </div> 
                      <?php endif; ?>
                    </div>
                    <?php endwhile; ?>
                  <?php endif;?>
                </div>
              </div>  
              <?php $i++; endwhile; ?>
            <?php endif;?>
          </div>
        </div>  
      </div>
    </header>