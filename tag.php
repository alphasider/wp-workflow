<?php get_header(); ?>

    <main>


      <section class="section_intro">
        <div class="container nopad circles">
          <div class="row align-items-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div class="intro_txt amput">
                <h1><?php the_archive_title(); ?></h1>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-6 ">
              
            </div>
          </div> 
        </div>
      </section> 


      <div class="container nopad">
        <div class="row">
        	<?php if(have_posts()) : ?>
                <?php while(have_posts()) : the_post(); ?>
		          <div class="col-12">
		            <div class="rounded_panel news_block amput">
		              <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		              <div class="row">
		                <div class="col-12 col-sm-4 col-lg-3">
		                  <div class="date"><?php the_time("F d , Y"); ?></div>
		                  <div class="comment noborder"><?php comments_number(); ?> </div>
		                </div>
		                <div class="col-12 col-sm-8 col-lg-6">
		                  <div class="excerpt">
		                    <?php 
                            	if($short_description = get_field('short_description')){
                                	echo $short_description;
                                } else{
                                	$content = 		wp_strip_all_tags(get_the_content());
									do_excerpt($content, 47);
                                }
                            ?>
		                  </div>
		                </div>
		                <div class="col-12 col-lg-3 btn_place">
		                  <a href="<?php the_permalink(); ?>" class="button pink">Continue Reading</a>
		                </div>
		              </div>
		            </div>
		          </div>    

		        <?php endwhile; ?>
            <?php endif; ?>
        </div>
      </div>
    </main>                          
    
<?php get_footer(); ?>