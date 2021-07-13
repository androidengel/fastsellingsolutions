import styled from 'styled-components';
import Head from 'next/head';
import Faq from '../components/Faq/Faq';

const FaqStyles = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
`;

const faq = () => (
  <FaqStyles>
    <Head>
      <meta name="description" content="Read our FAQs to learn more about how we can buy your house fast in Wisconsin." />
    </Head>
    <main>
      <div className="inner-content">
        <h1>Frequently Asked Questions</h1>
        <Faq />
      </div>
    </main>
  </FaqStyles>
);

export default faq;
