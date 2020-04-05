import React from 'react'
import s from './CheckBox.module.css'

const CheckBox = (props) =>{
  return(
      <div className={s.wrapper}>
        <label>
          <input className={s.checkbox} type="checkbox" />
            <span className={s.fake}></span>
            <span htmlFor="check"> Запомнить эту карту</span>
        </label>
      </div>
  )
}
export default CheckBox
