<?php
/*
Template Name: Forum
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
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?> 
                <div class="button_place">
                  <?php if($featured_button = get_field('featured_button')): ?>
                    <a href="<?php echo $featured_button['url']; ?>" class="button pink" <?php if($featured_button['target']){echo "target='_blank'";} ?>><?php echo $featured_button['title']; ?></a>
                  <?php endif; ?>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-6 ">
              <div class="iframe_wrapper">                
                  <ul class='gdl-tabs-content' style="background: #fff;">
                    <li data-href="tab-0" class="active" >
                      <a href="https://healthunlocked.com/painconcern" id="painconcernHUWidget">Latest posts</a>
                    </li>
                  </ul>
                  <script>
                     var _huq = _huq || [];
                     _huq.push(['_createPostsWidget', 'painconcernHUWidget', 'painconcern', '400', true, '#30bd7a', '#FFFFFF', '']);

                     (function () {
                         var hu = document.createElement('script'); hu.type = 'text/javascript'; hu.async = true; hu.id = 'huscript';
                         hu.src = 'https://healthunlocked.com/bg/widget';
                         var s = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1]; s.parentNode.insertBefore(hu, s);
                     })();
                  </script>
              </div>
            </div>
          </div> 
        </div>
      </section>

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel">
            <h2><?php the_field('abo_title'); ?></h2>
            <?php the_field('abo_text'); ?>
          </div>
        </div>
      </section>       

      <section class="section">
        <div class="container nopad">
          <div class="rounded_panel ">
            <h2><?php the_field('mod_title'); ?></h2>
            <?php the_field('mod_text'); ?>     
          </div>
        </div>
      </section>      
        
    </main>                    
    <?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>