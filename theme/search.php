<?php get_header( null, array( "title" => "Search: " . get_search_query() . " | Grams Family Website" ) ) ?>
<h2><?php echo "Search: " . get_search_query() ?></h2>
<?php get_template_part( "multi" ) ?>
<?php get_footer() ?>