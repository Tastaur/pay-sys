import React from 'react'
import SelectStatus from './component/SelectStatus/SelectStatus'
import s from './App.css'
import {HashRouter, withRouter} from 'react-router-dom'
import Payment from './component/Payment/Payment'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import store from './state/state'


const App = (props) => {
  return <div className="App">
    <SelectStatus/>
    <div className={s.wrapper}>
      <Payment {...props}/>
    </div>

  </div>
}

let PaySys = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
}
const mapStateToProps = (state) => {
  return {
    order: state.order.orderInfo,
  }
}
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {}))(App)

export default PaySys
