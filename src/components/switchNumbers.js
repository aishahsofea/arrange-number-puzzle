import {setGlobal } from 'reactn';

const switchNumbers = (numbersArr, clickedNum) => {
  
  let indexOfClickedNum = numbersArr.indexOf(clickedNum);
  let indexOfEmptyPlace = numbersArr.indexOf('');


  [numbersArr[indexOfClickedNum], numbersArr[indexOfEmptyPlace]] = [numbersArr[indexOfEmptyPlace], numbersArr[indexOfClickedNum]];
  setGlobal({
    numbers: numbersArr
  })

  return numbersArr;
}

export default switchNumbers;