import React, {useState} from 'react'
import s from './PayBody.module.css'
import DataSelect from './DataSelect/DataSelect'
import SecPass from './SecPass/SecPass'
import CardInput from './CardInput/CardInput'
import InfoButton from './InfoButton/InfoButton'
import InfoBlock from './InfoBlock/InfoBlock'

const PayBody = (props) => {
  const [info, setInfo] = useState(false)
  return (
      <div className={s.body}>
        <CardInput/>
        <div className={s.footer}>
        <DataSelect/>
        <SecPass/>
        <InfoButton setInfo={setInfo}/>
          {info && <InfoBlock setInfo={setInfo}/>}
        </div>
      </div>
  )
}

export default PayBody
