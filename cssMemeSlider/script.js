const slides = document.querySelector('.slides');
const controls = document.querySelectorAll('.control');
let currentIndex = 0;

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 300}px)`;
    controls.forEach((control, i) => {
        control.classList.toggle('active', i === currentIndex);
    });
}
