import { toggleMobileMenu } from './mobile-menu.js';
import { initializeSlider } from './slider.js';
import { initializeRangeSlider } from './range-slider.js';
import { togglePrevNextVisibility } from './pagination-button-visibility.js';

toggleMobileMenu(); // Переключаем видимость меню мобильной навигации
initializeSlider(); // Инициализируем основной слайдер
initializeRangeSlider(); // Инициализируем рендж-слайдер для выбора цены
togglePrevNextVisibility(); // Переключаем видимость кнопок «Назад» и «Вперёд» в пагинации
