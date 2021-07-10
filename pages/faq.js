import styled from 'styled-components';
import Faq from '../components/Faq/Faq';

const FaqStyles = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
`;

const faq = () => (
  <FaqStyles>
    <div className="inner-content">
      <h1>Frequently Asked Questions</h1>
      <Faq />
    </div>
  </FaqStyles>
);

export default faq;
