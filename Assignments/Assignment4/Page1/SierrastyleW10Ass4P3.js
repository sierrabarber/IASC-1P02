//JS for the Slideshow!
var slideIndex = 1;
showSlides(slideIndex);

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

// JS for the Previous / Next controls!
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// JS for the Radio Button controls!
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//This slideshow javascript was used from "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto" with automation removed and previos / next arrows added.
