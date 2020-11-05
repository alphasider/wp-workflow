<?php
/*
Template Name: Donate
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
                <div class="btn_place">
                  <div>
                    <a href="<?php the_field('justgiving_url');?>" class="donate_btn">
                      <img src="<?php echo IMG;?>/donate.png" alt="">
                    </a>
                  </div>
                </div>  
              </div>
            </div>
            <div class="col-12 col-sm-5 col-lg-6 intro_img notround">
              <?php if($pageimg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full')): ?>
                <img src="<?php echo $pageimg[0]; ?>" alt="" data-no-retina>
              <?php endif; ?>
            </div>
          </div> 
        </div>
      </section>

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel donate_font">
            <h2><?php the_field('don_title'); ?></h2>
            <?php the_field('don_text'); ?>  
            <div class="row contacts_row">
              <?php if( have_rows('don_row') ): ?>
                <?php while ( have_rows('don_row') ) : the_row(); 
                  $title = get_sub_field('title');
                  $web = get_sub_field('web');
                  $tel = get_sub_field('tel');
                ?>
                <div class="col-12 col-sm-6 col-lg-4 col-spec">
                  <strong><?php echo $title; ?></strong> <br>
                  <?php if($web): ?>
                  <a href="<?php echo $web['url']; ?>" class="fund-btn" <?php if($web['target']){echo "target='_blank'";} ?>><?php echo $web['title']; ?></a>
                  <?php endif; ?> <br>
                  <?php      
                    $n_tel = preg_replace('/[^\p{L}\p{N}\s]/u', '', $tel);
                    $main_tel = str_replace(" ","",$n_tel);
                    if($tel):
                  ?>
                  <a href="tel:<?php echo $main_tel;?>"><?php echo $tel;?></a>
                  <?php endif; ?>
                </div>   
                <?php endwhile; ?>
              <?php endif;?>
            </div>      
          </div>
        </div>
      </section>
    </main>               
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>