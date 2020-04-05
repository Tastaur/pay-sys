import React from 'react'
import s from './Timer.module.css'

const Timer = (props) =>{
  return(
      <div className={s.wrapper}>
        <div>До окончании сессии
        <span > {props.state.m}:{props.state.s}</span>
        </div>
      </div>
  )
  
}
export default Timer
