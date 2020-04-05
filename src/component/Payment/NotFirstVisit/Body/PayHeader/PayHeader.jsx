import React from 'react'
import s from './PayHeader.module.css'
import CompanyLogo from './CompanyLogo/CompanyLogo'
import OrderInfo from './OrderInfo/OrderInfo'
import BankLogo from './BankLogo/BankLogo'

const PayHeader = (props) => {
  let newOrder = props.state
      .map(order => <OrderInfo id={order.id} num={order.num} price={order.price} company={order.company} />)
  return (
      <div className={s.header}>
        <CompanyLogo/>
        {newOrder}
        <BankLogo/>
      </div>
  )
}

export default PayHeader
