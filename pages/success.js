import Head from 'next/head';
import Success from '../components/Success';

export default function success() {
  return (
    <div>
      <Head>
        <title>Fast Selling Solutions | Success</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main>
        <Success />
      </main>
    </div>
  );
}
