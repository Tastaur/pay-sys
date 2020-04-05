import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerender = (state) =>{
    ReactDOM.render(
        <App state={state}/>,
      document.getElementById('root')
   );
}