import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex items-center mt-10">
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="text-2xl mx-4">{count}</div>
        <button
          className="btn btn-accent mr-2"
          onClick={() => dispatch(incrementByAmount(5))}
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
