import React from 'react'
import s from './SecPass.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../../../../Forms/FormsControl'
import {required} from '../../../../ErrorPage/validators/validator'

const Pass = (props) =>{
  return(
      <div>
        <Field type={'password'} maxLength='3' component={Input} name={'pass'} validate={[required]} placeholder='CVV/CVC' className={s.item}/>
      </div>
  )
}

const SecPass = reduxForm({
  form:'pass'
})(Pass)

export default SecPass
