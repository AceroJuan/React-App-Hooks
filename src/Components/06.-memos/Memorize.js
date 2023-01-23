import React, { useState } from 'react';
import useCounter from '../../Hooks/useCounter';
import Small from './Small';

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [state, setState] = useState(true);

  const handleShow = () => {
    setState(!state);
  };

  return (
    <>
      <h1>
        Counter: <Small counter={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-outline-primary ml-3" onClick={handleShow}>
        show/hide {JSON.stringify(state)}
      </button>
    </>
  );
};

export default Memorize;
