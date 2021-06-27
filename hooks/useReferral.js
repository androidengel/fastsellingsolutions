import { useState } from 'react';
import { useRouter } from 'next/router';

const useReferral = (values) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch('/api/referralSubmission', {
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
      router.push('/success?type=referral');
    }
  };

  return {
    submitForm,
    loading,
    error,
  };
};

export default useReferral;
