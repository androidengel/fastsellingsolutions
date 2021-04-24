import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/favicon.png" crossOrigin="anonymous" />
    <script async src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_KEY}&libraries=places&callback=initMap`} />
    <title>Fast Selling Solutions</title>
  </Head>
);

export default Meta;
