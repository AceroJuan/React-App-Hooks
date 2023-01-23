import React, { useEffect } from 'react';
import useForm from '../../Hooks/useForm';

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('email ha cambiado');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('se ha guardado...', formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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
        <input
          className="form-control"
          name="password"
          onChange={handleInputChange}
          placeholder="*********"
          type="password"
          value={password}
        />
        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default FormWithCustomHook;
