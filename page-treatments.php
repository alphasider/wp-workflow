<?php
/*
Template Name: Treatments
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
      <div class="container nopad grid30">
        <div class="row">
        <?php 
        $custom_args = array(
        'post_type' => 'treatments',
        /*'category_name' => 'treatment',*/
        'posts_per_page' => -1,
        );
        $custom_query = new WP_Query( $custom_args ); ?>
        <?php if ( $custom_query->have_posts() ) : ?>
        <?php while ( $custom_query->have_posts() ) : $custom_query->the_post(); ?>  
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="condbox">
              <h3><a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
              <a href="<?php the_permalink();?>" class="button pink">Learn more</a>
            </div>
          </div>          
          <?php endwhile; ?>
          <?php else:?> 
          <div class="col-12 text-center">
          Treatments not found
          </div>
          <?php endif; wp_reset_query();?> 

        </div>
      </div> 
    </main>
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>