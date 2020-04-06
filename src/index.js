import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { startTimer } from './state/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {subscribe} from './state/state'

let rerender = () =>{
    ReactDOM.render(
        <App state={state}/>,
      document.getElementById('root')
   );
}
startTimer()
rerender(state)
subscribe(rerender)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
