const range = document.querySelector('.range');

if (range) {
  noUiSlider.create(range, {
    start: [0, 1000],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [1000]
    }
  });
}
