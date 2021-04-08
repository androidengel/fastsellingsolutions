import PageLayout from '../components/PageLayout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </>
);

export default MyApp;
