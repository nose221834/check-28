'use client'

const Form: React.FC<{ dayEn: string; dayJa: string; onchange: (event: React.ChangeEvent<HTMLInputElement>) => void}> = ({
    dayEn,
    dayJa,
    onchange
  }) => {
    return (
      <div>
        <label htmlFor={dayEn}>{dayJa}曜日: </label>
        <input type='time' name='workHour' id={dayEn} onChange={onchange}/>
      </div>
    )
  }

export default Form