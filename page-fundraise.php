<?php
/*
Template Name: Fundraise
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
                <div class="button_place">
                  <?php if($don_url = get_field('don_url')): ?>
                  <a href="<?php echo $don_url; ?>" class="donate_btn" target="_blank">
                    <img src="<?php echo IMG;?>/donate.png" alt="">
                  </a>
                  <?php endif; ?>
                </div>
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

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel ">
            <h2><?php the_field('fund_title'); ?></h2>
            <?php the_field('fund_text'); ?>
          </div>
        </div>
      </section>      

    </main>                          
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>