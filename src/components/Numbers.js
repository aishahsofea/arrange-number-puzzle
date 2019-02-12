import React, { Component } from 'reactn';
import Selections from './Selections';
import shuffleArray from './shuffleArray';

class Numbers extends Component {
  constructor(props) {
    super(props);

    this.shuffleNumbers = this.shuffleNumbers.bind(this);
    this.changeGridSize = this.changeGridSize.bind(this);
    this.changeGridAndShuffle = this.changeGridAndShuffle.bind(this);
  }

  shuffleNumbers() {
    const shuffledNum = shuffleArray(this.global.numbers);
    
    for (let i=0; i < shuffledNum.length; i++) {
      document.querySelector(`.row-${this.global.rows[i]} > .col-${this.global.cols[i]}`).innerHTML = `<div class="number">${shuffledNum[i]}</div>`;

      if (shuffledNum[i] === '') {
        this.setGlobal({
          emptySlot: [this.global.rows[i], this.global.cols[i]]
        })
      }
    }   
  }

  changeGridSize(){
    
    let size = Number(document.querySelector('#size').value);
    const numbers = [];
    const rows = [];
    const cols = [];

    for (let i=1; i < (size**2); i++) {
      numbers.push(i);
    }
    
    for (let i=1; i <= size; i++) {
      rows.push(...Array(size).fill(i));
      cols.push((i));
    }

    this.setGlobal({
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
