import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementCounter = (value) => {
  return {
    type: INCREMENT,
  };
};

export const decrementCounter = (value) => {
  return {
    type: DECREMENT,
  };
};
