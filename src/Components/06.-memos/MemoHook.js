import React, { useMemo, useState } from 'react';
import procesoPesado from '../../Helpers/procesoPesado';
import useCounter from '../../Hooks/useCounter';

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [state, setState] = useState(true);

  const handleShow = () => {
    setState(!state);
  };

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: {counter}</h3>
      <hr />

      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-outline-primary ml-3" onClick={handleShow}>
        show/hide {JSON.stringify(state)}
      </button>
    </>
  );
};

export default MemoHook;
