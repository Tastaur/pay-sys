import React from 'react'
import s from './CardInput.module.css'
import {Field, reduxForm} from 'redux-form'
import {required} from '../../../../ErrorPage/validators/validator'
import {Input} from '../../../../../Forms/FormsControl'

const Card = (props) =>{
  return(
      <div className={s.cardInput}>
        <Field className={s.input} type={'text'} name={'cardNum'} component={Input} placeholder={'Enter card number'} maxLength='16' validate={[required]}/>
      </div>
  )
}

const CardInput = reduxForm({
  form:'cardNum'
})(Card)

export default CardInput
