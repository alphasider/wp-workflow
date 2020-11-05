<?php
/*
Template Name: Who we are
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

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <?php if($help_add_title_2 = get_field('help_add_title_2')): ?>
              <h2><?php echo $help_add_title_2; ?></h2>
            <?php endif; ?>
            <div class="font">
              <?php the_field('help_add_text_2'); ?>       
            </div>
          </div>
        </div>
      </section> 

      <section class="section" id="advisory-members">
        <div class="container nopad">
          <div class="rounded_panel">
            <?php if($help_add_title_3 = get_field('help_add_title_3')): ?>
              <h2><?php echo $help_add_title_3; ?></h2>
            <?php endif; ?>
            <div class="grid40">
              <div class="row justify-content-between">
                <?php if( have_rows('team_row') ): ?>
                  <?php while ( have_rows('team_row') ) : the_row(); 
                    $image = get_sub_field('image');
                    $name = get_sub_field('name');
                    $text = get_sub_field('text');
                  ?>
                  <div class="col-12 col-lg-6 col-xl-6">
                    <div class="row memberbox">
                      <div class="col-sm-4">
                        <?php if($image): ?>
                          <img src="<?php echo $image['sizes']['team']; ?>" alt="" data-no-retina>
                        <?php endif; ?>
                      </div>
                      <div class="col-sm-8">
                        <div><strong><?php echo $name; ?></strong></div>
                        <p><?php echo $text; ?></p>
                      </div>
                    </div>
                  </div>
                  <?php endwhile; ?>
                <?php endif;?>
              
              </div>
            </div>
          </div>     
        </div>  
      </section> 

      <section class="section" id="trustees-members">
        <div class="container nopad">
          <div class="rounded_panel">
            <?php if($help_add_title_4 = get_field('help_add_title_4')): ?>
              <h2><?php echo $help_add_title_4; ?></h2>
            <?php endif; ?>
            <div class="grid40">
              <div class="row justify-content-between">
                <?php if( have_rows('team_row_2') ): ?>
                  <?php while ( have_rows('team_row_2') ) : the_row(); 
                    $image = get_sub_field('image');
                    $name = get_sub_field('name');
                    $text = get_sub_field('text');
                  ?>
                  <div class="col-12 col-lg-6 col-xl-6">
                    <div class="row memberbox">
                      <div class="col-sm-4">
                        <?php if($image): ?>
                          <img src="<?php echo $image['sizes']['team']; ?>" alt="" data-no-retina>
                        <?php endif; ?>
                      </div>
                      <div class="col-sm-8">
                        <div><strong><?php echo $name; ?></strong></div>
                        <p><?php echo $text; ?></p>
                      </div>
                    </div>
                  </div>
                  <?php endwhile; ?>
                <?php endif;?>
              </div>
            </div>
          </div>     
        </div>  
      </section> 
        
    </main>                        
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>