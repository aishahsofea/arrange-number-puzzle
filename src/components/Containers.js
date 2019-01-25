import React, { Component } from 'react';
import Numbers from './Numbers';
import '../App.css'

class Containers extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.modifyGrid = this.modifyGrid.bind(this);
  }

  handleClick(event) {
    const row = event.target.parentElement.parentElement.className.split(" ")[1];
    const col = event.target.parentElement.className.split(" ")[1]
    console.log(`ROW: ${row} and COL: ${col} -> ${event.target.innerText}`);
  }

  // modifyGrid() {
  //   let size = Number(document.querySelector('#size').value);
  //   let colMarkup = '';
  //   let rowMarkup = '';
    
  //   for (let i=1; i <= size; i++) {
  //     colMarkup += `
  //       <div class="col col-${i}"></div>
  //     `
  //   }

  //   for (let i=1; i <= size; i++) {
  //     rowMarkup += `
  //       <div class="row row-${i}">
  //         ${colMarkup}
  //       </div>
  //     `
  //   }

  //   document.querySelector('.container').innerHTML = rowMarkup;
  // }

  modifyGrid() {
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
        <div className={`row row-${num}`}>
          {colMarkup}
        </div>
      )
    })

    console.log(rowMarkup);

  }

  render() {
    
    return (
      <div>
        <Numbers changeGridSize={this.modifyGrid} />
        <div className="container">
          <div className="row row-1">
            <div className="col col-1" onClick={this.handleClick}></div>
            <div className="col col-2" onClick={this.handleClick}></div>
            <div className="col col-3" onClick={this.handleClick}></div>
          </div>
        
          <div className="row row-2">
            <div className="col col-1" onClick={this.handleClick}></div>
            <div className="col col-2" onClick={this.handleClick}></div>
            <div className="col col-3" onClick={this.handleClick}></div>
          </div>
        
          <div className="row row-3">
            <div className="col col-1" onClick={this.handleClick}></div>
            <div className="col col-2" onClick={this.handleClick}></div>
            <div className="col col-3" onClick={this.handleClick}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Containers;

// changeGridSize={this.modifyGrid}

// <div className="row row-1">
//             <div className="col col-1" onClick={this.handleClick}></div>
//             <div className="col col-2" onClick={this.handleClick}></div>
//             <div className="col col-3" onClick={this.handleClick}></div>
//           </div>
        
//           <div className="row row-2">
//             <div className="col col-1" onClick={this.handleClick}></div>
//             <div className="col col-2" onClick={this.handleClick}></div>
//             <div className="col col-3" onClick={this.handleClick}></div>
//           </div>
        
//           <div className="row row-3">
//             <div className="col col-1" onClick={this.handleClick}></div>
//             <div className="col col-2" onClick={this.handleClick}></div>
//             <div className="col col-3" onClick={this.handleClick}></div>
//           </div>