import { setGlobal, getGlobal } from 'reactn';
import Numbers from './Numbers';

const gameLogic = (row, col, emptySlot) => {

  if (row === emptySlot[0]) {
  
    if ((col - emptySlot[1]) >= 0) {
      console.log(`move left: ${col - emptySlot[1]} box(es) away from empty slot`);
    } else {
      console.log(`move right: ${Math.abs(col - emptySlot[1])} box(es) away from empty slot`);
    }
    return true;
  }

  if (col === emptySlot[1]) {
    if ((row - emptySlot[0]) >= 0) {
      console.log(`move up: ${row - emptySlot[0]} box(es) away from empty slot`);
    } else {
      console.log(`move down: ${Math.abs(row - emptySlot[0])} box(es) away from empty slot`);
    }
    return true;
  }

  console.log(getGlobal().emptySlot)
  return false;

}

export default gameLogic;