import React from 'react'
import s from './SecPass.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../../../../Forms/FormsControl'
import {required} from '../../../../ErrorPage/validators/validator'

const PassInput = (props) =>{
    return(
      <form className={s.form}>
        <Field component={Input} type={'password'} name={'secPas'} placeholder={'CVV/CVC'} className={s.item} validate={[required]}/>
      </form>
  )
}

const SecPass = reduxForm({
  form:'pass',
})(PassInput)

export default SecPass
