import React from 'react'
import s from './Body.module.css'

const Body = (props) =>{
  return(
      <div className={s.wrapper}>
        <div className={s.img} />
        <h2 className={s.title}>Ой, что-то пошло не так</h2>
        <p className={s.subtitle}>Недостаточно средств</p>
      </div>
  )
}
export default Body
