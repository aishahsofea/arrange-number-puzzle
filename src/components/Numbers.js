import React, { Component } from 'react';
import Selections from './Selections';

const shuffleArray = (array) => {
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
    this.changeGridSize = this.changeGridSize.bind(this);
    this.changeGridAndShuffle = this.changeGridAndShuffle.bind(this);
    this.displayEmptySlot = this.displayEmptySlot.bind(this);
  }

  displayEmptySlot() {
    console.log(this.state.emptySlot)
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

  changeGridSize(){
    
    let size = Number(document.querySelector('#size').value);
    const numbers = [];
    const rows = [];
    const cols = [];

    for (let i=1; i < (size**2); i++ ) {
      numbers.push(i);
    }
    
    for (let i=1; i <= size; i++) {
      rows.push(...Array(size).fill(i));
      cols.push((i));
    }

    this.setState({
      numbers: shuffleArray(numbers.concat([''])),
      rows: rows,
      cols: Array(size).fill(cols).flat()
    })

    this.props.changeGridSize();
  }

  changeGridAndShuffle() {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 50);
    }).then(() => {
      this.changeGridSize();
    }).then(() => {
      this.shuffleNumbers();
    }).then(() => {
      this.displayEmptySlot();
    })
  }
  
  componentDidMount() {
    this.shuffleNumbers();
  }

  render() { 
    
    return (
      <div>
        <Selections changeGrid={this.changeGridAndShuffle}/>
        <button className="start-btn" onClick={this.shuffleNumbers}>Start</button>
      </div>
    )
  }
}

export default Numbers;
