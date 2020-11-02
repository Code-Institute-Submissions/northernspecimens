/* this javascript allows the burger button and its child elements to expand and show the links https://vanilla-js-basic-project-4-navbar.netlify.app/ by John Smilga*/
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    links.classList.toggle("show-links");
});

/*J Query date picker from https://jqueryui.com/datepicker/*/
$(function() {
    $("#datepicker").datepicker();
});
/*javascript for the google maps API thanks to Code Institute, /*https://stackoverflow.com/questions/38662789/google-maps-js-example-not-showing thank you to scaisEdge for helping with Google API and /*https://developers.google.com/maps/documentation/javascript/marker-clustering?hl=en_US and
https://developers.google.com/maps/documentation/javascript/examples/map-simple*/
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 53.8060835,
            lng: -1.6057715
        },
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
var locations = [{
        lat: 53.9046171,
        lng: -1.7096875
    },
    {
        lat: 54.0724437,
        lng: -2.0037134
    },
    {
        lat: 53.9586419,
        lng: -1.1156109
    },
    {
        lat: 53.9940619,
        lng: -1.563934
    },
    {
        lat: 53.9552604,
        lng: -2.0395033
    },
    {
        lat: 53.9201868,
        lng: -1.8409911
    },
    {
        lat: 53.843432,
        lng: -1.6779166
    }
];

/*this javascript is for the courses toggle buttons on the courses.html page https://api.jqueryui.com/toggle/ was used and tested to create this code and https://getbootstrap.com/docs/4.0/components/collapse/ and some helpful tips off https://stackoverflow.com/questions/43168193/how-to-toggle-each-button-separately-on-multiple-buttons user Pablo*/

$(".hide").click(function(){
    $("#hidden p").toggle("blind", 1000);
});

$(".hide-two").click(function() {
    $("#hidden-one p").toggle("blind", 1000);
});

$(".hide-three").click(function() {
    $("#hidden-two p").toggle("blind", 1000);
});


//this js code was taken from s3schools to create an automatic slideshow on the home page under "Our Services" https://www.w3schools.com/w3css/w3css_slideshow.asp//
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}
$("mySlides").fadeOut(1000, linear, function() {});

/*Thank you to this coder who introduced me to redirecting the form https://stackoverflow.com/questions/44628146/how-can-i-make-php-redirect-after-email-message-was-sent/44628879 by user1752065 and who helped resolve an error https://stackoverflow.com/questions/50011443/tslint-how-to-disable-error-somevariable-is-declared-but-its-value-is-never-rea user Rachit Rawat*/

function sendMail(_contactForm) {
    emailjs.send("gmail", "specimens", {
name: "Chelsey Duffin",
from_email: "northernspecimens@gmail.com",
from_name: "Northern Specimens",
reply_to: "northernspecimens@gmail.com",
        })
        .then(
            function(_response) {
                alert("Thank you!");
            window.location.href = 'thank.html';
            },
            function(_error) {
                alert("Please resubmit");
            }
        );
    return false;
}


/*javascript conditional statements for booking page https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript-jquery-or-vanilla user Alex Peattie*/
function pressedOne() {
    // Get the checkbox
    var checkBoxBeg = document.getElementById("beginner");

    // If the checkbox is checked, display the output text
    if (checkBoxBeg.checked == true) {
        alert("Sorry, this course is full. Please select another");
    } else {
        document.getElementById("beginner").checked = false;
    }
}

function pressedTwo() {
    // Get the checkbox
    var checkBoxInt = document.getElementById("intermediate");

    // If the checkbox is checked, display the output text
    if (checkBoxInt.checked == true) {
        alert("This course is available, please select a date");
    } else {
        document.getElementById("intermediate").checked = false;
    }
}

function pressedThree() {
    // Get the checkbox
    var checkBoxAdv = document.getElementById("advanced");

    // If the checkbox is checked, display the output text
    if (checkBoxAdv.checked == true) {
        alert("This course is available, please select a date");
    } else {
        document.getElementById("advanced").checked = false;
    }
}

function pressedFour() {
    // Get the checkbox
    var checkBoxRep = document.getElementById("reptiles");

    // If the checkbox is checked, display the output text
    if (checkBoxRep.checked == true) {
        alert("Sorry, this course is full. Please select another");
    } else {
        document.getElementById("repiles").checked = false;
    }
}

function pressedFive() {
    // Get the checkbox
    var checkBoxBir = document.getElementById("birds");

    // If the checkbox is checked, display the output text
    if (checkBoxBir.checked == true) {
        alert("This course is available, please select a date");
    } else {
        document.getElementById("birds").checked = false;
    }
}


function pressedSix() {
    // Get the checkbox
    var checkBoxMam = document.getElementById("mammals");

    // If the checkbox is checked, display the output text
    if (checkBoxMam.checked == true) {
        alert("This course is available, please select a date");
    } else {
        document.getElementById("mammals").checked = false;
    }
}
