import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// myLogger Middleware
const myLogger = (store) => (next) => (action) => {
  console.log("Action:", JSON.stringify(action));
  console.log("Previous State:", store.getState());
  const upComingState = [action].reduce(rootReducer, store.getState());
  console.log("Upcoming State:", JSON.stringify(upComingState));
  next(action)
};
const store = createStore(rootReducer, applyMiddleware(myLogger));
export default store;
