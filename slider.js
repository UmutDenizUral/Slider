const slides = document.querySelectorAll('.slide')
const bullets = document.querySelectorAll('.slider-pagination-bullet');
const paginationBullets = document.querySelectorAll('.slider-pagination-bullet')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const auto = true
const intervalTime = 5000
let slideInterval


const nextSlide = () => {
    let activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active')

    if (activeSlide.nextElementSibling.classList.contains('slide')) {
        activeSlide.nextElementSibling.classList.add('active')
    }
    else {
        slides[0].classList.add('active')
    }
}
const prevSlide = () => {
    let activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active')
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active')
    }
    else {
        slides[slides.length - 1].classList.add('active')
    }
}
const goToSlide = (slideIndex) => {
    slides.forEach((slide, index) => {
        if (index + 1 == slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}
prev.addEventListener('click', () => {
    prevSlide()
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
}
)
next.addEventListener('click', () => {
    nextSlide()
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})
bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        let slideIndex = parseInt(bullet.getAttribute('data-slide'));
        goToSlide(slideIndex);
        if (auto) {
            clearInterval(slideInterval)
            slideInterval = setInterval(nextSlide, intervalTime)
        }
    });
});
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}