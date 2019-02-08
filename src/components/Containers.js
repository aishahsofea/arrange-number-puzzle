import React, { Component } from 'reactn';
import Numbers from './Numbers';
import '../App.css'

class Containers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.state = {
    //   markup: 
    //     <div>
    //       <div className="row row-1">
    //         <div className="col col-1" onClick={this.handleClick}></div>
    //         <div className="col col-2" onClick={this.handleClick}></div>
    //         <div className="col col-3" onClick={this.handleClick}></div>
    //       </div>
        
    //       <div className="row row-2">
    //         <div className="col col-1" onClick={this.handleClick}></div>
    //         <div className="col col-2" onClick={this.handleClick}></div>
    //         <div className="col col-3" onClick={this.handleClick}></div>
    //       </div>
        
    //       <div className="row row-3">
    //         <div className="col col-1" onClick={this.handleClick}></div>
    //         <div className="col col-2" onClick={this.handleClick}></div>
    //         <div className="col col-3" onClick={this.handleClick}></div>
    //       </div>
    //     </div>
    // }
    
    this.modifyGrid = this.modifyGrid.bind(this);
  }


  handleClick(event) {
    event.preventDefault();
    const row = event.target.parentElement.parentElement.className.split(" ")[1];
    const col = event.target.parentElement.className.split(" ")[1];
    console.log(`${row} and ${col} => ${event.target.innerText}`);
    console.log(this.global.emptySlot);

    

  }


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
        <div>
          <div className={`row row-${num}`}>
            {colMarkup}
          </div>
        </div>

      )
    })

    this.setGlobal({
      markup: rowMarkup
    })
  }

  componentDidMount() {


    
    console.log(this.global.markup.props.children);


    let newMarkup = React.Children.map(this.global.markup.props.children, arr => 
      React.cloneElement(arr, {
        onClick: this.handleClick
      }))

    console.log(newMarkup)

    let myMarkup = React.Children.map(this.global.markup.props.children, arr => 
      React.Children.map(arr.props.children, elem => 
        React.cloneElement(elem, {
          onClick: this.handleClick
        })))

    console.log(myMarkup)

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
