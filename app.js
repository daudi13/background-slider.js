const body = document.body
const slides = document.querySelectorAll('.slide');
const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right');

let activeSlide = 1;

btnRight.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) activeSlide = 0
    
    setBgToBody();
    setActiveSlides( )
})

btnLeft.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0 ) activeSlide = slides.length

    setBgToBody();
    setActiveSlides();
})

setBgToBody()
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })


    slides[activeSlide].classList.add('active')
}