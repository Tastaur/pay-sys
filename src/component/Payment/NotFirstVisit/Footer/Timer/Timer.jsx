import React from 'react'
import s from './Timer.module.css'

const Timer = (props) =>{
  return(
      <div className={s.wrapper}>
        <div>До окончании сессии
        <span id="countdown"> 20:00</span>
        </div>
      </div>
  )
}
export default Timer
