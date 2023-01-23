import React, { useState } from 'react';
import MultipleCustomHooks from '../03.-Examples/MultipleCustomHooks';

const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        show/hide
      </button>
    </>
  );
};

export default RealExampleRef;
