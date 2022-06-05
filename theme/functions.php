<?php
    /* Custom script with jQuery as a dependency, enqueued in the footer */
    add_action('wp_enqueue_scripts', 'grams_enqueue_custom_js');
    function grams_enqueue_custom_js() {
        wp_enqueue_script('custom', get_stylesheet_directory_uri().'/scripts/index.js', 
        array('jquery'), false, true);
    }

    add_action( 'widgets_init', 'my_register_sidebars' );
    function my_register_sidebars() {
        /* Register the 'primary' sidebar. */
        register_sidebar(
            array(
                'id'            => 'categories',
                'name'          => __( 'Categories Sidebar' ),
                'description'   => __( 'Sidebar for categories' ),
                'before_widget' => '<div id="%1$s" class="widget %2$s">',
                'after_widget'  => '</div>',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            )
        );
        /* Repeat register_sidebar() code for additional sidebars. */
    }
?>