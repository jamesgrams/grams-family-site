var $ = jQuery;
// To add a male: Add their name, id, fatherId, and spouseId (optional)
// If they have no fatherId in the tree, make the fatherId "root", and be sure to set a customDepth
// for where they start if not the top of the tree (1 = second row)
// To add a female, simply add their name, id, and fatherId (necessary only if not married)
var familyMembers = [
    { 
        name: "Andrew Leong", 
        id: "andrewleong", 
        fatherId: "root",
        customDepth: 2,
        spouseId: "victorialeong"
    },
    { 
        name: "Victoria Leong", 
        id: "victorialeong", 
        fatherId: "darellmarkgrams"
    },
    { 
        name: "Evelyn Leong", 
        id: "evelynleong", 
        fatherId: "andrewleong",
        picture: "images/evelynleong.png"
    },
    { 
        name: "Eugene Edgar Grams",
        id: "eugeneedgargrams",
        fatherId: "root",
        spouseId: "evelynphyllisgrams",
        birthday: new Date(1930, 8, 18, 0, 0, 0),
        death: new Date(2016, 11, 1, 0, 0, 0),
        anniversary: new Date(1952, 2, 20, 0, 0, 0),
        birthplace: "Fon-du-Lac, WI, USA"
    },
    { 
        name: "Phyllis Evelyn Grams",
        id: "evelynphyllisgrams",
        maiden: "Evelyn Phyllis Louton",
        birthplace: "Detroit, MI, USA",
        birthday: new Date(1931, 3, 20, 0, 0, 0)
    },
    { 
        name: "Bryan George Davies",
        id: "briangeorgedavies",
        fatherId: "root",
        spouseId: "junemollerdavies",
        birthplace: "Durban, South Africa",
        anniversary: new Date(1959, 11, 19, 0, 0, 0),
        birthday: new Date(1937, 2, 9, 0, 0, 0),
        email: "protea102@aol.com",
        picture: "images/bryangeorgedavies.jpg"
    },
    { 
        name: "June Moller Davies",
        maiden: "June Cowell",
        id: "junemollerdavies",
        birthplace: "Durban, South Africa",
        email: "protea101@aol.com",
        picture: "images/junemollerdavies.jpg"
    },
    { 
        name: "Ed Carr",
        id: "edcarr",
        fatherId: "root",
        spouseId: "junecarr"
    },
    { 
        name: "June Carr",
        id: "junecarr"
    },
    { 
        name: "Edwin Mann",
        id: "edwinmann",
        fatherId: "root",
        spouseId: "thelmajomann"
    },
    { 
        name: "Thelma Jo Mann",
        id: "thelmajomann"
    },
    { 
        name: "Robert Henry Moore",
        id: "roberthenrymoore",
        fatherId: "root",
        spouseId: "paulabenviemoore",
        birthday: new Date(1928, 1, 11, 0, 0, 0),
        death: new Date(2003, 8, 11, 0, 0, 0),
        birthplace: "Manchester, MA, USA" 
    },
    { 
        name: "Paula Benvie Moore", 
        id: "paulabenviemoore",
        birthday: new Date(1930, 0, 10, 0, 0, 0),
        death: new Date(2006, 10, 1, 0, 0, 0),
        birthplace: "Andover, MA, USA" 
    },
    { 
        name: "Darell Mark Grams", 
        id: "darellmarkgrams", 
        fatherId: "eugeneedgargrams",
        birthplace: "Pietersburg, South Africa",
        spouseId: "reygrams",
        birthday: new Date(1953, 7, 23, 0, 0, 0),
        picture: "images/darrellmarkgrams.jpg",
        facebook: "https://www.facebook.com/darrell.grams.12"
    },
    { 
        name: "Rey Grams", 
        id: "reygrams"
    },
    { 
        name: "Dennis Dwight Grams", 
        id: "dennisdwightgrams", 
        fatherId: "eugeneedgargrams",
        birthplace: "Welcom, South Africa",
        birthday: new Date(1956, 9, 29, 0, 0, 0)
    },
    { 
        name: "Rollin Gene Grams", 
        link: "https://bibleandmission.blogspot.com", 
        id: "rollingenegrams", 
        fatherId: "eugeneedgargrams", 
        spouseId: "wendydaviesgrams",
        birthday: new Date(1958, 6, 25, 0, 0, 0),
        birthplace: "Welcom, South Africa",
        email: "rollingrams@yahoo.com",
        picture: "images/rollingenegrams.jpg"
    },
    { 
        name: "Wendy Davies Grams", 
        maiden: "Wendy Noleen Davies",
        link: "https://rachelslearningvillage.wordpress.com", 
        id: "wendydaviesgrams", 
        fatherId: "briangeorgedavies",
        birthday: new Date(1960, 11, 25, 0, 0, 0),
        birthplace: "Durban, South Africa",
        email: "wdgrams@yahoo.com",
        facebook: "https://www.facebook.com/profile.php?id=100001227453767",
        picture: "images/wendydaviesgrams.jpg"
    },
    { 
        name: "Richard Davies", 
        id: "richarddavies", 
        fatherId: "briangeorgedavies",
        spouseId: "kellycarrdavies",
        birthplace: "Durban, South Africa"
    },
    { 
        name: "Kelly Carr Davies",
        maiden: "Kelly Carr",
        id: "kellycarrdavies", 
        fatherId: "edcarr",
        birthplace: "Orlando, FL, USA",
        picture: "images/kellycarrdavies.jpg"
    },
    { 
        name: "Gary Jon Davies", 
        id: "garyjondavies", 
        fatherId: "briangeorgedavies",
        spouseId: "kristindavies",
        birthplace: "Durban, South Africa",
        birthday: new Date(1969, 3, 16, 0, 0, 0),
        anniversary: new Date(1992, 11, 19),
    },
    { 
        name: "Kristin Davies",
        maiden: "Kristin Baucom",
        id: "kristindavies", 
        birthplace: "Winston-Salem, NC, USA",
        instagram: "https://www.instagram.com/kristi.davies/"
    },
    { 
        name: "David William Mann", 
        id: "davidwilliammann", 
        fatherId: "edwinmann", 
        spouseId: "robinpaulamann",
        birthday: new Date(1965, 3, 22, 0, 0, 0),
        birthplace: "Boston, MA, USA",
        anniversary: new Date(1988, 8, 17, 0, 0, 0),
        facebook: "https://www.facebook.com/profile.php?id=100006299160953"
    },
    { 
        name: "Robin Paula Mann",
        maiden: "Robin Moore",
        id: "robinpaulamann", 
        fatherId: "roberthenrymoore",
        birthday: new Date(1964, 9, 7, 0, 0, 0),
        birthplace: "Ipswich, MA, USA",
        facebook: "https://www.facebook.com/robin.mann.969"
    },
    { 
        name: "Barry Benvie Moore",
        id: "barrybenviemoore", 
        fatherId: "roberthenrymoore",
        birthday: new Date(1946, 1, 13, 0, 0, 0),
        birthplace: "Beverly, MA, USA"
    },
    { 
        name: "Bryan Earle Moore",
        id: "barryearlemoore", 
        fatherId: "roberthenrymoore",
        birthday: new Date(1951, 8, 17, 0, 0, 0),
        birthplace: "Ipswich, MA, USA"
    },
    { 
        name: "Brandon Grams", 
        id: "brandongrams", 
        fatherId: "darellmarkgrams"
    },
    { 
        name: "Michael Grams", 
        id: "michaelgrams", 
        fatherId: "darellmarkgrams"
    },
    { 
        name: "David Rollin Grams", 
        id: "davidrollingrams", 
        fatherId: "rollingenegrams",
        birthday: new Date(1994, 6, 27, 0, 0, 0),
        birthplace: "Charlotte, NC, USA",
        email: "grams.david@ymail.com",
        facebook: "https://www.facebook.com/david.grams.395",
        instagram: "https://www.instagram.com/dgrams4/",
        picture: "images/davidrollingrams.jpg"
    },
    { 
        name: "James Rollin Grams", 
        link: "https://jamesgrams.com", 
        id: "jamesrollingrams", 
        spouseId: "kaseyalexandragrams", 
        anniversary: new Date(2017, 5, 17, 0, 0, 0),
        fatherId: "rollingenegrams",
        birthday: new Date(1995, 11, 4, 0, 0, 0, 0),
        birthplace: "Charlotte, NC, USA",
        email: "james@game103.net",
        picture: "images/jamesrollingrams.jpg"
    },
    { 
        name: "Kasey Alexandra Grams", 
        id: "kaseyalexandragrams", 
        maiden: "Kasey Alexandra Mann",
        fatherId: "davidwilliammann",
        birthday: new Date(1995, 7, 28, 0, 0, 0),
        birthplace: "Beverly, MA, USA",
        email: "jkgrams@game103.net",
        facebook: "https://www.facebook.com/musikmann95",
        picture: "images/kaseyalexandragrams.jpg"
    },
    { 
        name: "Aaron David Mann", 
        id: "aarondavidmann", 
        fatherId: "davidwilliammann",
        birthplace: "Beverly, MA, USA",
        birthday: new Date(1992, 10, 7, 0, 0, 0),
        facebook: "https://www.facebook.com/aaron.mann.986"
    },
    { 
        name: "Elisha Jameson Grams", 
        link: "https://tinybeans.com/app/#/main/journals/1241481/2019/4", 
        id: "elishajamesongrams", 
        fatherId: "jamesrollingrams",
        birthday: new Date(2019, 2, 21, 16, 30, 0),
        birthplace: "Beverly, MA, USA",
        picture: "images/elishajamesongrams3.jpg"
    },
    { 
        name: "Adalaide Alexandra Grams", 
        id: "adelaidealexandragrams", 
        fatherId: "jamesrollingrams",
        birthday: new Date(2022, 3, 11, 7, 30, 0),
        birthplace: "Huntersville, NC, USA",
        picture: "images/adalaidealexandragrams.jpg"
    },
    { 
        name: "Rachel Evelyn Davies Grams", 
        id: "rachelevelyndaviesgrams", 
        fatherId: "rollingenegrams",
        birthday: new Date(1999, 10, 10, 0, 0, 0),
        birthplace: "Oxford, UK",
        email: "rachelgrams10@gmail.com",
        instagram: "https://www.instagram.com/rachel_grams/",
        facebook: "https://www.facebook.com/profile.php?id=100014047242063",
        twitter: "https://twitter.com/rachel_grams",
        picture: "images/rachelevelyndaviesgrams.jpg"
    },
    { 
        name: "Christopher Davies", 
        id: "christopherdavies", 
        fatherId: "richarddavies",
        spouseId: "laurenholleydavies",
        birthday: new Date(1990, 11, 16, 0, 0, 0),
        birthplace: "Charlotte, NC, USA",
        anniversary: new Date(2015, 6, 20, 0, 0, 0),
        facebook: "https://www.facebook.com/chris.davies.1675",
        instagram: "https://www.instagram.com/young_davis/",
        picture: "images/christopherdavies.jpg"
    },
    { 
        name: "Lauren Holley Davies", 
        maiden: "Lauren Holley",
        id: "laurenholleydavies",
        facebook: "https://www.facebook.com/lauren.holley.9",
        instagram: "https://www.instagram.com/laurenh_davies/",
        picture: "images/laurendavies.jpg"
    },
    { 
        name: "Luke Richard Davies", 
        id: "lukericharddavies",
        fatherId: "christopherdavies",
        birthplace: "Charlotte, NC, USA",
        birthday: new Date(2017, 11, 21, 0, 0, 0),
        picture: "images/lukericharddavies.jpg"
    },
    { 
        name: "Timothy Robert Davies", 
        id: "timothyrobertdavies",
        fatherId: "christopherdavies",
        birthplace: "Charlotte, NC, USA",
        birthday: new Date(2017, 11, 21, 0, 0, 0),
        picture: "images/timothyrobertdavies.jpg"
    },
    { 
        name: "Holley Davies", 
        id: "holleydavies",
        fatherId: "christopherdavies",
        birthplace: "Charlotte, NC, USA",
        birthday: new Date(2020, 11, 1, 0, 0, 0)
    },
    { 
        name: "Timothy Davies", 
        id: "timothydavies", 
        fatherId: "richarddavies",
        birthplace: "Charlotte, NC, USA",
        facebook: "https://www.facebook.com/tim.davies.9041",
        picture: "images/timothydavies.jpg"
    },
    { 
        name: "Jon Sawyer Davies", 
        id: "jonsawyerdavies", 
        fatherId: "garyjondavies",
        birthplace: "Charlotte, NC, USA",
        instagram: "https://www.instagram.com/sawyerdavies17/",
        picture: "images/jonsawyerdavies.jpg",
        birthday: new Date(1997, 0, 18, 0, 0, 0)
    },
    { 
        name: "Elliott Davies", 
        id: "elliottdavies", 
        fatherId: "garyjondavies",
        birthplace: "Charlotte, NC, USA",
        facebook: "https://www.facebook.com/elliott.davies.779",
        instagram: "https://www.instagram.com/elliott_davies/",
        picture: "images/elliottdavies.jpg"
    },
    { 
        name: "Arden Elizabeth Davies", 
        id: "ardenelizabethdavies", 
        fatherId: "garyjondavies",
        birthplace: "Charlotte, NC, USA",
        facebook: "https://www.facebook.com/arden.davies.7",
        instagram: "https://www.instagram.com/arden.davies/",
        picture: "images/ardenelizabethdavies.jpg"
    }
];

$(document).ready( function() {

    // We need to wait until fonts are loaded, because fonts impact the size of the boxes
    // and the box sizes impact the positions of the lines that are drawn
    waitForWebfonts( ["Playfair Display"], function() {
        // Generate the events for the day
        generateEvents();

        if( $("#members").length ) {
            // We want to draw the graph now
            addChildren( null, "root", 0 );

            // calculate the height and width to make the container
            // These numbers added work, but not sure why exactly these extra values are needed
            $("#container").width( $('#members').width() + 4 );
            var $membersHeight = $('#members').height() + 4
            $("#container").height( $membersHeight );
            // 20 for the scrollbar, only 2 is needed line before
            // setting the max height of the wrapper here
            // don't have one for now
            // $("#container-wrapper").height( Math.min( $membersHeight + 20, 1000 ) ); // Up to 500px high before having scroll
            
            // Draw all the lines
            addConnections();
            
            // Center the family tree
            $('#container-wrapper').scrollLeft( $('#container').width()/2 - $('#container-wrapper').width()/2 );
        }
    } );

});
// Add children to the family tree
function addChildren( $parentElement, parentId, depth ) {
    var $members = $("#members");
    $rows = $members.find(".tree-row");

    for( var i=0; i<familyMembers.length; i++ ) {
        if( familyMembers[i].fatherId == parentId ) {
            if( !$("#" + familyMembers[i].id).length ) {// If the element does not already exist (only needed for spouses)
                var curDepth = depth;
                var $column = createPerson(familyMembers[i]);

                // allow for a custom depth to be set for a user (this can be used to start someone who isn't at the same level as the root)
                if(familyMembers[i].customDepth) {
                    while( curDepth < familyMembers[i].customDepth ) {
                        if( curDepth >= $rows.length ) {
                            var $newRow = $('<div>').addClass("tree-row");
                            $rows.push( $newRow );
                            $members.append( $newRow );
                        }
                        curDepth++;
                    }
                }
                
                // if we don't yet have a row for this depth
                // this is taken care of for custom depths above
                if( curDepth >= $rows.length ) {
                    var $newRow = $('<div>').addClass("tree-row");
                    $rows.push( $newRow );
                    $members.append( $newRow );
                }

                var $row = $($rows[curDepth]);

                $row.append( $column );
                // Add or move the spouse
                if( familyMembers[i].spouseId ) {
                    addSpouse( $column, familyMembers[i].spouseId );
                }
                addChildren( $column, familyMembers[i].id, curDepth+1 );
            }
        }
    }
}
// Add the wife after the husband (they're always neighbors)
function addSpouse( $husbandElement, spouseId ) {
    // check if there is an id
    var $spouse = $("#" + spouseId);
    if( !$spouse.length ) {
        for( var i=0; i<familyMembers.length; i++) {
            if( familyMembers[i].id == spouseId ) {
                $spouse = createPerson(familyMembers[i]);
            }
        }
    }
    $husbandElement.after($spouse);
}
// Create a person
function createPerson(member) {
    var $el = $('<div>').addClass("tree-column").attr("onclick","").attr("id", member.id).append("<a>");
    if( member.link ) {
        $el.append( $('<a>').attr('href', member.link).attr('target', '_blank').attr('rel', 'noopener').text(member.name) );
    }
    else {
        $el.text(member.name);
    }
    if( member.maiden ) {
        var $maidenDiv = $('<div>').addClass("maiden").text( "b. " + member.maiden );
        $el.append($maidenDiv);
    }
    if( member.birthday ) {
        var today = member.death ? member.death : new Date();
        var millisecondsPerYear = 31556952000;
        var yearsOld = Math.floor((today.getTime() - member.birthday.getTime())/millisecondsPerYear);
        var yearsLabel = yearsOld != 1 ? "years" : "year";
        var label = member.birthday.toLocaleDateString() + "-";
        if( member.death ) {
            label += member.death.toLocaleDateString();
        }
        label += " (" + yearsOld + " " + yearsLabel + " old)";
        var $birthdayDiv = $('<div>').text( label );
        $el.append($birthdayDiv);
    }
    if( member.birthplace ) {
        var $birthplaceDiv = $('<div>').addClass("birthplace").text( "Born in " );
        var $birthplaceLink = $('<a>').attr('href', "https://www.google.com/maps/place/" + member.birthplace).attr('target','_blank').attr('rel', 'noopener').text(member.birthplace);
        $birthplaceDiv.append($birthplaceLink);
        $el.append($birthplaceDiv);
    }
    if( member.picture ) {
        var $pictureDiv = $('<div>').addClass("picture");
        var $img = $('<img>').attr("src", "/wp-content/themes/theme/" + member.picture);
        $pictureDiv.append($img);
        $el.append($pictureDiv);
    }
    if( member.facebook || member.instagram || member.email || member.twitter ) {
        var $socialDiv = $('<div>').addClass("social");
        if( member.email ) {
            var $email = $('<a>').attr("href", "mailto:" + member.email);
            $email.append( $("<i>").addClass("fas").addClass("fa-envelope") );
            $socialDiv.append($email);
        }
        if( member.facebook ) {
            var $facebook = $('<a>').attr("href", member.facebook).attr("target", "_blank").attr('rel', 'noopener');
            $facebook.append( $("<i>").addClass("fab").addClass("fa-facebook-square") );
            $socialDiv.append($facebook);
        }
        if( member.twitter ) {
            var $twitter = $('<a>').attr("href", member.twitter).attr("target", "_blank").attr('rel', 'noopener');
            $twitter.append( $("<i>").addClass("fab").addClass("fa-twitter") );
            $socialDiv.append($twitter);
        }
        if( member.instagram ) {
            var $instagram = $('<a>').attr("href", member.instagram).attr("target", "_blank").attr('rel', 'noopener');
            $instagram.append( $("<i>").addClass("fab").addClass("fa-instagram") );
            $socialDiv.append($instagram);
        }
        $el.append($socialDiv);
    }
    return $el;
}
// Add connections
function addConnections() {
    for(var i=0;i<familyMembers.length;i++) {
        if(familyMembers[i].fatherId && familyMembers[i].fatherId != "root") {
            drawLine( $("#"+familyMembers[i].fatherId), $("#"+familyMembers[i].id), true );
        }
        if(familyMembers[i].spouseId) {
            drawLine( $("#"+familyMembers[i].spouseId), $("#"+familyMembers[i].id), false, familyMembers[i].anniversary );
        }
    }
}
// Draw line
// el1 is either father or wife
// el2 is either husband or child
function drawLine($el1, $el2, isChild, anniversary) {
    // Assumes all elements have the same padding, margin, and border on all sides
    var padding = parseInt($el1.css("paddingLeft").replace("px",""));
    var borderWidth = parseInt($el1.css("border-left-width").replace("px",""));
    // margin has more vertical than horizontal, but thats OK, since all calcualtions with margin
    // only use horizontal spacing which is what we get here.
    var margin = parseInt($el1.css("marginLeft").replace("px",""));
    // We'll include the padding with the border
    padding += borderWidth;

    // We'll need the offset of the container
    var containerOffsetTop = $('#container').offset().top;
    var containerOffsetLeft = $('#container').offset().left;

    var leftOffset = 0;
    var topOffset = 0;
    // If it is a child
    if( isChild ) {
        // Find the wife
        var $wife = $el1.next(".tree-column");

        var offset = calculateMidlineStartPosition($el1, $wife, padding, margin, containerOffsetTop);
        leftOffset = offset.leftOffset;
        topOffset = offset.topOffset;
    }

    var $svg = $("svg");

    // Create the lines
    var x1 = $el1.offset().left + ($el1.width()/2) + padding + leftOffset - containerOffsetLeft;
    var y1 = $el1.offset().top + ($el1.height()/2) + padding + topOffset - containerOffsetTop;
    var x2 = $el2.offset().left + ($el2.width()/2) + padding - containerOffsetLeft;
    var y2 = $el2.offset().top + ($el2.height()/2) + padding - containerOffsetTop;

    var $line;
    if( isChild ) {
        $line = $(document.createElementNS("http://www.w3.org/2000/svg", "path"));
        $svg.append($line);
        // note, there is 100px between rows
        $line.attr("d", "M " + x1 + " " + y1 + " V " + (y1+90) + " L " + x2 + " " + (y2-90) + " V " + y2);
    }
    else {
        $line = $(document.createElementNS("http://www.w3.org/2000/svg", "line"));
        $svg.append($line);
        // Draw the line
        $line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);
    }

    if( !isChild ) {
        $line.attr("class","marriage");
    }
    $line.css({stroke: getRandomColor()});

    // Add a caption if there is an anniversary between the husband and wife
    if( anniversary ) {
        var $text = $(document.createElementNS("http://www.w3.org/2000/svg", "text"));
        $svg.append($text);

        // Calculate the angle between the wife (y1/x1) and the husband (y2/x2)
        var angle = Math.atan( (y1-y2)/(x1-x2) ); 
        var degAngle = angle * (180/Math.PI);
        // For now, the x position will be the right of the husband box
        var x = $el2.offset().left + $el2.width() + padding * 2 - containerOffsetLeft;
        
        // We'll start with the midline start position.
        // from there, we'll place the text, but then we'll adjust it once we know its size
        // to not start at the midline, but be centered at the midline
        var offset = calculateMidlineStartPosition($el2, $el1, padding, margin, containerOffsetTop);
        leftOffset = offset.leftOffset;
        topOffset = offset.topOffset;
        var lineHorizontalLength = offset.lineHorizontalLength;
        var incline = offset.incline;

        // The y attribute of the label will be border width
        strokeWidth = parseInt($line.css("strokeWidth").replace("px",""));
        var y = y2 + topOffset - strokeWidth;
        $text.attr('x', x).attr('y', y).attr("transform", "rotate("+degAngle+","+x+","+y+")").text(anniversary.toLocaleDateString());
        
        // calculate the text width now that it is available
        var textWidth = $text[0].getBBox().width;
        var textHeight = $text[0].getBBox().height;
        // Add the margin to x (making the start the middle), then subtract textWidth/2, centering the label
        x = x + margin - textWidth/2;
        // However, since the x position impacts topOffset, we need to recalculate topOffset and y
        topOffset = (leftOffset - textWidth/2)/lineHorizontalLength * incline;
        y = y2 + topOffset - strokeWidth;
        // Make the appropriate changes
        $text.attr('x', x ).attr('y', y ).attr("transform", "rotate("+degAngle+","+x+","+y+")");
    }
}
// Calculate the midline start position between a husband and a wife
// This function can account for differences in height between the husband and wife elements
// and still find the vertical position of the midpoint.
// el1 is husband, el2 is wife
function calculateMidlineStartPosition($el1, $el2, padding, margin, containerOffsetTop) {
    // Get the left offset for the child line (we want it to be inbetween the husband and wife)
    leftOffset = $el1.width()/2 + padding + margin;
    
    // Find the vertical incline between the husband and the wife
    var incline = $el1.offset().top + ($el1.height()/2) + padding - containerOffsetTop;
    incline -= $el2.offset().top + ($el2.height()/2) + padding - containerOffsetTop;
    // If the wife element is below the husband element, incline will be negative since the wife's
    // position is greater than the husband's. However, the slope is positive, and we want the incline
    // to be positive too.
    incline = incline * -1;

    // Find the horizontal distance from the husband point to the wife point
    var lineHorizontalLength = leftOffset + ( $el2.width()/2 + padding + margin );

    // The top offset is going to be the percent the leftOffset is of the whole line
    // (the percent of the line corresponding to the husband's side), multiplied by the total
    // vertical incline.
    topOffset = leftOffset/lineHorizontalLength * incline;

    return { leftOffset: leftOffset, topOffset: topOffset, lineHorizontalLength: lineHorizontalLength, incline: incline };
}
// Generate events
function generateEvents() {
    var todayEvents = [];
    var upcomingEvents = [];
    var upcomingDays = 30;
    var todayDate = new Date();
    for( var i=0; i<familyMembers.length; i++ ) {
        var wifeName = "";

        if( familyMembers[i].birthday && formatDateComparison(familyMembers[i].birthday) == formatDateComparison(todayDate) ) {
            todayEvents.push(familyMembers[i].name + "'s birthday");
        }
        else if( familyMembers[i].birthday && compareDate(familyMembers[i].birthday, todayDate, upcomingDays) ) {
            upcomingEvents.push( {str: familyMembers[i].name + "'s birthday (" + familyMembers[i].birthday.toLocaleDateString() + ")", date: familyMembers[i].birthday} );
        }
        if( familyMembers[i].anniversary && formatDateComparison(familyMembers[i].anniversary) == formatDateComparison(todayDate) ) {
            if(!wifeName) { wifeName = getWifeName(familyMembers[i].spouseId); }
            todayEvents.push(familyMembers[i].name + " & " + wifeName + "'s anniversary");
        }
        else if( familyMembers[i].anniversary && compareDate(familyMembers[i].anniversary, todayDate, upcomingDays) ) {
            if(!wifeName) { wifeName = getWifeName(familyMembers[i].spouseId); }
            upcomingEvents.push( {str: familyMembers[i].name + " & " + wifeName + "'s anniversary  (" + familyMembers[i].anniversary.toLocaleDateString() + ")", date: familyMembers[i].anniversary} );
        }

    }

    // Sort the upcoming events by date
    upcomingEvents.sort( function(a,b) {
        var aDate = new Date(a.date);
        var bDate = new Date(b.date);
        aDate.setYear(todayDate.getFullYear());
        bDate.setYear(todayDate.getFullYear());
        // This is if their birthday is in January and we are in december
        if( aDate.getMonth() < todayDate.getMonth() ) {
            aDate.setYear( todayDate.getFullYear() + 1 );
        }
        if( bDate.getMonth() < todayDate.getMonth() ) {
            bDate.setYear( todayDate.getFullYear() + 1 );
        }
        if(aDate > bDate) return 1;
        if(bDate > aDate) return -1;
        return 0;
    } );

    // Get rid of the dates we stored
    upcomingEvents = upcomingEvents.map( function(item) {
        return item.str;
    } );
    upcomingEvents = upcomingEvents.join("<br>");
    todayEvents = todayEvents.join("<br>");

    if( !todayEvents ) {
        todayEvents = "No events today!";
    }
    if( !upcomingEvents ) {
        upcomingEvents = "No upcoming events in the next month!";
    }
    $('#today-events').html(todayEvents);
    $('#upcoming-events').html(upcomingEvents);
}
// Find a wife name
function getWifeName(wifeId) {
    var wifeName = "";
    for(var i=0;i<familyMembers.length;i++) {
        if(familyMembers[i].id == wifeId) {
            wifeName = familyMembers[i].name;
            break;
        }
    }
    return wifeName;
}
// Format date comparison
function formatDateComparison(date) {
    return date.getMonth() + "-" + date.getDate();
}
// create a date for comparison
function compareDate(eventDate, date, daysToAdd) {
    // First make the event date after the date
    eventDate = new Date(eventDate);
    eventDate.setYear( date.getFullYear() ) ;
    // This is if their birthday is in January and we are in december
    if( eventDate.getMonth() < date.getMonth() ) {
        eventDate.setYear( eventDate.getFullYear() + 1 );
    }
    var datePlusDays = new Date(date);
    datePlusDays.setDate( datePlusDays.getDate() + daysToAdd );
    if( date.getTime() < eventDate.getTime() && datePlusDays.getTime() > eventDate.getTime() ) {             
        return true;
    }
    else {
        return false;
    }
}
// Wait for a web font to load
// taken from here: https://stackoverflow.com/questions/4383226/using-jquery-to-know-when-font-face-fonts-are-loaded
function waitForWebfonts(fonts, callback) {
    var loadedFonts = 0;
    for(var i = 0, l = fonts.length; i < l; ++i) {
        (function(font) {
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position      = 'absolute';
            node.style.left          = '-10000px';
            node.style.top           = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize      = '300px';
            // Reset any font properties
            node.style.fontFamily    = 'sans-serif';
            node.style.fontVariant   = 'normal';
            node.style.fontStyle     = 'normal';
            node.style.fontWeight    = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = font + ', sans-serif';

            var interval;
            function checkFont() {
                // Compare current width with original width
                if(node && node.offsetWidth != width) {
                    ++loadedFonts;
                    node.parentNode.removeChild(node);
                    node = null;
                }

                // If all fonts have been loaded
                if(loadedFonts >= fonts.length) {
                    if(interval) {
                        clearInterval(interval);
                    }
                    if(loadedFonts == fonts.length) {
                        callback();
                        return true;
                    }
                }
            };

            if(!checkFont()) {
                interval = setInterval(checkFont, 50);
            }
        })(fonts[i]);
    }
};
// Get a random color
// Taken from here: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    // Keep generating random colors until we get one light (unlike background color)
    if( isLightColor(color) ) {
        return getRandomColor();
    }
    return color;
}
// Make sure a color has a lightness over 0.8, (background [006633] = 0.4166666666666667)
// Idea from here: https://stackoverflow.com/questions/13586999/color-difference-similarity-between-two-values-with-js
function isLightColor(hex1) {
    var rgb1 = hexToRgb(hex1);
    var hsv1 = rgbToHsv(rgb1.r, rgb1.g, rgb1.b);
    if( hsv1[2] < 0.9 ) return true; // We only want light colors
    return false;
}
// rgb to hsv 
// taken from here: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
/**
* Converts an RGB color value to HSV. Conversion formula
* adapted from http://en.wikipedia.org/wiki/HSV_color_space.
* Assumes r, g, and b are contained in the set [0, 255] and
* returns h, s, and v in the set [0, 1].
*
* @param   Number  r       The red color value
* @param   Number  g       The green color value
* @param   Number  b       The blue color value
* @return  Array           The HSV representation
*/
function rgbToHsv(r, g, b){
    r = r/255, g = g/255, b = b/255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if(max == min){
        h = 0; // achromatic
    }else{
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, v];
}
// hex to rgb
// Taken from here: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}