"use client";

import { useState } from "react";
import Form from "./components/form";
import weeks from "./weeks";

export default function Home() {
  const [dayTimes, setDayTimes] = useState([
    "00:00",
    "00:00",
    "00:00",
    "00:00",
    "00:00",
  ]);

  const handleDayTime = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let nextDayTimes: string[] = dayTimes.map((dayTime, i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return dayTime;
      }
    });
    setDayTimes(nextDayTimes);
  };

  return (
    <>
      <h1>check-28</h1>
      <h2>勤務時間を入力してください</h2>

      <form action="" method="get" className="form-example">
        {dayTimes.map((dayTime, i) => (
          <>
            <Form
              dayEn={weeks[i].en}
              dayJa={weeks[i].ja}
              time={dayTime}
              onChange={(e) => handleDayTime(e, i)}
              key={i}
            />
          </>
        ))}
      </form>

      <button type="submit">Submit form</button>
    </>
  );
}
