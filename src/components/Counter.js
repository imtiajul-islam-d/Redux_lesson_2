import { connect, useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/counter/action";

function Counter({ count, increment, decrement }) {
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

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(incrementCounter(value)),
    decrement: (value) => dispatch(decrementCounter(value)),
  };
};

// HOC connect
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
