<?php get_header(); ?>
    <main>
      <section class="section_intro">
        <div class="container nopad">
          <div class="row align-items-center">
            <div class="col-12 col-sm-8 col-lg-6">
              <div class="intro_txt ">
                <h1>404</h1>
                <p>Oops, something went wrong!</p>
                <p>This page has been deleted or never existed.</p>
                <div class="button_place">
                    <a href="<?php bloginfo('url');?>" class="button">Go to home page</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-4 col-lg-6 intro_img notround">
              <img src="<?php echo IMG;?>/contact.svg" alt="" data-no-retina>
            </div>
          </div> 
        </div>
      </section>
    </main>
<?php get_footer(); ?>
		

