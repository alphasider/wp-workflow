<?php

get_header();
?>

<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>	

      <section class="section_intro airing_single">
        <div class="container nopad circles">
          <div class="row align-items-end">
            <div class="col-12 col-sm-8 col-xl-10">
              <div class="intro_txt ">
                <h1><?php the_title(); ?></h1>
              </div>
              <div class="intro_iframe">
                <?php the_field('embed_media');?>           
              </div>              
            </div>
            <div class="col-12 col-sm-4 col-xl-2 text-center">
              <div class="intro_btn">
                <a href="#" class="button wave">Read Transcript</a>
              </div>
            </div>
          </div> 
        </div>
      </section>
      <div class="container nopad">
        <div class="row">
          <div class="col-12">
            <div class="rounded_panel font">
              <?php the_content(); ?>
              
				<?php include('parts/share.php');?>
     
            </div>
          </div>   
          <div class="col-12">
                <?php include('parts/related-resources.php');?>
          </div>    


          <div class="col-12">
              <div class="rounded_panel mt70">
                  <?php if(comments_open() || get_comments_number()) : ?>
                    <?php comments_template(); ?>
                  <?php endif; ?>
                  
                  <div class="clear"></div>
              </div> 
              <div class="mt70"></div>
          </div>  


             
        </div>
      </div> 







    <?php endwhile; ?>
<?php endif; ?>
	
<?php

get_footer();