// this javascript allows the burger button and its child elements to expand and show the links//
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

 $( function() {
    $( "#datepicker" ).datepicker();
  } );

  function validateForm() {
  var x = document.forms["myForm"].value;
  if (x == "") {
    alert("Please enter details");
    return false;
  }
}



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

/*this javascript is for the reviews section*/


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