import React, { Component } from 'react';
import Numbers from './Numbers'

class Containers extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const row = event.target.parentElement.parentElement.className.split(" ")[1];
    const col = event.target.parentElement.className.split(" ")[1]
    console.log(`ROW: ${row} and COL: ${col} -> ${event.target.innerText}`);
  }

  handle
  render() {
    return (
      <div>
        <Numbers/>
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