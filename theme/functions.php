<?php
    /* Custom script with jQuery as a dependency, enqueued in the footer */
    add_action('wp_enqueue_scripts', 'grams_enqueue_custom_js');
    function grams_enqueue_custom_js() {
        wp_enqueue_script('custom', get_stylesheet_directory_uri().'/scripts/index.js', 
        array('jquery'), false, true);
    }
?>