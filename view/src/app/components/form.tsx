'use client'

const Form: React.FC<{weekDay: string; dayJa: string}> = ({
    weekDay,
    dayJa,
  }) => {
    return (
      <div>
        <label htmlFor={weekDay}>{dayJa}曜日: </label>
        <input type='time' name='workHour' id={weekDay} />
      </div>
    )
  }

export default Form