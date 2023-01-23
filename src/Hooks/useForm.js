import { useState } from 'react';

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return { ...formState, formState, onInputChange, onResetForm };
};

export default useForm;
