// Core
import { useDispatch, useSelector } from "react-redux";

// Actions
import { weatherActions } from "../actions";

export const useDaysData = () => {
  const dispatch = useDispatch();

  const { data, selectedDayIdx, isFiltered } = useSelector((state) => state.weather);

  const selectedDayData = data && data[selectedDayIdx];

  const getDayId = (id) => {
    dispatch(weatherActions.selectDay(id));
  };
  
  const days = data && data.slice(0, 7);

  return {
    isFiltered,
    days,
    selectedDayIdx,
    selectedDayData,
    getDayId,
  };
};
