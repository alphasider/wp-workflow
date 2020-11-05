    <footer>
      <div class="container nopad">
        <div class="row">
          <div class="col-12 col-xl-7">
            <div class="row">
              <div class="col-6 col-md">
                <?php 
	              wp_nav_menu([
	                 'menu'            => 'foot_1',
	                 'theme_location'  => 'foot_1',
	                 'container'       => false,
	                 'container_id'    => '',
	                 'container_class' => '',
	                 'menu_id'         => false,
	                 'menu_class'      => 'menu',
	                 'depth'           => 1,
	              ]);             
	            ?> 
              </div>
              <div class="col-6 col-md">
               	<?php 
	              wp_nav_menu([
	                 'menu'            => 'foot_2',
	                 'theme_location'  => 'foot_2',
	                 'container'       => false,
	                 'container_id'    => '',
	                 'container_class' => '',
	                 'menu_id'         => false,
	                 'menu_class'      => 'menu',
	                 'depth'           => 1,
	              ]);             
	            ?> 
              </div>
              <div class="col-6 col-md">
               	<?php 
	              wp_nav_menu([
	                 'menu'            => 'foot_3',
	                 'theme_location'  => 'foot_3',
	                 'container'       => false,
	                 'container_id'    => '',
	                 'container_class' => '',
	                 'menu_id'         => false,
	                 'menu_class'      => 'menu',
	                 'depth'           => 1,
	              ]);             
	            ?> 
              </div>
              <div class="col-6 col-md">
               	<?php 
	              wp_nav_menu([
	                 'menu'            => 'foot_4',
	                 'theme_location'  => 'foot_4',
	                 'container'       => false,
	                 'container_id'    => '',
	                 'container_class' => '',
	                 'menu_id'         => false,
	                 'menu_class'      => 'menu',
	                 'depth'           => 1,
	              ]);             
	            ?> 
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-5">
            <ul class="foot_images">
                <?php if( have_rows('foot_row', 'options') ): ?>
                  <?php while ( have_rows('foot_row', 'options') ) : the_row(); 
                    $img = get_sub_field('img');
                    $link = get_sub_field('link');
                  ?>
                  	<li>
                  		<?php if($img): ?>
                  		    <a href="<?php echo $link;?>">
    	          			    <img src="<?php echo $img;?>" alt="" data-no-retina>
    	          			</a>
    	          		<?php endif; ?>
              		</li>
          		  <?php endwhile; ?>
                <?php endif;?>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <div class="container nopad">
        <div class="row align-items-end">
          <div class="col-12 col-xl-7">
            © <?php bloginfo('site_name');?>. All Rights Reserved.<br>
            <?php the_field('copyright', 'options'); ?>
          </div>
          <div class="col-12 col-xl-5">
           	<?php 
              wp_nav_menu([
                 'menu'            => 'bottom_links',
                 'theme_location'  => 'bottom_links',
                 'container'       => false,
                 'container_id'    => '',
                 'container_class' => '',
                 'menu_id'         => false,
                 'menu_class'      => '',
                 'depth'           => 1,
              ]);             
            ?> 
          </div>
        </div>
      </div>
    </div>
    
    
  </div>  <!--//.page_wrap-->

    <nav id="nav-menu">

        <?php 
          wp_nav_menu([
             'menu'            => 'mobile_menu',
             'theme_location'  => 'mobile_menu',
             'container'       => false,
             'container_id'    => '',
             'container_class' => '',
             'menu_id'         => false,
             'menu_class'      => '',
             'depth'           => 3,
          ]);             
        ?> 
  	</nav>
    
    
    
  <?php wp_footer(); ?>
  </body>
</html>