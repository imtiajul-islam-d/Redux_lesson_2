import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/counter/action";

export default function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(incrementCounter())}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(decrementCounter())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
