import React, {useState} from 'react'
import s from './PayBody.module.css'
import CardNum from './CardNum/CardNum'
import SecPass from './SecPass/SecPass'
import Card from './Card/Card'
import InfoButton from './InfoButton/InfoButton'
import InfoBlock from '../../../FirstVisit/Body/PayBody/InfoBlock/InfoBlock'

const PayBody = (props) => {
  const [info, setInfo] = useState(false)
  return (
      <div className={s.body}>
        <Card/>
        <div className={s.footer}>
        <CardNum/>
        <SecPass/>
          <InfoButton setInfo={setInfo}/>
          {info && <InfoBlock setInfo={setInfo}/>}
        </div>
      </div>
  )
}

export default PayBody
