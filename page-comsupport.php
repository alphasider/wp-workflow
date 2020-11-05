<?php
/*
Template Name: Community Support
*/

get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>
    <main>
      <section class="section_intro">
        <div class="container nopad">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-lg-6">
              <div class="intro_txt self-single">
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-lg-6 self_video">
              <div class="embed_video multiple">
                <?php the_field('embed_media'); ?>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </main>                
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>