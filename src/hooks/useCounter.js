import { useState } from "react";

export const useCounter = (initalValue = 10) => {
  const [counter, setCounter] = useState(initalValue);

  console.log(initalValue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = (value) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initalValue);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
