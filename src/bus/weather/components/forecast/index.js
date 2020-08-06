// Core
import React from "react";
import shortid from "shortid";

// Hooks
import { useDaysData } from "../../hooks/useDaysData";

// Componets
import { Day } from "../day";

// Styles
import Styles from "./Styles.module.scss";

export const Forecast = () => {
  const { days, getDayId, selectedDayIdx, isFiltered } = useDaysData();

  const listJSX =
    days &&
    days.length !== 0 &&
    days.map(({ day, temperature, type }, idx) => {
      const isActive = selectedDayIdx === idx ? true : false;
      return (
        <Day 
          key={shortid.generate()} 
          day={day} 
          temperature={temperature} 
          type={type} 
          isActive={isActive} 
          clickHandler={() => getDayId(idx)} 
          />
        );
    });

  const noDataJSX = 
    isFiltered && 
    days && 
    days.length === 0 && 
    (
      <div className={Styles.nodata}>
        <h1>По заданным критериям нет доступных дней!</h1>
      </div>
    );

  return (
  <div className={Styles.forecast}>
    {noDataJSX} 
    {listJSX}
  </div>);
};
