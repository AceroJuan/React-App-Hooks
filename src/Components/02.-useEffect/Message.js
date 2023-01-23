import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener('mouseover', mouseMove);

    return () => {
      window.removeEventListener('mouseover', mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>You Rules!</h1>
      <p>
        x: {coords.x}, y: {coords.y}
      </p>
    </div>
  );
};

export default Message;
