<?php get_header( null, array( "title" => get_the_title() ) ) ?>
<?php get_template_part( "multi", null, array( "h" => "h2" ) ) ?>
<?php comments_template() ?>
<?php get_footer() ?>