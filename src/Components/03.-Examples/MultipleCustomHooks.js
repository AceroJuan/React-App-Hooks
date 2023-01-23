import React from 'react';
import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch';

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter();
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`,
  );
  const { author, quote } = !!data && data[0];
  console.log(author, quote);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      <main>
        {loading ? (
          <div className="alert alert-info text-center">loading ...</div>
        ) : (
          <ul>
            <blockquote className="text-end">
              <h3>{quote}</h3>
              <p>{author}</p>
            </blockquote>
            {/* {data?.map((item, index) => {
              return (
                <>
                  <li key={index}>
                    <blockquote className="text-end">
                      <h3>{item.quote}</h3>
                      <p>{item.author}</p>
                    </blockquote>
                  </li>
                </>
              );
            })} */}
            <div className=" col-4 mx-auto">
              <button
                className="btn btn-outline-danger btn-lg"
                onClick={decrement}
              >
                previous quote
              </button>
              <button
                className="btn btn-outline-info btn-lg"
                onClick={increment}
              >
                next quote
              </button>
            </div>
          </ul>
        )}
      </main>
    </>
  );
};

export default MultipleCustomHooks;
