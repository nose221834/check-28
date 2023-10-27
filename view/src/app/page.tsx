"use client";

import React, { useState } from "react";
import Forms from "./components/forms";

export default function Home() {
  const [sumTime, setSumTime] = useState("00:00");
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
    const inputValue = e.target.value;
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    if (timeRegex.test(inputValue)) {
      let nextDayTimes: string[] = dayTimes.map((dayTime, i) => {
        if (i === index) {
          return inputValue;
        } else {
          return dayTime;
        }
      });
      setDayTimes(nextDayTimes);
    }
  };

  const handleSumTime = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const totalMinutes = dayTimes.reduce((total, dayTime) => {
      const [hours, minutes] = dayTime.split(":");
      return total + Number(hours) * 60 + Number(minutes);
    }, 0);

    const totalHours = Math.floor(totalMinutes / 60);
    const remainderMinutes = totalMinutes % 60;
    const totalTime = `${totalHours}:
      ${remainderMinutes.toString().padStart(2, "0")}`;

    setSumTime(totalTime);
  };

  return (
    <>
      <h1>check-28</h1>
      <h2>勤務時間を入力してください</h2>

      <form
        action=""
        method="get"
        className="input-time"
        onSubmit={(e) => handleSumTime(e)}
      >
        <Forms dayTimes={dayTimes} onChange={handleDayTime} />

        <button type="submit">Submit form</button>
        <h2>合計時間:{sumTime}</h2>
      </form>
    </>
  );
}
