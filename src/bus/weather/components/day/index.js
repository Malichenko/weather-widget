// Core
import React from "react";
import moment from "moment";
import cx from "classnames";

// Styles
import Styles from "./Styles.module.scss";

export const Day = (props) => {
  const { day, temperature, type, clickHandler, isActive } = props;

  const dayTitle = moment(day).format("dddd");
  const classCX = cx(`${Styles.day}`, `${Styles[type]}`, {[`${Styles.selected}`]: isActive})
  return (
    <div className={classCX} onClick={clickHandler}>
      <p>{dayTitle}</p>
      <span>{temperature}</span>
    </div>
  );
};
