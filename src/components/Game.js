import React, { Component } from 'react'; 

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(event) {
    const row = event.target.parentElement.parentElement.className.split(" ")[1];
    const col = event.target.parentElement.className.split(" ")[1]
    console.log(`ROW: ${row} and COL: ${col} -> ${event.target.innerText}`);
  }
}

export default Game;