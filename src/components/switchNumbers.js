import {setGlobal} from 'reactn';

const movable = (clickedNum, emptySlot) => {
  
  let row = clickedNum[0];
  let col = clickedNum[1];

  let movingPos = [clickedNum]

  if (row === emptySlot[0]) {
    let diff = col - emptySlot[1];
    if (diff > 0) {
      for (let i=1; i < diff; i++) {
        movingPos.push([row, col-i])
      }
      
    } else if (diff < 0) {
      for (let i=1; i < Math.abs(diff); i++) {
        movingPos.push([row, col+i])
      }
    }
    movingPos.push(emptySlot)
    
  }

  if (col === emptySlot[1]) {
    let diff = row - emptySlot[0];
    if (diff > 0) {
      for (let i=1; i < diff; i++) {
        movingPos.push([row-i, col])
      }
    } else if (diff < 0) {
      for (let i=1; i < Math.abs(diff); i++) {
        movingPos.push([row+i, col])
      }
    }
    movingPos.push(emptySlot);
  }

  return movingPos;
}

const rearrangeNumber = initialArr => {
  let modifiedList = [''];
  initialArr.pop();
  modifiedList.push(...initialArr);

  return modifiedList;
}

const switchNumbers = (numbersArr, clickedNum) => {
  

  const numbers = [...numbersArr];
  const len = numbers.length;
  let chunkedNumbers = [];
  
  let clickedNumRow;
  let clickedNumCol;
  
  let emptySlotRow;
  let emptySlotCol;

  while (numbers.length) {
    chunkedNumbers.push(numbers.splice(0, Math.sqrt(len)));
  }
  
  chunkedNumbers.forEach((x, index) => {
    if (x.includes(clickedNum)) {
      clickedNumRow = index;
      clickedNumCol = chunkedNumbers[index].indexOf(clickedNum);
    }
    if (x.includes('')) {
      emptySlotRow = index;
      emptySlotCol = chunkedNumbers[index].indexOf('');
    }
  })
  
  let clickedNumPos = [clickedNumRow, clickedNumCol];
  let emptySlotPos = [emptySlotRow, emptySlotCol]
  let movingPos = movable(clickedNumPos, emptySlotPos);
  let intialNumList = [];

  (movingPos).forEach(pos => {
    intialNumList.push(chunkedNumbers[pos[0]][pos[1]]);
  })

  let modifiedNumList = rearrangeNumber(intialNumList);

  let modifiedChunk = [...chunkedNumbers];
  console.log(modifiedChunk);

  (movingPos).forEach((pos, index) => {
    modifiedChunk[pos[0]][pos[1]] = modifiedNumList[index];
  });


  console.log(modifiedChunk);
  setGlobal({
      numbers: modifiedChunk.flat()
    })
  return (modifiedChunk.flat());
}

export default switchNumbers;