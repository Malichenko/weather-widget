// Types
import { types } from "./types";

const initialState = Object.freeze({
  data: null,
  isLoading: false,
  error: null,
  selectedDayIdx: 0,
  isFiltered: false,
});

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.WEATHER_START_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case types.WEATHER_STOP_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    case types.WEATHER_FILL_DAYS:
      return {
        ...state,
        error: null,
        data: payload,
        isFiltered: false,
      };
    case types.WEATHER_SET_FETCHING_ERROR:
      return {
        ...state,
        error: true,
        data: payload,
        isFiltered: false,
      };
    case types.WEATHER_SELECT_DAY:
      return {
        ...state,
        selectedDayIdx: payload,
      };
    case types.WEATHER_FILTER:
      return {
        ...state,
        data: payload,
        error: null,
        isFiltered: true,
      };
    default:
      return state;
  }
};
