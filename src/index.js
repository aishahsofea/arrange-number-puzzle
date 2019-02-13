import React from 'reactn';
import { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import shuffleArray from './components/shuffleArray';


setGlobal({
  numbers: shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, '']),
  rows: [1, 1, 1, 2, 2, 2, 3, 3, 3],
  cols: [1, 2, 3, 1, 2, 3, 1, 2, 3],
  markup: 
    <div>
      <div className="row row-1">
        <div className="col col-1"></div>
        <div className="col col-2"></div>
        <div className="col col-3"></div>
      </div>

      <div className="row row-2">
        <div className="col col-1"></div>
        <div className="col col-2"></div>
        <div className="col col-3"></div>
      </div>

      <div className="row row-3">
        <div className="col col-1"></div>
        <div className="col col-2"></div>
        <div className="col col-3"></div>
      </div>
    </div>,
})




ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
