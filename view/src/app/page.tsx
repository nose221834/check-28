"use client";

import React, { useState } from "react";
import Form from "./components/form";
import weeks from "./weeks";

export default function Home() {
  const [dayTimes, setDayTimes] = useState([0, 0, 0, 0, 0]);

  const [sumTime, setSumTime] = useState(0);

  const handleDayTime = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let nextDayTimes: number[] = dayTimes.map((dayTime, i) => {
      if (i === index) {
        return e.target.valueAsNumber;
      } else {
        return dayTime;
      }
    });
    console.log(nextDayTimes);
    setDayTimes(nextDayTimes);
  };

  const handleSumTime = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget);
  };

  return (
    <>
      <h1>check-28</h1>
      <h2>勤務時間を入力してください</h2>

      <form
        action=""
        method="get"
        className="input-time"
        onSubmit={handleSumTime}
      >
        {dayTimes.map((dayTime, i) => (
          <React.Fragment key={i}>
            <Form
              dayEn={weeks[i].en}
              dayJa={weeks[i].ja}
              time={dayTime}
              onChange={(e) => handleDayTime(e, i)}
              key={weeks[i].en}
            />
            <div key={weeks[i].ja}>勤務時間:{dayTimes[i]}</div>
          </React.Fragment>
        ))}
        <div>合計時間:{sumTime}</div>
        <button type="submit">Submit form</button>
      </form>
    </>
  );
}
