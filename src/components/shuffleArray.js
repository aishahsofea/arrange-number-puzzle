const shuffleArrayFix = (numbersArr) => {
  
  const numbers = [...numbersArr];
  const len = numbers.length;
  let chunkedNumbers = [];

  while (numbers.length) {
    chunkedNumbers.push(numbers.splice(0, Math.sqrt(len)));
  }
  console.log(chunkedNumbers);
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  shuffleArrayFix([1,2,3,4])
  return array;
}

export default shuffleArray;