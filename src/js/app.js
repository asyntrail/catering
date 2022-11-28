function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
}

document.getElementById('toggle-btn').onclick = toggleSidebar;



let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
document.getElementById('arrowPrew').onclick = function() { plusSlides(-1) };
document.getElementById('arrowNext').onclick = function() { plusSlides(1) };
document.getElementById('slide1').onclick = function() { currentSlide(1) };
document.getElementById('slide2').onclick = function() { currentSlide(2) };
document.getElementById('slide3').onclick = function() { currentSlide(3) };