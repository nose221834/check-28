"use client";

const Form: React.FC<{
  dayEn: string;
  dayJa: string;
  time: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ dayEn, dayJa, time, onChange }) => {
  return (
    <div>
      <label htmlFor={dayEn}>{dayJa}曜日: </label>
      <input
        type="time"
        name={dayJa}
        defaultValue={time}
        id={dayEn}
        onChange={onChange}
      />
    </div>
  );
};

export default Form;
