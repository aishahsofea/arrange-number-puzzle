import React, { Component } from 'reactn';
import Numbers from './Numbers';
import gameLogic from './gameLogic';
import assignBox from './assignBox';
import switchNumbers from './switchNumbers';
import '../App.css';


class Containers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.modifyGrid = this.modifyGrid.bind(this);
    this.isSorted = this.isSorted.bind(this);
  }

  isSorted = numArr => {
    const nonSortedArr = numArr.join();
    let sortedArr = [...numArr].sort().concat('').slice(1).join();
    return nonSortedArr === sortedArr;
  }

  handleClick = event => {
    const row = Number(event.target.parentElement.parentElement.className.split(" ")[1].substr(-1));
    const col = Number(event.target.parentElement.className.split(" ")[1].substr(-1));
    const clickedNum = Number(event.target.innerText);
    let numArr = this.global.numbers;
    
    console.log(`row ${row} and col ${col} => ${clickedNum}`);
    console.log(numArr);
    
    if (gameLogic(row, col, this.global.emptySlot)) {
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 50);
      }).then(() => {
        assignBox(switchNumbers(numArr, clickedNum));
      }).then(() => {
        console.log(numArr);
        if (this.isSorted(numArr)) {
          console.log('you won')
        }
      })
      
    }
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
