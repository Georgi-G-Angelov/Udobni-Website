$(document).ready(function () {
  $("#s1").show();
  $("#s2").show();
  currentSlide1(1);
  currentSlide2(1);
  $("#slideshow1").hide();
  $("#slideshow2").hide();
});


var slideIndex = 1;
showSlides(1);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




var slideIndex1 = 1;
showSlides1(slideIndex1);
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}
function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}




var slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}


function show0() {
    $("#slideshow0").show();
    $("#slideshow1").hide();
    $("#slideshow2").hide();
    document.getElementById("show0").className +=" activeButton";
    while(document.getElementById("show1").className.length > 12 || document.getElementById("show2").className.length > 12){
    document.getElementById("show1").className = document.getElementById("show1").className.replace(" activeButton", "");
    document.getElementById("show2").className = document.getElementById("show2").className.replace(" activeButton", "");
    }
}

function show1() {
    $("#slideshow0").hide();
    $("#slideshow1").show();
    $("#slideshow2").hide();
    document.getElementById("show1").className +=" activeButton";
    while(document.getElementById("show0").className.length > 12 || document.getElementById("show2").className.length > 12){
    document.getElementById("show0").className = document.getElementById("show0").className.replace(" activeButton", "");
    document.getElementById("show2").className = document.getElementById("show2").className.replace(" activeButton", "");
    }
}

function show2() {
    $("#slideshow0").hide();
    $("#slideshow1").hide();
    $("#slideshow2").show();
    document.getElementById("show2").className +=" activeButton";
    while(document.getElementById("show1").className.length > 12 || document.getElementById("show0").className.length > 12){
    document.getElementById("show0").className = document.getElementById("show0").className.replace(" activeButton", "");
    document.getElementById("show1").className = document.getElementById("show1").className.replace(" activeButton", "");
    }
}


function toggle() {
  $(".navtext").toggle();
}
