import React, { Component } from 'reactn';
import Numbers from './Numbers';
import gameLogic from './gameLogic';
import '../App.css';
import shuffleArray from './shuffleArray';

class Containers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.modifyGrid = this.modifyGrid.bind(this);

  }

  handleClick = event => {
    const row = Number(event.target.parentElement.parentElement.className.split(" ")[1].substr(-1));
    const col = Number(event.target.parentElement.className.split(" ")[1].substr(-1));
    console.log(`row ${row} and col ${col} => ${event.target.innerText}`);

    const arrangedNum = shuffleArray(this.global.numbers);
    
    for (let i=0; i < arrangedNum.length; i++) {
      document.querySelector(`.row-${this.global.rows[i]} > .col-${this.global.cols[i]}`).innerHTML = `<div class="number">${arrangedNum[i]}</div>`;
    }
 
    gameLogic(row, col, this.global.emptySlot);
  }

  modifyGrid = () => {
    let size = Number(document.querySelector('#size').value);
    const sizes = [];
    let colMarkup;
    let rowMarkup;

    for (let i=1; i <= size; i++) {
      sizes.push(i)
    }

    colMarkup = sizes.map(num => {
      return (
        <div className={`col col-${num}`} onClick={this.handleClick}></div>
      )
    })

    rowMarkup = sizes.map(num => {
      return (
        <div>
          <div className={`row row-${num}`}>
            {colMarkup}
          </div>
        </div>

      )
    })

    this.setGlobal({
      markup: <div>{rowMarkup}</div> 
    })
  }

  componentWillMount() {
    let rowArr = this.global.markup.props.children;
    let markup;
  
    for (let i=0; i < rowArr.length; i++) {
  
      markup = React.Children.map(rowArr[i].props.children, elem => 
        React.cloneElement(elem, {
          onClick: this.handleClick
        }))
    }
  
    let completeMarkup = React.Children.map(rowArr, arr => 
      React.cloneElement(arr, {
        children: markup
      }))
  
    this.setGlobal({
      markup: completeMarkup
    })
  }

  render() {
    



    return (
      <div>
        <Numbers changeGridSize={this.modifyGrid} />
        <div className="container">
          {this.global.markup}
        </div>
      </div>
    )
  }
}

export default Containers;
