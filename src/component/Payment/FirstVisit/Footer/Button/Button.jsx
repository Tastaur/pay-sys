import React from 'react'
import s from './Button.module.css'

const Button = (props) =>{
  return(
      <div className={s.wrapper}>
        <button className={s.item}>Оплатить</button>
      </div>
  )
}
export default Button
