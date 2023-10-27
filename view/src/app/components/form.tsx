'use client'

const Form: React.FC<{ dayEn: string; dayJa: string; dayTime: string; onchange: (event: React.ChangeEvent<HTMLInputElement>) => void}> = ({
    dayEn,
    dayJa,
    dayTime,
    onchange
  }) => {
    return (
      <div>
        <label htmlFor={dayEn}>{dayJa}曜日: </label>
        <input type='time' name="time" value={dayTime} id={dayEn} onChange={onchange} key={dayEn}/>
      </div>
    )
  }

export default Form