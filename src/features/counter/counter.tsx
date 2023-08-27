import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const [value, setValue] = useState<number>(0);
  const onreset = () => {
    dispatch(reset());
    setValue(0);
  };
  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setValue(+e.target.value);
  //   };

  const dispatch = useAppDispatch();
  return (
    <div>
      Counter{count}{" "}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={onreset}>reset</button>
      <input
        type="number"
        value={value === 0 ? "" : value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(+e.target.value)
        }
      />
      <button onClick={() => dispatch(incrementByAmount(value))}>
        increment by amount
      </button>
    </div>
  );
}
