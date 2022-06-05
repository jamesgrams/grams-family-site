<?php get_header( null, array( "title" => "Grams Family Website" ) ) ?>
<p>Welcome to the website of the Grams Family. Our family has lived across the globe from South Africa to England to the United States. Enjoy!</p>
<h2>Events</h2>
<div id="events">
    <h3>Today</h3>
    <div id="today-events"></div>
    <h3>Upcoming</h3>
    <div id="upcoming-events"></div>
</div>
<h2>Family Tree</h2>
<!-- wrapper to control scrolling of the container -->
<div id="container-wrapper-wrapper">
    <div id="container-wrapper">
        <!-- container for the svg and all the family members -->
        <div id="container">
            <div id="members"></div>
            <svg></svg>
        </div>
    </div>
</div>
<?php get_footer() ?>