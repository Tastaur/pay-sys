import React from 'react'
import s from './CardInput.module.css'

const CardInput = (props) =>{
  return(
      <div className={s.cardInput}>
        <input className={s.input} type='text' placeholder=" " maxLength='16'/>
        <label className={s.label}>Номер карты</label>
      </div>
  )
}

export default CardInput
