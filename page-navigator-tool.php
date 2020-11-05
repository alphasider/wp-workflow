<?php
/*
Template Name: Navigator Tool
*/

get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>       
    <main>
      <section class="section_intro">
        <div class="container nopad circles">
          <div class="row align-items-center">
            <div class="col-12 col-sm-12 col-lg-6">
              <div class="intro_txt self-single">
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-lg-6 self_video">
              <div class="embed_video">
                <?php the_field('featured_embed_media');?>
              </div>
            </div>
          </div> 
        </div>
      </section>
      <div class="container nopad">
        <div class="row">
          <div class="col-12">
            <div class="rounded_panel">
              <h2><?php the_field('down_title');?></h2>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="down_text">                    
                    <?php the_field('down_text');?>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="row">
                    
                    <?php if( have_rows('down_row') ): ?>
                      <?php while ( have_rows('down_row') ) : the_row(); 
                        $image = get_sub_field('image');
                        $file = get_sub_field('file');
                      ?>
                        <div class="col-12 col-md-6">
                          <div class="docbox">
                          	<?php if($image):?>
                            	<img src="<?php echo $image;?>" alt="">
                            <?php endif;?>
                            <div>
                            	<?php                                  	
  									$url = wp_get_attachment_url($file);
                                    if($file):
                                ?>
                              	<a href="<?php echo $url;?>" class="button pink" target="_blank" download>Download Now</a>
                                <?php endif;?>
                            </div>
                          </div>
                        </div>
                      <?php endwhile; ?>
					<?php endif;?>
                  </div>
                </div>
              </div>
            </div>
          </div>   
          <div class="col-12">
            <div class="rounded_panel mt70">
              <h2><?php the_field('nav_title');?></h2>
              <?php if( have_rows('video_row') ): ?>
              <?php while ( have_rows('video_row') ) : the_row(); 
              	$embed = get_sub_field('embed');
              ?>
                  <div class="embed_video mb40">
                    <?php echo $embed;?>
                  </div>              
              <?php endwhile; ?>
			  <?php endif;?>
            </div>
          </div>
          <div class="col-12">
     		<?php include('parts/related-resources.php');?>
          </div>             
    
        </div>
      </div> 
    </main>
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>