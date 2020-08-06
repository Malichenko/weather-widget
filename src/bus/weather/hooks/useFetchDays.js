// Core
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Actions
import { weatherActions } from "../actions";

export const useFetchDays = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherActions.fetchDays());
  }, [dispatch]);

  const { error, isLoading } = useSelector((state) => state.weather);

  return { error, isLoading };
};
