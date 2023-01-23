import React, { memo } from 'react';

const ShowIncrement = memo(({ increment }) => {
  console.log('me volvi a mostrar :(');
  return (
    <>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        incrementar
      </button>
    </>
  );
});

export default ShowIncrement;
