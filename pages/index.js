import Head from 'next/head';
import Home from '../components/Home/Home';

export default function HomePage() {
  return (
    <div>
      <Head>
        <meta name="description" content="We are professional home buyers who specialize in making your house-selling process fast and easy. We buy houses in Wisconsin fast!" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
}
