import React from 'react';
import SelectStatus from './component/SelectStatus/SelectStatus'
import s from './App.css'
import {BrowserRouter} from 'react-router-dom'
import Payment from './component/Payment/Payment'

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <SelectStatus/>
      <div className={s.wrapper} >
        <Payment state={props.state} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
