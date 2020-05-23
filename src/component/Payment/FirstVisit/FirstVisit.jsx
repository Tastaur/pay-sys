import React from 'react'
import s from './FirstVisit.module.css'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const FirstVisit = (props) =>{
  return(
      <div className={s.wrapper}>
      <Header/>
      <Body {...props}/>
      <Footer {...props}/>
      </div>
  )
}

export default FirstVisit
