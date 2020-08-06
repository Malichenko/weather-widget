// Core
import React from "react";
import { useField } from "formik";

// Styles
import Styles from "./Styles.module.scss";

export const MyTextInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={Styles["custom-input"]}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...field} {...props} />
      {meta.touched && meta.error && <div className={Styles.error}>{meta.error}</div>}
    </div>
  );
};
