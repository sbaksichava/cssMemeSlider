const slides = document.querySelector('.slides');
const controls = document.querySelectorAll('.control');
let currentIndex = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 400}px)`; // 400px — ширина слайда
  controls.forEach((control, i) => {
    control.classList.toggle('active', i === currentIndex);
  });
}

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider(); // Инициализация слайдера при загрузке страницы

