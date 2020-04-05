import React from 'react'
import s from './PayBody.module.css'
import CardNum from './CardNum/CardNum'
import SecPass from './SecPass/SecPass'
import Card from './Card/Card'
import InfoButton from './InfoButton/InfoButton'

const PayBody = (props) => {
  return (
      <div className={s.body}>
        <Card/>
        <div className={s.footer}>
        <CardNum/>
        <SecPass/>
        <InfoButton/>
        </div>
      </div>
  )
}

export default PayBody
