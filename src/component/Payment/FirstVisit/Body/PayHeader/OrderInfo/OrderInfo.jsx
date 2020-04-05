import React from 'react'
import s from './OrderInfo.module.css'

const OrderInfo = (props) =>{
  return(
      <div className={s.order}>
        <div className={s.sum}> {props.price},<span className={s.sumSub}>00 &#8381;</span> </div>
      <div className={s.num}>№{props.num} </div>
      <div className={s.comp}>{props.company}</div>
      </div>
  )
}

export default OrderInfo
