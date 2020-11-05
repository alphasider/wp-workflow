<?php
  /**
   * This template used in regular posts pages.
   * $post->ID will taken from those posts
   *
   * IMPORTANT NOTE!
   * Also a similar code duplicated in the following file:
   * woocommerce/content-single-product.php
   *
   * @var $post
   */

  $tags = wp_get_post_tags($post->ID);

  if ($tags):
    $tags_slug = [];
    foreach ($tags as $tag) {
      $tags_slug[] = $tag->slug;
    }

    $args = [
      'post_per_page' => 12,
      'post__not_in' => [$post->ID],
      'tag_slug__in' => $tags_slug
    ];

    $related_products = new WP_Query($args);
    ?>

    <div class="col-12">
      <div class="rounded_panel mt70">
        <h2>Related resources</h2>
        <div class="row">
          <div class="col-12 ">
            <ul class="relatedlinks">
              <?php if ($related_products) : ?>
                <?php while ($related_products->have_posts()): ?>
                  <?php $related_products->the_post(); ?>

                  <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>

                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
              <?php endif; ?>

            </ul>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>

<?php
/*
  if ($related_resources = get_field('related_resources')): ?>
  <div class="rounded_panel mt70">
    <h2>Related resources</h2>
    <div class="row">
      <div class="col-12 ">
        <ul class="relatedlinks">
          <?php foreach ($related_resources as $post): ?>
            <?php setup_postdata($post); ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
<?php endif;
  wp_reset_postdata(); ?>
*/
