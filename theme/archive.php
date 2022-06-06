<?php get_header( null, array( "title" => strip_tags( get_the_archive_title() ) . " | Grams Family Website" ) ) ?>
<h2><?php echo strip_tags( get_the_archive_title() ) ?></h2>
<?php get_template_part( "multi" ) ?>
<?php get_footer() ?>