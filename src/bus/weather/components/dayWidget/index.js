// Core
import React from "react";
import moment from "moment";

// Hooks
import { useDaysData } from "../../hooks/useDaysData";

// Styles
import Styles from "./Styles.module.scss";

export const DayWidget = () => {
  const { selectedDayData } = useDaysData();

  if (!selectedDayData) {
    return null;
  }
  const { day, humidity, rain_probability, temperature, type } = selectedDayData;

  const dayTitle = moment(day).format("dddd");
  const dayDescr = moment(day).format("D MMMM");

  return (
    <>
      <div className={Styles.head}>
        <div className={`${Styles.icon} ${Styles[type]}`}></div>
        <div className={Styles["current-date"]}>
          <p>{dayTitle}</p>
          <span>{dayDescr}</span>
        </div>
      </div>
      <div className={Styles["current-weather"]}>
        <p className={Styles.temperature}>{temperature}</p>
        <p className={Styles.meta}>
          <span className={Styles.rainy}>%{rain_probability}</span>
          <span className={Styles.humidity}>%{humidity}</span>
        </p>
      </div>
    </>
  );
};
