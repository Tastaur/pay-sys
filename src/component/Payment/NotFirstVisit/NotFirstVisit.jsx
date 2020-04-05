import React from 'react'
import s from './NotFirstVisit.module.css'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const NotFirstVisit = (props) =>{
  return(
      <div>
      <Header/>
      <Body state={props.state}/>
      <Footer/>
      </div>
  )
}

export default NotFirstVisit
