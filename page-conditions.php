<?php
/*
Template Name: Conditions
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
            $terms = get_field('select_categories');
            if( $terms ):
            foreach( $terms as $term_id ): 
                $term_name = $term_id ->name;
                $term_url = get_category_link( $term_id ); ?>  
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="condbox">
              <h3><a href="<?php echo $term_url; ?>"><?php echo $term_name; ?></a></h3>
              <a href="<?php echo $term_url; ?>" class="button">Learn more</a>
            </div>
          </div>          
          <?php endforeach;  endif;    ?>
        </div>
      </div> 
    </main>
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>