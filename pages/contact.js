import Head from 'next/head';
import Contact from '../components/Contact';

export default function contact() {
  return (
    <div>
      <Head>
        <meta name="description" content="We'd love to learn more about your situation. Contact our professional home buying team to get a no-obligation offer on your house." />
        <title>Fast Selling Solutions | Contact Us</title>
      </Head>
      <main>
        <Contact />
      </main>
    </div>
  );
}
