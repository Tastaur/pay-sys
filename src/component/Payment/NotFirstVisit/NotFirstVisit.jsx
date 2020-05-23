import React from 'react'
import s from './NotFirstVisit.module.css'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const NotFirstVisit = (props) =>{
  return(
      <div>
      <Header/>
      <Body {...props}/>
      <Footer {...props}/>
      </div>
  )
}

export default NotFirstVisit
