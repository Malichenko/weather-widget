// Core
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

// Actions
import { weatherActions } from "../actions";

export const useFilter = () => {
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState("");
  const { data, isFiltered } = useSelector((state) => state.weather);

  const getFilterData = (values) => {
    setFilterData(values);
  };

  useEffect(() => {
    if (data && filterData) {
      const filterDays = data.filter((day) => {
        const filterType = filterData.type === day.type;
        const filterMinTemp = filterData.minTemp ? filterData.minTemp <= day.temperature : true;
        const filterMaxTemp = filterData.maxTemp ? filterData.maxTemp >= day.temperature : true;

        return filterType && filterMinTemp && filterMaxTemp;
      });

      dispatch(weatherActions.filter(filterDays));
    }
  }, [dispatch, filterData]);

  const loadData = () => {
    dispatch(weatherActions.fetchDays());
  };

  return {
    getFilterData,
    isFiltered,
    loadData,
  };
};
