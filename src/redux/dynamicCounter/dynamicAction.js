import { DDECREMENT, DINCREMENT } from "./dynamicActionTypes";

export const dynamicIncrementCounter = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const dynamicDecrementCounter = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
