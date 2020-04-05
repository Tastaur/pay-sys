import React from 'react'
import s from './Header.module.css'
import Button from './Button/Button'
import Title from './Title/Title'

const Header = (props) =>{
  return(
      <div className={s.header}>
      <Button/>
      <Title/>
      </div>
  )
}

export default Header
