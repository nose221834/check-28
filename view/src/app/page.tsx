import Form from './components/form';
import weeks from './weeks'


export default function Home() {
  return (
    <>
      <h1>check-28</h1>
      <h2>勤務時間を入力してください</h2>

      <form action="" method="get" className="form-example">
        {weeks.map(day =>
          <Form weekDay={day.id} dayJa={day.ja} key={day.id}/>
        )}
      </form>
    </>
)}









