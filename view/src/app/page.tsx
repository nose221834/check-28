"use client";

import React, { useState } from "react";
import Forms from "../components/forms";

export default function Home() {
  const [culcTime, setculcTime] = useState(["00:00","28:00"]);
  const [inputTimes, setInputTimes] = useState([
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
      let nextDayTimes: string[] = inputTimes.map((inputTime, i) => {
        if (i === index) {
          return inputValue;
        } else {
          return inputTime;
        }
      });
      setInputTimes(nextDayTimes);
    }
  };

  const handleSumTime = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const totalMinutes = inputTimes.reduce((total, dayTime) => {
      const [hours, minutes] = dayTime.split(":");
      return total + Number(hours) * 60 + Number(minutes);
    }, 0);

    const totalHours = Math.floor(totalMinutes / 60);
    const remainderMinutes = totalMinutes % 60;
    const totalTime = `${totalHours.toString().padStart(2,"0")}:${remainderMinutes.toString().padStart(2, "0")}`;


    const remainderTimehour = Math.floor(remainderMinutes / 60);
    const remainderTimeMinutes = remainderMinutes % 60;

    
    if(remainderTimeMinutes === 0) {
      const remainderTime = `${28 - totalHours - remainderTimehour}:${(remainderTimeMinutes).toString().padStart(2, "0")}`
      setculcTime([totalTime,remainderTime]);
    } else if ((28 - remainderTimehour - remainderTimehour) < 0) {
      const remainderTime = `${28 - totalHours - remainderTimehour}:${(60 - remainderTimeMinutes).toString().padStart(2, "0")}`
      setculcTime([totalTime,remainderTime]);
    } else {
      const remainderTime = `${28 - totalHours - remainderTimehour - 1}:${(60 - remainderTimeMinutes).toString().padStart(2,"0")}`
      setculcTime([totalTime,remainderTime]);
    };
  }

  return (
    <>
      <h1>check-28</h1>
      <h2>勤務時間を入力してください</h2>
      <Forms inputTimes={inputTimes} onChange={handleDayTime} onSubmit={handleSumTime} />
      <h3>合計時間:{culcTime[0]}</h3>
      <h2>今週の残り勤務時間:{culcTime[1]}</h2>
    </>
  );
}
