//JS for the slideshow, slides change every 3 seconds!
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

//This slideshow javascript was used from "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto" but with radio buttons removed.
