<?php
/*
Template Name: Helpline
*/

get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>
    <main>
      <section class="section_intro">
        <div class="container nopad">
          <div class="row align-items-center">
            <div class="col-12 col-sm-7 col-lg-6">
              <div class="intro_txt">
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?> 
              </div>
            </div>
            <div class="col-12 col-sm-5 col-lg-6 intro_img">
              <?php if($pageimg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'featured')): ?>
                <img src="<?php echo $pageimg[0]; ?>" alt="" data-no-retina>
              <?php endif; ?>
            </div>
          </div> 
        </div>
      </section>

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <?php if($help_add_title = get_field('help_add_title')): ?>
              <h2><?php echo $help_add_title; ?></h2>
            <?php endif; ?>
            <div class="font">
              <?php the_field('help_add_text'); ?>       
            </div>
          </div>
        </div>
      </section>       

     
        
    </main>                        
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>