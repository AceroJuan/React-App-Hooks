import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallBackHook;
