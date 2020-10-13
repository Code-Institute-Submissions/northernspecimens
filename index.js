// this javascript allows the burger button and its child elements to expand and show the links//
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

/*javascript for the google maps API thanks to Code Institute, /*https://stackoverflow.com/questions/38662789/google-maps-js-example-not-showing thank you to scaisEdge for helping with Google API and /*https://developers.google.com/maps/documentation/javascript/marker-clustering?hl=en_US and https://jsfiddle.net/api/post/library/pure/*/


var map
function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 53.8060835, lng: -1.6057715 },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
          var locations = [
              {lat: 53.9046171, lng: -1.7096875},
              {lat: 54.0724437, lng: -2.0037134},
              {lat: 53.9586419, lng: -1.1156109},
              {lat: 53.9940619, lng: -1.563934},
              {lat: 53.9552604, lng: -2.0395033},
              {lat: 53.9201868, lng: -1.8409911}
              ];

/*this javascript is for the courses toggle buttons on the courses.html page https://api.jqueryui.com/toggle/ was used and tested to create this code*/

$( "button" ).click(function() {
  $( "#hidden p" ).toggle( "blind", 1000 );
});

$( "button" ).click(function() {
  $( "#hidden-one p" ).toggle( "blind", 1000 );
});

$( "button" ).click(function() {
  $( "#hidden-two p" ).toggle( "blind", 1000 );
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
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); 
}
$("mySlides").fadeOut(1000,linear,function(){
});

/*this is javascript for the toggle buttons on the courses page*/


/*Javascript for the date picker on the book.html page*/

 $( function() {
    $( "#datepicker" ).datepicker();
  });


/*this javascript is for the reviews section*/
function sendMail(contactform) {
    emailjs.send("gmail, Specimens", {
        "from_name": contactform.name.value,
        "from_email": contactform.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function (error) {
            console.log("Failed resposne", error);

    });
}

/*This javascript will produce the hidden div containing the form to order the taxidermy courses*/ 


function myFunction() {
  var x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction() {
   var element = document.getElementById("myDIV");
   element.classList.toggle("mystyle");
}
