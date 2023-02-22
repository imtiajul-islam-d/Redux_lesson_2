import { connect } from "react-redux";
import {
  dynamicDecrementCounter,
  dynamicIncrementCounter,
} from "../redux/dynamicCounter/dynamicAction";

import { incrementCounter, decrementCounter } from "../redux/counter/action";

function hookCounter({ count, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => increment(3)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrement(3)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  // if needed you can use ownProps
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? (value) => dispatch(dynamicIncrementCounter(value))
      : () => dispatch(incrementCounter()),
    decrement: ownProps.dynamic
      ? (value) => dispatch(dynamicDecrementCounter(value))
      : () => dispatch(decrementCounter()),
  };
};

// HOC connect
export default connect(mapStateToProps, mapDispatchToProps)(hookCounter);
