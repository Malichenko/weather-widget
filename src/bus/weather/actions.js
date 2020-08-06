// Api
import { api } from "../../api/index";

// Types
import { types } from "./types";

export const weatherActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.WEATHER_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.WEATHER_STOP_FETCHING,
    };
  },
  fill: (payload) => {
    return {
      type: types.WEATHER_FILL_DAYS,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.WEATHER_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },
  selectDay: (payload) => {
    return {
      type: types.WEATHER_SELECT_DAY,
      payload,
    };
  },
  filter: (payload) => {
    return {
      type: types.WEATHER_FILTER,
      payload,
    };
  },
  // Async
  fetchDays: () => async (dispatch) => {
    dispatch(weatherActions.startFetching());

    try {
      const response = await api.weather.fetch();
      const { data } = await response.json();
      dispatch(weatherActions.fill(data));
    } catch (err) {
      const error = {
        message: err.message,
      };

      dispatch(weatherActions.setFetchingError(error));
    } finally {
      dispatch(weatherActions.stopFetching());
    }
  },
});
