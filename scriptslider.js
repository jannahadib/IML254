let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function updateSlider() {
    document.querySelector('.slider').style.transform = `translateX(${-currentSlide * 100}%)`;
}
