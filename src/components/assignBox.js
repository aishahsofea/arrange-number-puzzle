import { setGlobal, getGlobal } from 'reactn';


const assignBox = numberArray => {

  for (let i=0; i < numberArray.length; i++) {
    document.querySelector(`.row-${getGlobal().rows[i]} > .col-${getGlobal().cols[i]}`).innerHTML = `<div class="number">${numberArray[i]}</div>`;

    if (numberArray[i] === '') {
      setGlobal({
        emptySlot: [getGlobal().rows[i], getGlobal().cols[i]]
      })
    }
  }

}

export default assignBox;