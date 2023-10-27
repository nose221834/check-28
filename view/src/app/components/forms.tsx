"use client";

import React from "react";
import weeks from "../weeks";

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
  dayTimes: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, i: number) => void;
}> = ({ dayTimes, onChange }) => {
  return (
    <>
      {dayTimes.map((dayTime, i) => (
        <React.Fragment key={i}>
          <Form
            dayEn={weeks[i].en}
            dayJa={weeks[i].ja}
            time={dayTime}
            onChange={(e) => onChange(e, i)}
            key={weeks[i].en}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Forms;
