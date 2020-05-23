import React from 'react'
import s from './OrderInfo.module.css'

const OrderInfo = ({order}) =>{

  return(
      <div className={s.order}>
        <div className={s.sum}> {order.price},<span className={s.sumSub}>00 &#8381;</span> </div>
      <div className={s.num}>№{order.num} </div>
      <div className={s.comp}>{order.company}</div>
      </div>
  )
}

export default OrderInfo
