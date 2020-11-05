<?php
/*
Template Name: Awards
*/

get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>
    <main>
      <section class="section_intro">
        <div class="container nopad">
          <div class="row align-items-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div class="intro_txt amput">
                <h1><?php the_title();?></h1>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-6 intro_img notround award">
            <?php if($pageimg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full')):	 ?>
              <img src="<?php echo $pageimg[0]; ?>" alt="" data-no-retina>
              <?php endif;?>
            </div>
          </div> 
        </div>
      </section>
      <div class="container nopad">
        <div class="row">
          <?php 
            $custom_args = array(
                'post_type' => 'post',
                'tag' => 'awards',
                'posts_per_page' => -1,
              );
            $custom_query = new WP_Query( $custom_args ); ?>
            <?php if ( $custom_query->have_posts() ) : ?>
              <?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?> 
          <div class="col-12">
            <div class="rounded_panel news_block amput">
              <h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
              <div class="row">
                <div class="col-12 col-sm-4 col-lg-3">
                  <div class="date"><?php echo get_the_date('F j, Y');?></div>
                  <div class="comment noborder"><?php comments_number(); ?></div>
                </div>
                <div class="col-12 col-sm-8 col-lg-6">
                  <div class="excerpt">
                    <?php
                    	$content = wp_strip_all_tags(get_the_content());
                        do_excerpt($content, 47);
                    ?>
                  </div>
                </div>
                <div class="col-12 col-lg-3 btn_place">
                  <a href="<?php the_permalink();?>" class="button pink">Continue Reading</a>
                </div>
              </div>
            </div>
          </div>           
       	  <?php endwhile; ?>
          <?php endif; wp_reset_query();?> 

        </div>
      </div> 
    </main>                              
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>