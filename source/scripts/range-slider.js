const rangeSliderEl = document.querySelector('.range-slider');
const inputMinEl = document.querySelector('.range__field--min');
const inputMaxEl = document.querySelector('.range__field--max');
const inputsEl = [inputMinEl, inputMaxEl];
const initializeRangeSlider = () => {
  if (rangeSliderEl) {
    noUiSlider.create(rangeSliderEl, {
      start: [0, 900],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [980]
      }
    });
    rangeSliderEl.noUiSlider.on('update', (currentValues, handleIndex) => {
      inputsEl[handleIndex].value = Math.round(currentValues[handleIndex]) || '';
    });
    const setRangeSlider = (input, value) => {
      const rangeValues = [null, null];
      rangeValues[input] = value;
      rangeSliderEl.noUiSlider.set(rangeValues);
    };
    inputsEl.forEach((input, index) => {
      input.addEventListener('change', (event) => {
        setRangeSlider(index, event.currentTarget.value);
      });
    });
  }
};

export { initializeRangeSlider };
