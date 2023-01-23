import React, { useState } from 'react';

const CounterApp = ({ initialState = 0 }) => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2, counter3, counter4 } = state;

  const handleAddButton = () => {
    setState({ ...state, counter1: counter1 + 1 });
  };
  // const handleResetButton = () => {
  //   setCounter(initialState);
  // };
  // const handlesubtractButton = () => {
  //   setCounter(counter - 1);
  // };
  return (
    <>
      <h1>Counter App {counter1}</h1>
      <h1>Counter App {counter2}</h1>
      <h1>Counter App {counter3}</h1>
      <h1>Counter App {counter4}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleAddButton}>
        +1
      </button>
      {/* <button className="btn " onClick={handleResetButton}>
        Reset
      </button>
      <button className="btn btn-danger" onClick={handlesubtractButton}>
        -1
      </button> */}
    </>
  );
};

export default CounterApp;
