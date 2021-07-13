import Head from 'next/head';
import About from '../components/About';

export default function about() {
  return (
    <div>
      <Head>
        <meta name="description" content="Fast Selling Solutions is professional home buying business located in Oshkosh, WI. We buy houses in Wisconsin fast!" />
      </Head>
      <main>
        <About />
      </main>
    </div>
  );
}
