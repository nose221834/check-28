'use client'

import { SyntheticEvent, useState } from 'react';
import Form from './components/form';
import weeks from './weeks'


interface Props{
  en:number;
  ja:string;
  time:string;
}


export default function Home() {


  const [dayTimes,setDayTimes] = useState([
  "00.00",
  "00.00",
  "00.00",
  "00.00",
  "00.00",
  ])


  function handleTime(e: React.ChangeEvent<HTMLInputElement>) {
    const nextDayInfo = dayTimes.map((day,i) => {
      if (i === index) {
      } return e.target.value
    })
    setDayTimes(nextDayInfo)
  }


  return (
    <form action="" method="get" className="form-example" >
        <h1>check-28</h1>
        <h2>勤務時間を入力してください</h2>
      {dayTimes.map((dayTime,i) =>
      <>
        <Form dayEn={weeks[0].en} dayJa={weeks[0].ja} dayTime={dayTime} onchange={() => handleTime()} key={weeks[0].en}/>
        <Form dayEn={weeks[1].en} dayJa={weeks[1].ja} dayTime={dayTime} onchange={handleTime} key={weeks[1].en}/>
        <Form dayEn={weeks[2].en} dayJa={weeks[2].ja} dayTime={dayTime} onchange={handleTime} key={weeks[2].en}/>
        <Form dayEn={weeks[3].en} dayJa={weeks[3].ja} dayTime={dayTime} onchange={handleTime} key={weeks[3].en}/>
        <Form dayEn={weeks[4].en} dayJa={weeks[4].ja} dayTime={dayTime} onchange={handleTime} key={weeks[4].en}/>
      </>
      )}
      <button type="submit">Submit form</button>
    </form>
)}
