const rangeSlider = document.querySelector('.range-slider');
const inputMin = document.querySelector('.range__field--min');
const inputMax = document.querySelector('.range__field--max');
const inputs = [inputMin, inputMax];
const initializeRangeSlider = () => {
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 900],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [980]
      }
    });
    rangeSlider.noUiSlider.on('update', (currentValues, handleIndex) => {
      inputs[handleIndex].value = Math.round(currentValues[handleIndex]) || '';
    });
    const setRangeSlider = (input, value) => {
      const rangeValues = [null, null];
      rangeValues[input] = value;
      rangeSlider.noUiSlider.set(rangeValues);
    };
    inputs.forEach((input, index) => {
      input.addEventListener('change', (event) => {
        setRangeSlider(index, event.currentTarget.value);
      });
    });
  }
};

export { initializeRangeSlider };
