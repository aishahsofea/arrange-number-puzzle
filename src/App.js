import React, { Component } from 'reactn';
import Containers from './components/Containers'
import './App.css';


class App extends Component {

  render() {
    console.log(this.global.number1)
    return (
      <div className="App">
        <Containers/>
      </div>
    );
  }
}

export default App;
