<?php
/*
Template Name: News
*/

get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>
    <main>




      <section class="section_intro">
        <div class="container nopad">
          <div class="row align-items-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div class="intro_txt amput">
                <h1><?php the_title(); ?></h1>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-6 intro_img notround award">
            	<?php if($pageimg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full')): ?>
              	<img src="<?php echo $pageimg[0]; ?>" alt="" data-no-retina>
                <?php endif;?>
            </div>
          </div> 
        </div>
      </section>




	<?php

		$paged = ( get_query_var( 'paged' ) ) ? absint( get_query_var( 'paged' ) ) : 1;
		$args = array(
		'post_type' => 'post',
		'post_status'=>'publish',
		'category_name' => 'news',		
		'posts_per_page' => 10,
		'paged' => $paged,
		);

		$the_query = new WP_Query($args);
		?>

	<?php if ( $the_query->have_posts() ) : ?>  

      <div class="container nopad">
        <div class="row">
        	<?php while ( $the_query->have_posts() ) : $the_query->the_post();?>
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

			<div class="col-12 text-center pagination">


				<?php
					echo paginate_links( array(
						'format'  => 'page/%#%',
						'current' => $paged,
						'total'   => $the_query->max_num_pages,
						'mid_size'        => 2,
						'type' => 'list',
						'prev_text'       => __('PREV'),
						'next_text'       => __('NEXT')
					) );
				?>

			</div>



        </div>
      </div> 
	<?php endif; wp_reset_query();?>







    </main>                          
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>