'use client'

import { SyntheticEvent, useState } from 'react';
import Form from './components/form';
import weeks from './weeks'


export default function Home() {


  const [dayTimes,setDayTimes] = useState([
  "00:00",
  "00:00",
  "00:00",
  "00:00",
  "00:00",
  ])

  const [sumTime,setSumTimes] = useState(0)


  function handleTime(index: number,e: React.ChangeEvent<HTMLInputElement>) {
    const nextDayInfo = dayTimes.map((daytime,i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return daytime;
      }
    })
    setDayTimes(nextDayInfo)
  }

  function handleSumTime() {

  }

  return (
    <form action="" method="get" className="form-example" >
        <h1>check-28</h1>
        <h2>勤務時間を入力してください</h2>
      {dayTimes.map((dayTime,i) =>
      <>
        <Form dayEn={weeks[i].en} dayJa={weeks[i].ja} dayTime={dayTime} onchange={(e) => handleTime(i,e)} key={i}/>
        <div key={weeks[i].ja}>勤務時間：{dayTime}</div>
      </>
      )}
      <button type="submit">Submit form</button>
    </form>
)}
