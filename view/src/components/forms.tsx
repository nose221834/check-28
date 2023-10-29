"use client";

import React from "react";
import weeks from "../app/weeks";

const Form: React.FC<{
  dayEn: string;
  dayJa: string;
  time: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ dayEn, dayJa, time, onChange }) => {
  return (
    <div>
      <label htmlFor={dayEn}>{dayJa}曜日: </label>
      <input
        type="time"
        name="time"
        defaultValue={time}
        id={dayEn}
        onChange={onChange}
      />
    </div>
  );
};

const Forms: React.FC<{
  inputTimes: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, i: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ inputTimes, onChange , onSubmit }) => {
  return (
    <form
        action=""
        method="get"
        className="input-time"
        onSubmit={(e) => onSubmit(e)}>
      {inputTimes.map((inputTime, i) => (
        <React.Fragment key={i}>
          <Form
            dayEn={weeks[i].en}
            dayJa={weeks[i].ja}
            time={inputTime}
            onChange={(e) => onChange(e, i)}
            key={weeks[i].en}
          />
        </React.Fragment>
      ))}
      <button type="submit">Submit form</button>
    </form>
  );
};

export default Forms;
