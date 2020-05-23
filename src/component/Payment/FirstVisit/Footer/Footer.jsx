import React from 'react'
import s from './Footer.module.css'
import CheckBox from './CheckBox/CheckBox'
import Button from './Button/Button'

const Footer = (props) =>{
  return(
      <div className={s.wrapper}>
        <CheckBox/>
        <Button/>
      </div>
  )
}
export default Footer
