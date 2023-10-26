'use client'

import { SyntheticEvent, useState } from 'react';
import Form from './components/form';
import weeks from './weeks'


export default function Home() {
  const [date,setDate] = useState({
    mon: "00:00",
    tue: "00:00",
    wed: "00:00",
    thu: "00:00",
    fri: "00:00",
  })
  const calcUpdate: React.FC<{value: string;   id: string}> = (value,id) => {
    setDate({
      ...date,
      [id]: value
    })
  }
  const [ todoText, setTodoText ] = useState("");
  const [ todos, setTodos ] = useState([]);

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>): void => setDate(event.target.value);
  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>): void => culc


  return (
    <>
      <h1>check-28</h1>
      <h2>勤務時間を入力してください</h2>

      <form action="" method="get" className="form-example" >
        {weeks.map(day =>
        <>
          <Form dayEn={day.id} dayJa={day.ja} key={day.id} onchange={onChangeTodoText} />
        </>
        )}
      </form>
      <button type="submit">Submit form</button>

    </>
)}
