<?php
  get_header();
  global $post;
  $post_tags = get_the_tags();
  $post_tag_slug = $post_tags[0]->slug;

  $category = get_queried_object('cat');
  $catslug = $category->slug;
?>
  <main>
<?php if ($post_tag_slug == 'self-management-vids' || $post_tag_slug == 'self-management' || in_category(array('self-management'))): ?>

  <!--if post tagged as self management-->
  <?php include('post-self_management.php'); ?>

<?php else: ?>

  <?php if (in_category(array('airing-pain', 'airing-pain-2', 'airing-pain-series-1', 'airing-pain-series-2', 'airing-pain-series-3', 'airing-pain-series-4', 'airing-pain-series-5', 'airing-pain-series-6', 'airing-pain-series-7', 'airing-pain-series-8', 'airing-pain-series-9'))): ?>

    <!--if post from category Airing Pain-->
    <?php include('post-airing-pain.php'); ?>

  <?php else: ?>

    <!--if simple post/news-->
    <?php if (have_posts()) : ?>
      <?php while (have_posts()) : the_post(); ?>
        <section class="section_intro airing_single">
          <div class="container nopad circles">
            <div class="row align-items-center">
              <div class="col-12 col-sm-8 col-xl-10">
                <div class="intro_txt ">
                  <h1><?php the_title(); ?></h1>
                </div>
                <div class="intro_iframe">

                </div>
              </div>
              <div class="col-12 col-sm-4 col-xl-2 text-center">

              </div>
            </div>
          </div>
        </section>
        <div class="container nopad">
          <div class="row">
            <div class="col-12">
              <div class="rounded_panel font">
                <?php the_content(); ?>

                <?php include('parts/share.php'); ?>

              </div>
            </div>

            <?php include('parts/related-resources.php'); ?>

            <div class="col-12">
              <div class="rounded_panel mt70">
                <?php if (comments_open() || get_comments_number()) : ?>
                  <?php comments_template(); ?>
                <?php endif; ?>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt70"></div>
      <?php endwhile; ?>
    <?php endif; ?>
    </main>
  <?php endif; ?>
<?php endif; ?>

<?php get_footer(); ?>