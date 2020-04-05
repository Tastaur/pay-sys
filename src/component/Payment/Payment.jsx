import React from 'react'
import s from './Payment.module.css'
import FirstVisit from './FirstVisit/FirstVisit'
import Route from 'react-router-dom/es/Route'
import NotFirstVisit from './NotFirstVisit/NotFirstVisit'
import ErrorPage from './ErrorPage/ErrorPage'

const Payment = (props) =>{
  return(
      <div className={s.wrapper}>
        <Route path='/index'
        render={() => <FirstVisit state={props.state}/>}/>
        <Route  path='/notFirst'
        render={() => <NotFirstVisit state={props.state}/>}/>
        <Route path='/err'
        render={() => <ErrorPage/>}/>
      </div>
  )
}
export default Payment
