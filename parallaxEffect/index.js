const firstSquare = document.querySelector('#firstSquare');
const secondSquare = document.querySelector('#secondSquare');
const thirdSquare = document.querySelector('#thirdSquare');
const fourthSquare = document.querySelector('#fourthSquare');
const radioButtons = document.querySelectorAll('input[name=squareId]');
const fileInput = document.querySelector('input[type=file]');
const squaresBlock = document.querySelector('.squaresBlock');
const dict = {
  'firstSquare': {
    element: firstSquare,
    styles: {
      "background-size": '25%',
    }
  } ,
  'secondSquare': {
    element: secondSquare,
    styles: {
      "background-size": '15%',
    }
  } ,
  'thirdSquare': {
    element: thirdSquare,
    styles: {
      "background-size": '100%',
    }
  } ,
  'fourthSquare': {
    element: fourthSquare,
    styles: {
      "background-size": '75%',
    }
  } ,
}

const squaresBlockInnerAvailableHeight = squaresBlock.offsetHeight - firstSquare.offsetHeight
const squaresBlockOuterAvailableHeight = squaresBlock.scrollHeight - squaresBlock.offsetHeight;
const heightsRatio = squaresBlockInnerAvailableHeight / squaresBlockOuterAvailableHeight;

document.querySelector('.squaresBlock').addEventListener('scroll', () => {
  let innerTopGap = squaresBlock.scrollTop * heightsRatio;
  let speedCoefficient = squaresBlock.scrollTop / squaresBlockOuterAvailableHeight;

  firstSquare.style.top = `${ innerTopGap }px`;
  secondSquare.style.top = `${ innerTopGap * speedCoefficient}px`;
  thirdSquare.style.top =  `${ innerTopGap * speedCoefficient  * speedCoefficient }px`;
  fourthSquare.style.top = `${ innerTopGap * speedCoefficient  * speedCoefficient  * speedCoefficient}px`;
})

function setBackgroundImage(targetSquare, image) {
  const img =  window.URL.createObjectURL(image);
  dict[targetSquare].element.style.backgroundImage = `url(${img})`;
  const dictKeys = Object.keys(dict[targetSquare].styles);
  dictKeys.map( key =>  dict[targetSquare].element.style[key] = `${dict[targetSquare].styles[key]}`)
}

fileInput.addEventListener('change', (event) => {
  const radioButtonsArray = [...radioButtons];
  radioButtonsArray.map((radioButton) => {
    if (radioButton.checked) setBackgroundImage(radioButton.value, event.target.files[0])
  })
});
