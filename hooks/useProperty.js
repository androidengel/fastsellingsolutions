import { useState } from 'react';

const useProperty = (values) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch('/api/propertySubmission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const text = JSON.parse(await res.text());

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
    submitForm,
    message,
    loading,
    error,
  };
};

export default useProperty;
