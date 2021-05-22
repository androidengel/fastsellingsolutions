import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Success = () => {
  const router = useRouter();
  // ctu type
  const { type } = router.query;

  useEffect(() => {
    if (!type) router.push('/404');
  }, []);

  console.log(type);

  return (
    <div className="inner-content centered full-page">
      {!type ? ''
        : (
          <div>
            <h1>Thank you!</h1>
            <p>We will be in touch soon.</p>
            <p>If you need to speak with us immediately, please call 920-315-0080.</p>
          </div>
        )}
    </div>
  );
};

export default Success;
