import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './SelectStatus.module.css'
const SelectStatus = (props) =>{
  return(
      <div className={s.nav}>
        <NavLink  className={s.item}  to='/index'> first visit</NavLink>
        <NavLink  className={s.item} to='/notFirst'> not first visit</NavLink>
        <NavLink  className={s.item} to='/err'> error page </NavLink>
      </div>
  )
}

export default SelectStatus
