<?php get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>
    <main>
      <section class="section_intro default_page">
        <div class="container nopad">
          <div class="row align-items-center">
            <?php if(has_post_thumbnail()){
              $classes = 'col-sm-8 col-lg-6';
              $width = '';
            }else{
              $classes = '';
              $width = 'amput';
            } ?>
            <div class="col-12 <?php echo $classes;?>">
              <div class="intro_txt <?php echo $width;?>">
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
              </div>
            </div>
            <?php if($pageimg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full')): ?>
            <div class="col-12 col-sm-4 col-lg-6 notround">
              <img src="<?php echo $pageimg[0]; ?>" alt="" data-no-retina>
            </div>
            <?php endif; ?>
          </div> 
        </div>
      </section>
    </main>               
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>