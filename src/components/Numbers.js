import React, { Component } from 'react';
import Selections from './Selections';

let shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class Numbers extends Component {
  constructor() {
    super();
    this.state = {
      numbers: shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, '']),
      rows: [1, 1, 1, 2, 2, 2, 3, 3, 3],
      cols: [1, 2, 3, 1, 2, 3, 1, 2, 3],
    }
    this.shuffleNumbers = this.shuffleNumbers.bind(this);
  }

  shuffleNumbers() {

    const shuffledNum = shuffleArray(this.state.numbers);

    for (let i=0; i < shuffledNum.length; i++) {
      document.querySelector(`.row-${this.state.rows[i]} > .col-${this.state.cols[i]}`).innerHTML = `<div class="number">${shuffledNum[i]}</div>`;

      if (document.querySelector(`.row-${this.state.rows[i]} > .col-${this.state.cols[i]}`).innerHTML === `<div class="number"></div>`) {
        this.setState({
          emptySlot: [this.state.rows[i], this.state.cols[i]]
        })
      }
    }
    
  }

  componentDidMount() {
    this.shuffleNumbers()
  }

  render() { 
    console.log(this.state)   
    return (
      <div>
        <Selections/>
        <button className="start-btn" onClick={this.shuffleNumbers}>Start</button>
      </div>
    )
  }
}

export default Numbers;