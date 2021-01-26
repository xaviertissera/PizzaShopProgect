//page - index slider js file

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;//variable declaration
    var slides = document.getElementsByClassName("mySlides");//get element by id
    var dots = document.getElementsByClassName("dot");//get element by id
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for loop to replace
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //css schanges
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//end of the slider.js