<?php
/*
Template Name: Home Page
*/

get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>
    <main>
      <section class="section_intro">
        <div class="container nopad">
          <div class="row align-items-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div class="intro_txt">
                <?php the_content(); ?>
                <div class="button_place">
                  <?php if($featured_button = get_field('featured_button')): ?>
                    <a href="<?php echo $featured_button['url']; ?>" class="button" <?php if($featured_button['target']){echo "target='_blank'";} ?>><?php echo $featured_button['title']; ?></a>
                  <?php endif; ?>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-6 intro_img">
              <?php if($pageimg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'featured')): ?>
                <img src="<?php echo $pageimg[0];?>" alt="" data-no-retina>
              <?php endif; ?>
            </div>
          </div> 
        </div>
      </section>
      <?php if($embed_video = get_field('embed_video')): ?>
      <section class="section_vimeo">
        <div class="container nopad">
          <div class="video_wrap">
            <?php echo $embed_video; ?>
          </div>
        </div>
      </section>
      <?php endif; ?>
      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel green">
            <h2><?php the_field('help_title'); ?></h2>
            <div class="row">
              <div class="col-lg-6">
                <div class="conectline">
                  <?php 
                    $help_phone = get_field('help_phone');                
                    $n_str = preg_replace('/[^\p{L}\p{N}\s]/u', '', $help_phone);
                    $main_phone = str_replace(" ","",$n_str);
                    if($help_phone):
                  ?>
                  <a href="tel:<?php echo $main_phone;?>"><?php echo $help_phone;?></a>
                  <?php endif; ?>
                </div>
                <div class="conectline">
                  <a href="mailto:<?php the_field('help_email'); ?>"><?php the_field('help_email'); ?></a>
                </div>
                <div class="left_text">
                  <?php the_field('work_hours'); ?>
                </div>                
              </div>
              <div class="col-lg-6">
                <div class="right_text">
                  <?php the_field('help_text'); ?>
                  <div class="btn_place">
                    <?php if($help_btn = get_field('help_btn')): ?>
                      <a href="<?php echo $help_btn['url']; ?>" class="button white" <?php if($help_btn['target']){echo "target='_blank'";} ?>><?php echo $help_btn['title']; ?></a>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2><?php the_field('radio_title'); ?></h2>
            <div class="row">
              <div class="col-lg-5">
                <div class="radio_left">
                  <?php the_field('radio_text'); ?>                
                </div>
              </div>
              <div class="col-lg-7">
                <div class="radio_right">
                 <?php the_field('radio_embed'); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel blue">
            <h2><?php the_field('com_title'); ?></h2>
            <div class="row">
              <div class="col-lg-6">
                <div class="conectline">
                  <?php 
                    $com_phone = get_field('com_phone');                
                    $c_str = preg_replace('/[^\p{L}\p{N}\s]/u', '', $com_phone);
                    $clear_phone = str_replace(" ","",$c_str);
                    if($com_phone):
                  ?>
                  <a href="tel:<?php echo $clear_phone;?>"><?php echo $com_phone;?></a>
                  <?php endif; ?>
                </div>
                <div class="conectline">
                  <a href="mailto:<?php the_field('com_email'); ?>"><?php the_field('com_email'); ?></a>
                </div>
                <div class="left_text">
                  <?php the_field('com_hours'); ?>
                </div>                
              </div>
              <div class="col-lg-6">
                <div class="right_text">
                  <?php the_field('com_text'); ?>
                  <div class="btn_place">
                    <?php if($com_btn = get_field('com_btn')): ?>
                      <a href="<?php echo $com_btn['url']; ?>" class="button green" <?php if($com_btn['target']){echo "target='_blank'";} ?>><?php echo $com_btn['title']; ?></a>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>       
      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2><?php the_field('pain_title'); ?></h2>
            <div class="row">
              <div class="col-lg-6">
                <div class="pain_metters_txt">
                  <?php the_field('pain_text'); ?>
                  <div class="btn_place">
                    <div>
                      <?php if($painbtn = get_field('painbtn')): ?>
                      <a href="<?php echo $painbtn['url']; ?>" class="button" <?php if($painbtn['target']){echo "target='_blank'";} ?>><?php echo $painbtn['title']; ?></a>
                      <?php endif; ?>
                    </div>
                    <div>
                      <?php if($painbtn2 = get_field('painbtn2')): ?>
                      <a href="<?php echo $painbtn2['url']; ?>" class="button red" <?php if($painbtn2['target']){echo "target='_blank'";} ?>><?php echo $painbtn2['title']; ?></a>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <?php if( have_rows('pain_row') ): ?>
                    <?php while ( have_rows('pain_row') ) : the_row(); 
                      $link = get_sub_field('link');
                      $img = get_sub_field('img');
                    ?>
                    <div class="col">
                    <a href="<?php echo $link;?>">
                      <?php if($img): ?>
                        <img src="<?php echo $img;?>" alt="" data-no-retina>
                      <?php endif; ?>
                    </a>
                    </div>
                    <?php endwhile; ?>
                  <?php endif;?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>       
      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2><?php the_field('don_title'); ?></h2>
            <div class="row">
              <div class="col-lg-5">                
                <?php the_field('don_text'); ?>
                <div class="btn_place">
                  <div>
                    <?php if($don_url = get_field('don_url')): ?>
                    <a href="<?php echo $don_url; ?>" class="donate_btn" target="_blank">
                      <img src="<?php echo IMG;?>/donate.png" alt="">
                    </a>
                    <?php endif; ?>
                  </div>
                </div>                
              </div>
              <div class="col-lg-7">
                <div class="love_img">
                  <?php if($don_img = get_field('don_img')): ?>
                    <img src="<?php echo $don_img;?>" alt="" data-no-retina>
                  <?php endif; ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>       
      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2><?php the_field('vol_title'); ?></h2>
            <div class="row">
              <div class="col-lg-5">                
                <?php the_field('vol_text'); ?>
                <div class="btn_place">
                  <div>
                    <?php if($vol_btn = get_field('vol_btn')): ?>
                    <a href="<?php echo $vol_btn['url']; ?>" class="button" <?php if($vol_btn['target']){echo "target='_blank'";} ?>><?php echo $vol_btn['title']; ?></a>
                    <?php endif; ?>
                  </div>
                </div>                
              </div>
              <div class="col-lg-7">
                <div class="people_img">
                  <?php if($vol_img = get_field('vol_img')): ?>
                    <img src="<?php echo $vol_img['sizes']['volonteer'];?>" alt="" data-no-retina>
                  <?php endif; ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>        
      <section class="section news">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2>Latest News</h2>
            <div class="row newsrow" ss-container  style="height: 400px; width: 100%; display: block;" >
              <div class="col-12">
              <?php 
                $custom_args = array(
                    'post_type' => 'post',
                    'category_name' => 'news',
                    'posts_per_page' => 4,
                  );
                $custom_query = new WP_Query( $custom_args ); ?>
                <?php if ( $custom_query->have_posts() ) : ?>
                  <?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?> 
                <div class="news_block">
                  <h3><a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
                  <div class="date"><?php echo get_the_date('F j, Y');?></div>
                  <div class="comment"><?php comments_number(); ?></div>
                  <div class="excerpt">
                    <?php 
                    	
                        $clear = wp_strip_all_tags(get_the_content());
                    	do_excerpt($clear, 47); 
                    ?>
                  </div>
                  <a href="<?php the_permalink();?>" class="button">Continue Reading</a>
                </div>                
                <?php endwhile; ?>
      			<?php endif; wp_reset_query();?>             
                
              </div>
            </div>
          </div>
        </div>
      </section>  
    </main>          
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>