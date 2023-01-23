import React from 'react';
import useCounter from '../../Hooks/useCounter';

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>CounterWithCustomHook: {state}</h1>
      <button className="btn" onClick={increment}>
        +1
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <button className="btn" onClick={decrement}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
