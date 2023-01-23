import React from 'react';
import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch';

const LayoutEffect = () => {
  const { counter, increment, decrement } = useCounter();
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`,
  );
  const { quote } = !!data && data[0];

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr />
      <main>
        <ul>
          <blockquote className="text-end">
            <h3>{quote}</h3>
            {/* <p>{author}</p> */}
          </blockquote>

          <div className=" col-4 mx-auto">
            <button
              className="btn btn-outline-danger btn-lg"
              onClick={decrement}
            >
              previous quote
            </button>
            <button className="btn btn-outline-info btn-lg" onClick={increment}>
              next quote
            </button>
          </div>
        </ul>
      </main>
    </>
  );
};

export default LayoutEffect;
