import React from 'react'
import s from './PayHeader.module.css'
import CompanyLogo from './CompanyLogo/CompanyLogo'
import OrderInfo from './OrderInfo/OrderInfo'
import BankLogo from './BankLogo/BankLogo'

const PayHeader = (props) => {
  return (
      <div className={s.header}>
        <CompanyLogo/>
        <OrderInfo {...props}/>
        <BankLogo/>
      </div>
  )
}

export default PayHeader
