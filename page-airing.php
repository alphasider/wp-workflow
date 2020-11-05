<?php
/*
Template Name: Airing Pain
*/

get_header(); ?>
<?php if(have_posts()) : ?>
    <?php while(have_posts()) : the_post(); ?>
        <main>
      <section class="section_intro airing">
        <div class="container nopad">
          <div class="row align-items-center">
            <div class="col-12 col-sm-6 col-lg-6">
              <div class="intro_txt">
                <h1><?php the_title();?></h1>
                <?php the_content();?> 
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-6 ">
              <div class="iframe_wrapper">
                <?php the_field('embed_media');?>
              </div>
            </div>
          </div> 
        </div>
      </section>

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2>Episodes</h2>
            <div class="row justify-content-between">
              <?php
                $paged = get_query_var('paged') ? get_query_var('paged') : 1;
                $args = array(
                  'post_type' => 'post',
                  'post_status' => 'publish',
                  /*'tax_query' => array( 
                  	array(
                        'taxonomy' => 'resource_category',
                        'terms'    => array( 26 ),// ID category                   
                    )
                  ),*/
                  'category__in' => array( 28 ), 
                  'posts_per_page' => 12,
                  'paged' => $paged,
                );
                $arr_posts = new WP_Query( $args );
                if ($arr_posts->have_posts()) :
                  while ($arr_posts->have_posts()) : $arr_posts->the_post()
              ?> 
              <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="episodebox">
                  <h4><a href="<?php the_permalink();?>"><?php the_title();?></a></h4>
                  <div class="date"><?php echo get_the_date('F j, Y');?></div>
                  <a href="<?php the_permalink();?>" class="button wave">Listen Now</a>
                </div>
              </div>              
               <?php endwhile ?>            
                         
    
              <div class="col-12 text-center pagination">
                <?php
                  $total_pages = $arr_posts->max_num_pages;
                  if ($total_pages > 1){
                    $current_page = max(1, get_query_var('paged'));
                    echo paginate_links(array(
                      'base' => get_pagenum_link(1) . '%_%',
                      'format' => '/page/%#%',
                      'current' => $current_page,
                      'total' => $total_pages,
                      'prev_text'    => __('« prev'),
                      'next_text'    => __('next »'),
                      'add_args'  => array()
                    ));
                  }
                    ?>    
                  <?php endif; wp_reset_postdata();?>
              </div>
            </div>
          </div>
        </div>
      </section>       

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel ">
            <h2>Playlists</h2>
            <div class="grid40 nopad airing">
              <div class="row">
              <?php if( have_rows('playlist') ): ?>
                  <?php while ( have_rows('playlist') ) : the_row(); 
                    $embed = get_sub_field('embed');
                  ?>
                 <div class="col-12 col-md-6">
                   <div class="playlist_wrap">
                     <?php echo $embed;?>
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