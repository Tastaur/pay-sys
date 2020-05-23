import React from 'react'
import s from './InfoBlock.module.css'

const InfoBlock = (props) =>{
  return(
      <div className={s.infoBlock}>
      <div className={s.infoDiscription}>Последние 3 цифры на обороте карты</div>
        <button onClick={()=>props.setInfo(false)} className={s.infoButton}> X </button>
      </div>
  )
}

export default InfoBlock
