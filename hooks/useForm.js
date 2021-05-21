import { useState } from 'react';

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    let { value, name, type } = e.target;

    if (type === 'number') value = parseInt(value, 10);
    if (type === 'checkbox') value = e.target.checked;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearForm = () => {
    setInputs({});
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch('/api/propertySubmission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = JSON.parse(await res.text());
    console.log(text);
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      // success!
      setLoading(false);
      setMessage('Success! We\'ll be in contact with you about your property soon.');
    }
  };

  return {
    inputs,
    setInputs,
    handleChange,
    clearForm,
    submitForm,
    message,
    loading,
    error,
  };
};

export default useForm;
