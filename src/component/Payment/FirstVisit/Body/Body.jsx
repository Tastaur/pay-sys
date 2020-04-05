import React from 'react'
import s from './Body.module.css'
import PayHeader from './PayHeader/PayHeader'
import PayBody from './PayBody/PayBody'

const Body = (props) =>{
  return(
      <div>
        <PayHeader state={props.state}/>
        <PayBody/>
      </div>
  )
}

export default Body
