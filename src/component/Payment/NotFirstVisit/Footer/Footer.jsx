import React from 'react'
import s from './Footer.module.css'
import CheckBox from './CheckBox/CheckBox'
import Button from './Button/Button'
import Timer from './Timer/Timer'

const Footer = (props) =>{
  return(
      <div className={s.wrapper}>
        <CheckBox/>
        <Button/>
        <Timer state={props.state}/>
      </div>
  )
}
export default Footer
