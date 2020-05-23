import React, {useState} from 'react'
import s from './DataSelect.module.css'

const DataSelect = (props) =>{
  const [month, setMonth] = useState("Month")
  const [year, setYear] = useState("Year")

  return(
      <div className={s.select}>
        <select className={s.month} value={month} onChange={()=> setMonth()}>
          <option value='1'> Январь</option>
          <option value='2'> Февраль</option>
          <option value='3'> Март</option>
          <option value='4'> Апрель</option>
          <option value='5'> Май</option>
          <option value='6'> Июнь</option>
          <option value='7'> Июль</option>
          <option value='8'> Август</option>
          <option value='9'> Сентябрь</option>
          <option value='10'> Октябрь</option>
          <option value='11'> Ноябрь</option>
          <option value='12'> Декабрь</option>
          <option value='Month' hidden='hidden'>Месяц</option>
        </select>
        <select className={s.year} value={year} onChange={()=> setYear()}>
          <option value='2020'> 2020</option>
          <option value='2021'> 2021</option>
          <option value='2022'> 2022</option>
          <option value='2023'> 2023</option>
          <option value='2024'> 2024</option>
          <option value='Year' hidden='hidden'>/ год</option>
        </select>
      </div>
  )
}

export default DataSelect
