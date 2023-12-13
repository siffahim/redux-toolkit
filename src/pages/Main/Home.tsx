import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/counter/counterSlice";
import { RootState } from "../../redux/store";

const Home = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center m-10">
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="text-2xl mx-4">{count}</div>
        <button
          className="btn btn-accent mr-2"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by value
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Home;
