const slides = document.querySelectorAll('.slides .slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.onclick = () => {
    console.log('');
    nextSlide();
};
previous.onclick = () => {
    previousSlide();
};

