import React, { useRef } from 'react';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        placeholder="your name"
      ></input>
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
