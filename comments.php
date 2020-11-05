<?php
/**
 * The template for displaying Comments.
 * The area of the page that contains comments and the comment form.
 */
 
/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() )
  return;
?>
 
<?php
function mytheme_comment($comment, $args, $depth) {
  $GLOBALS['comment'] = $comment; ?>
  <div <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
    <div id="comment-<?php comment_ID(); ?>">
 
      <div class="comment-author vcard">
        <span class="author"><?php echo get_comment_author_link() ?></span>
        <span class="comment-meta commentmetadata">
          <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>"><?php printf( '%1$s в %2$s', get_comment_date(),  get_comment_time()) ?></a>
          <?php edit_comment_link('(Edit)', '  ', '') ?>
        </span>
        <span class="comment-raiting"></span>
      </div>
 
      <?php if ($comment->comment_approved == '0') : ?>
        <p class="awaiting">Your comment is awaiting moderation</p>
      <?php endif; ?>
 
      <div class="comment-text">
        <?php comment_text() ?>
      </div>
 
      <div class="reply">
        <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
      </div>
 
    </div>
    <?php } 
    ?>
 
 
<?php
// Reorder Comment text area after Fields
add_filter('comment_form_fields', 'kama_reorder_comment_fields' );
function kama_reorder_comment_fields( $fields ){
 
  $new_fields = array(); // new order of the field
 
  $myorder = array('author','email','comment'); // my order
 
  foreach( $myorder as $key ){
    $new_fields[ $key ] = $fields[ $key ];
    unset( $fields[ $key ] );
  }
 
// other fields to the end of form
  if( $fields )
    foreach( $fields as $key => $val )
      $new_fields[ $key ] = $val;
 
    return $new_fields;
  }
  ?>
 
 
<div id="comments" class="comments-area">
    <h2 class="comments-title">Comments</h2>
  <?php if ( have_comments() ) : ?>
    
 
    <div class="comment-list">
      <?php
      wp_list_comments( array(
        'style'       => 'div',
        'type'        => 'comment',
        'short_ping'  => true,
        'avatar_size' => 32,
        'callback'    => 'mytheme_comment',
        )
      );
      ?>
    </div><!-- .comment-list -->
 
 
    <?php
    // Are there comments to navigate through?
    if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
      ?>
    <nav class="navigation comment-navigation" role="navigation">
      <h2 class="screen-reader-text section-heading"><?php _e( 'Comment navigation', '' ); ?></h2>
      <div class="nav-previous alignleft"><?php previous_comments_link( __( '&larr; Older Comments', '' ) ); ?></div>
      <div class="nav-next alignright"><?php next_comments_link( __( 'Newer Comments &rarr;', '' ) ); ?></div>
    </nav><!-- .comment-navigation -->
    <?php
    endif; // Check for comment navigation
    ?>
 
    <?php if ( ! comments_open() && get_comments_number() ) : ?>
      <p class="no-comments"><?php _e( 'Comments are closed.' , '' ); ?></p>
    <?php endif; ?>
 
  <?php endif; // have_comments() ?>
 
 
  <?php
  // change fields in the comments form
  $commenter = wp_get_current_commenter();
  $req = get_option( 'require_name_email' );
  $aria_req = ( $req ? " aria-required='true'" : '' );
 
  $comments_args = array(
 
    // reply link
    'cancel_reply_link' => __( 'Cancel Repy' ),
 
    // change the title of send button
    'label_submit'=>'Post comment',
 
    // change the title of the reply section
    'title_reply'=>'Leave a reply',
 
    // remove "Text or HTML to be displayed after the set of comment fields"
    'comment_notes_before' => '',
    'comment_notes_after'  => '',
 
    //fields
    'fields' => array(
      'author' =>
      '<div class="comment-form-author"> ' .
      ( $req ? '' : '' ) .
      '<input required id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) .
      '" size="30"' . $aria_req . ' placeholder="' . __( 'Name', '' ) . '"/></div>',
 
      'email' =>
      '<div class="comment-form-email">' .
      ( $req ? '' : '' ) .
      '<input required id="email" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) .
      '" size="30"' . $aria_req . ' placeholder="' . __( 'Email', '' ) . '"/></div>',
 
      'url' =>
      '',
      ),
 
    // redefine your own textarea (the comment body)
    'comment_field' =>
    '<div class="comment-form-comment"><textarea required id="comment" name="comment" aria-required="true"></textarea></div>',
    );
 
  comment_form($comments_args);
  ?>
 
</div><!-- #comments -->