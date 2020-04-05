import React from 'react'
import s from './DataSelect.module.css'

const DataSelect = (props) =>{
  return(
      <div className={s.select}>
        <select className={s.month}>
          <option> Январь</option>
          <option> Февраль</option>
          <option> Март</option>
          <option> Апрель</option>
          <option> Май</option>
          <option> Июнь</option>
          <option> Июль</option>
          <option> Август</option>
          <option> Сентябрь</option>
          <option> Октябрь</option>
          <option> Ноябрь</option>
          <option> Декабрь</option>
          <option selected='selected' hidden='hidden'>Месяц</option>
        </select>
        <select className={s.year}>
          <option> 2020</option>
          <option> 2021</option>
          <option> 2022</option>
          <option> 2023</option>
          <option> 2024</option>
          <option selected='selected' hidden='hidden'>/ год</option>
        </select>
      </div>
  )
}

export default DataSelect
