import React from 'react'
import s from './Payment.module.css'
import FirstVisit from './FirstVisit/FirstVisit'
import {Route} from 'react-router-dom'
import NotFirstVisit from './NotFirstVisit/NotFirstVisit'
import ErrorPage from './ErrorPage/ErrorPage'

const Payment = (props) =>{
  return(
      <div className={s.wrapper}>
        <Route path='/index'
        render={() => <FirstVisit {...props} />}/>
        <Route  path='/notFirst'
        render={() => <NotFirstVisit {...props}/>}/>
        <Route path='/err'
        render={() => <ErrorPage/>}/>
      </div>
  )
}
export default Payment
