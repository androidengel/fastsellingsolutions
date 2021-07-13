import Head from 'next/head';
import Referrals from '../components/Referrals/Referrals';

export default function referrals() {
  return (
    <div>
      <Head>
        <meta name="description" content="Do you know someone who needs to sell their house fast? Fill out our referral form and we'll take it from there." />
      </Head>
      <main>
        <Referrals />
      </main>
    </div>
  );
}
