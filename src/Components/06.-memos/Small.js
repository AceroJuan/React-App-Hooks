import React, { memo } from 'react';

const Small = memo(({ counter }) => {
  console.log('me volvi a mostrar :(');
  return <small>{counter}</small>;
});

export default Small;
