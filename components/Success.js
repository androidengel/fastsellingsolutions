import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

const PropertyMessage = () => (
  <>
    <h1>Thank you!</h1>
    <p>We will be in touch soon.</p>
    <p>If you need to speak with us immediately, please call 920-298-1170.</p>
  </>
);

const ReferralMessage = () => (
  <>
    <h1>Thank you!</h1>
    <p>Your referral means a lot! We will be in touch with them soon.</p>
    <p>If you have any questions or concerns, please give us a call at 920-298-1170.</p>
  </>
);

const Success = () => {
  const router = useRouter();
  // ctu type
  const { type } = router.query;
  let Message = '';
  if (type === 'propsub' || type === 'quesub') Message = PropertyMessage;
  if (type === 'refsub') Message = ReferralMessage;

  useEffect(() => {
    if (!type) router.push('/404');
  }, []);

  return (
    <div className="inner-content centered full-page">
      {!type ? ''
        : (
          <div>
            <Message />
            <p>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </p>
          </div>
        )}
    </div>
  );
};

export default Success;
