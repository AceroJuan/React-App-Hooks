import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey');
  }, []);

  useEffect(() => {
    // console.log('cambio formState');
  }, [formState]);

  useEffect(() => {
    // console.log('cambio name');
  }, [name]);

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="name"
          onChange={handleInputChange}
          placeholder="your name"
          type="text"
          value={name}
        />
        <input
          autoComplete="off"
          className="form-control"
          name="email"
          onChange={handleInputChange}
          placeholder="email@email.com"
          type="text"
          value={email}
        />
      </div>

      {name === '123' && <Message />}
    </>
  );
};

export default SimpleForm;
