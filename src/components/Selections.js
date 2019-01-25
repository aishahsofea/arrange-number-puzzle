import React, { Component } from 'react';

class Selections extends Component {
  constructor() {
    super();
    this.state = {
      value: 3
    }
    this.changeSize = this.changeSize.bind(this);
  }

  changeSize(event) {
    this.setState({
      value: event.target.value
    })
    this.props.changeGrid();
  }

  render() {
    return (
      <div>
        <select id="size" onChange={this.changeSize} value={this.state.value}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    )
  }
}

export default Selections;