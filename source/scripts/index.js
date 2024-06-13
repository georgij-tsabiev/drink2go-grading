const range = document.querySelector('.range');

if (range) {
  noUiSlider.create(range, {
    start: [0, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [500],
      'max': [999999]
    }
  });
}
