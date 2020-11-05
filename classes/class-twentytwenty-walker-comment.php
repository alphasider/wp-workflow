

<?php
    class Custom_Walker_Comment2 extends Walker_Comment {
        var $tree_type = 'comment';
        var $db_fields = array( 'parent' => 'comment_parent', 'id' => 'comment_ID' );
 
        // constructor – wrapper for the comments list
        function __construct() { ?>

            <section class="comments-list">

        <?php }

        // start_lvl – wrapper for child comments list
        function start_lvl( &$output, $depth = 0, $args = array() ) {
            $GLOBALS['comment_depth'] = $depth + 2; ?>
            
            <section class="child-comments comments-list">

        <?php }
    
        // end_lvl – closing wrapper for child comments list
        function end_lvl( &$output, $depth = 0, $args = array() ) {
            $GLOBALS['comment_depth'] = $depth + 2; ?>

            </section>

        <?php }

        // start_el – HTML for comment template
        function start_el( &$output, $comment, $depth = 0, $args = array(), $id = 0 ) {
            $depth++;
            $GLOBALS['comment_depth'] = $depth;
            $GLOBALS['comment'] = $comment;
            $parent_class = ( empty( $args['has_children'] ) ? '' : 'parent' ); 
    
            if ( 'article' == $args['style'] ) {
                $tag = 'article';
                $add_below = 'comment';
            } else {
                $tag = 'article';
                $add_below = 'comment';
            } ?>

<article <?php comment_class(empty( $args['has_children'] ) ? '' :'parent') ?> id="comment-<?php comment_ID() ?>" itemprop="comment" itemscope itemtype="http://schema.org/Comment">
            <div class="commentline">
                <div class="name_date">
                  <div class="name"><?php comment_author(); ?></div> 
                  <div class="date"><?php comment_date('jS F Y') ?></div>
                </div>
                <div class="comment">
                  <?php comment_text() ?>

                </div>  
                <div class="reply">
       <!--            <a href="#">Reply</a> -->
                  <?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
                </div>  
              </div>

<!--             <article <?php comment_class(empty( $args['has_children'] ) ? '' :'parent') ?> id="comment-<?php comment_ID() ?>" itemprop="comment" itemscope itemtype="http://schema.org/Comment">
                <figure class="gravatar"><?php echo get_avatar( $comment, 65, '[default gravatar URL]', 'Author’s gravatar' ); ?></figure>
                <div class="comment-meta post-meta" role="complementary">
                    <h2 class="comment-author">
                        <a class="comment-author-link" href="<?php comment_author_url(); ?>" itemprop="author"><?php comment_author(); ?></a>
                    </h2>
                    <time class="comment-meta-item" datetime="<?php comment_date('Y-m-d') ?>T<?php comment_time('H:iP') ?>" itemprop="datePublished"><?php comment_date('jS F Y') ?>, <a href="#comment-<?php comment_ID() ?>" itemprop="url"><?php comment_time() ?></a></time>
                    <?php edit_comment_link('<p class="comment-meta-item">Edit this comment</p>','',''); ?>
                    <?php if ($comment->comment_approved == '0') : ?>
                    <p class="comment-meta-item">Your comment is awaiting moderation.</p>
                    <?php endif; ?>
                </div>
                <div class="comment-content post-content" itemprop="text">
                    <?php comment_text() ?>
                    <?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
                </div> -->

        <?php }

        // end_el – closing HTML for comment template
        function end_el(&$output, $comment, $depth = 0, $args = array() ) { ?>

            </article>

        <?php }

        // destructor – closing wrapper for the comments list
        function __destruct() { ?>

            </section>
        
        <?php }

    }
?>