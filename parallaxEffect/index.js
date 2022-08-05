const firstSquare = document.querySelector('#firstSquare');
const secondSquare = document.querySelector('#secondSquare');
const radioButtons = document.querySelectorAll('input[name=squareId]');
const fileInput = document.querySelector('input[type=file]');
const squaresBlock = document.querySelector('.squaresBlock');

const squaresBlockInnerAvailableHeight = squaresBlock.offsetHeight - firstSquare.offsetHeight
const squaresBlockOuterAvailableHeight = squaresBlock.scrollHeight - squaresBlock.offsetHeight;
const heightsRatio = squaresBlockInnerAvailableHeight / squaresBlockOuterAvailableHeight;

document.querySelector('.squaresBlock').addEventListener('scroll', () => {
  // FIXME лишний отступ
  let innerTopGap = squaresBlock.scrollTop * heightsRatio;
  let speedCoefficient = squaresBlock.scrollTop / squaresBlockOuterAvailableHeight;

  firstSquare.style.top = `${ innerTopGap }px`;
  secondSquare.style.top = `${ innerTopGap * speedCoefficient}px`;
})

// FIXME не чистая функция
function setBackgroundImage(targetSquare, image) {
  const img =  window.URL.createObjectURL(image);
  targetSquare.style.backgroundImage = `url(${img})`;
}

fileInput.addEventListener('change', (e) => {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      // FIXME добавь еще 2 квадрата и 2 инпута, при этом background-size у первого должен быть 25%, у второго 15%, у третьего 100%, а у четвертого 75%
      switch (radioButton.value) {
        case ('firstSquare') : setBackgroundImage(firstSquare, e.target.files[0]); break
        case ('secondSquare') : setBackgroundImage(secondSquare, e.target.files[0]); break
      }
    }
  }

});
