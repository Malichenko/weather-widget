// Core
import React from "react";

// Components
import { Filter } from "./components/filter/index";
import { DayWidget } from "./components/dayWidget/index";
import { Forecast } from "./components/forecast/index";
import { Loader } from "../../elements/loader";

// Hooks
import { useFetchDays } from "./hooks/useFetchDays";

// Styles
import Styles from "./Styles.module.scss";

export const Weather = () => {
  const { error, isLoading } = useFetchDays();

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const spinnerJSX = isLoading && <Loader />;
  const contantJSX = !isLoading && (
    <>
      <Filter />
      <DayWidget />
      <Forecast />
    </>
  );

  return (
    <main className={Styles.main}>
      {spinnerJSX}
      {contantJSX}
    </main>
  );
};
