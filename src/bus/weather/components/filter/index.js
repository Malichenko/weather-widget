// Core
import React from "react";
import { Formik, Form } from "formik";

// Styles
import Styles from "./Styles.module.scss";

// Initial values for out Form
import { initialValues } from "./initialValues";

// Components
import { MyTextInput } from "../myTextInput";
import { MyRadio } from "../myRadio";

// Schemas
import { validationSchema } from "./validationSchema";

// Hooks
import { useFilter } from "../../hooks/useFilter";

export const Filter = () => {
  const {getFilterData, isFiltered, loadData} = useFilter();

  const handleSubmit = isFiltered ? loadData : getFilterData;
  const btnTitle = isFiltered ? "Сбросить" : "Отфильтровать";
  const isDisabled = isFiltered ? "disabled" : null;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => {
        return (
          <Form className={Styles.filter}>
            <MyRadio id="cloudy" label="Облачно" name="type" type="radio" value="cloudy" disabled={isDisabled}/>
            <MyRadio id="rainy" label="Дождливо" name="type" type="radio" value="rainy" disabled={isDisabled}/>
            <MyRadio id="sunny" label="Солнечно" name="type" type="radio" value="sunny" disabled={isDisabled}/>
            <MyTextInput
              label="Минимальная температура"
              name="minTemp"
              type="number"
              id="min-temperature"
              disabled={isDisabled}
            />
            <MyTextInput
              label="Максимальная температура"
              name="maxTemp"
              type="number"
              id="max-temperature"
              disabled={isDisabled}
            />
            <button type="submit">{btnTitle}</button>
          </Form>
        );
      }}
    </Formik>
  );
};
