import { useState } from 'react';

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const handleChange = (e) => {
    let { value, name, type } = e.target;

    if (type === 'number') value = parseInt(value, 10);
    if (type === 'checkbox') value = e.target.checked;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleErrors = (errors) => {
    setInputs({
      ...inputs,
      errors,
    });
  };

  const clearForm = () => {
    setInputs({});
  };

  return {
    inputs, handleChange, handleErrors, clearForm,
  };
};

export default useForm;
