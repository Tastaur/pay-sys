import React from 'react'
import s from './PayBody.module.css'
import DataSelect from './DataSelect/DataSelect'
import SecPass from './SecPass/SecPass'
import CardInput from './CardInput/CardInput'
import InfoButton from './InfoButton/InfoButton'

const PayBody = (props) => {
  return (
      <div className={s.body}>
        <CardInput/>
        <div className={s.footer}>
        <DataSelect/>
        <SecPass/>
        <InfoButton/>
        </div>
      </div>
  )
}

export default PayBody
