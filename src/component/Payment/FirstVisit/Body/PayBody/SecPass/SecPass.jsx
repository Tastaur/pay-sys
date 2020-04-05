import React from 'react'
import s from './SecPass.module.css'

const SecPass = (props) =>{
  return(
      <div>
        <input type='password' placeholder='CVV/CVC' className={s.item}/>
      </div>
  )
}

export default SecPass
