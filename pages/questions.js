import Head from 'next/head';
import Questions from '../components/Questions/Questions';

export default function questions() {
  return (
    <div>
      <Head>
        <meta name="description" content="Got a question about our home-buying business? Submit your question and we'll get back to you as soon as possible." />
        <title>Fast Selling Solutions | Questions?</title>
      </Head>
      <main>
        <Questions />
      </main>
    </div>
  );
}
