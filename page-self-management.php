<?php
/*
Template Name: Self managment
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
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-6 intro_img">
              <?php if($pageimg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'featured')): ?>
                <img src="<?php echo $pageimg[0]; ?>" alt="" data-no-retina>
              <?php endif; ?>
            </div>
          </div> 
        </div>
      </section>
   





 <?php 
$custom_args = array(
    'post_type' => 'post',
    'posts_per_page' => -1,
    'tag__in' => array( 241, 346),
  );
$custom_query = new WP_Query( $custom_args ); ?>
<?php if ( $custom_query->have_posts() ) : ?>
  <?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?>    


            <section class="section">
              <div class="container nopad">
                <div class="rounded_panel news_block amput self">
                  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                  <?php if($video_link = get_field('video_link')): ?>
                      <div class="video_wrap">
                        <?php echo $video_link; ?>
                      </div>
                  <?php endif;?>
                  <div class="row">
                      <div class="col-12 col-sm-4 col-lg-3">
                        <div class="date"><?php the_time("F d , Y"); ?></div>
                        <div class="comment noborder"><?php comments_number(); ?></div>
                      </div>
                      <div class="col-12 col-sm-8 col-lg-6">
                        <div class="excerpt">
                          <?php 
                          	if($short_description = get_field('short_description')){
                            	echo $short_description;
                            } else{
                            	$content = wp_strip_all_tags(get_the_content());
								do_excerpt($content, 47);
                            }
                           ?>
                        </div>
                      </div>
                      <div class="col-12 col-lg-3 btn_place">
                        <a href="<?php the_permalink(); ?>" class="button pink">Read / Write Comments</a>
                      </div>
                    </div>
                </div>
              </div>
            </section>   

		<?php endwhile; ?>
      <?php endif; wp_reset_query();?> 

         


      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2><?php the_field('nav_title');?></h2>
            <div class="row">
              <div class="col-lg-5">                
                <div class="tool_text">                
                  <?php the_field('nav_text');?>
                  <div class="btn_place">
                    <div>
                      <?php if($nav_btn = get_field('nav_btn')): ?>
<a href="<?php echo $nav_btn['url']; ?>" class="button wave" <?php if($nav_btn['target']){echo "target='_blank'";} ?>><?php echo $nav_btn['title']; ?></a>
<?php endif; ?>
                    </div>
                  </div>                
                </div>
              </div>
              <div class="col-lg-7">
                <div class="embed_video">
                <?php the_field('embed_video');?>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2><?php the_field('lef_title');?></h2>
            <div class="row">
              <div class="col-lg-6">
                <div class="pain_metters_txt">
                  <?php the_field('lef_text');?>
                  <div class="btn_place">
                    <div>
                      <?php if($lefbtn = get_field('lefbtn')): ?>
                      <a href="<?php echo $lefbtn['url']; ?>" class="button wave" <?php if($lefbtn['target']){echo "target='_blank'";} ?>><?php echo $lefbtn['title']; ?></a>
                      <?php endif; ?>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                   <?php if( have_rows('leaf_row') ): ?>
                    <?php while ( have_rows('leaf_row') ) : the_row(); 
                      $link = get_sub_field('link');
                      $img = get_sub_field('img');
                    ?>
                    <div class="col">
                    <a href="<?php echo $link;?>">
                      <?php if($img): ?>
                        <img src="<?php echo $img;?>" alt="" data-no-retina>
                      <?php endif; ?>
                    </div>
                    </a>
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
                    </div>
                    </a>
                    <?php endwhile; ?>
                  <?php endif;?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>     
        
    </main>                        
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>