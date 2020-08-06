// Core
import React from "react";
import { useField } from "formik";

// Styles
import Styles from "./Styles.module.scss";

export const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <label className={Styles.radio}>
        {label}
        <input className={Styles["radio__input"]} {...field} {...props} />
				<span className={Styles["radio__box"]}></span>
      </label>
    </>
  );
};
