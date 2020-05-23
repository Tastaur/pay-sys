import React from 'react'
import s from './InfoButton.module.css'

const InfoButton = (props) =>{
  return(
      <div >
      <button className={s.info} onClick={()=> props.setInfo(true)}> i </button>
      </div>
  )
}

export default InfoButton
