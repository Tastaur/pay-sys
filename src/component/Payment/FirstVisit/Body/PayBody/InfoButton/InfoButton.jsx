import React from 'react'
import s from './InfoButton.module.css'

const InfoButton = (props) =>{
  return(
      <div >
      <button onClick={()=>props.setInfo(true)} className={s.info}> i </button>
      </div>
  )
}

export default InfoButton
