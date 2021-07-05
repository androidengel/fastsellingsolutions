import styled from 'styled-components';

const FaqStyles = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
`;

const faq = () => (
  <FaqStyles>
    <div className="inner-content">
      <h1>Frequently Asked Questions</h1>
      <h2>Why should I use Fast Selling Solutions to buy my home?</h2>
      <p>Answer</p>
      <h2>How are you different than listing with a real estate agent?</h2>
      <p>Answer</p>
      <h2>What is a &quot;professional home buyer?&quot;</h2>
      <p>Answer</p>
      <h2>What are my obligations after I contact you?</h2>
      <p>Answer</p>
      <h2>Are there any fees/commissions to work with you?</h2>
      <p>Answer</p>
      <h2>Will you be listing my house on the MLS?</h2>
      <p>Answer</p>
      <h2>Will you offer me a fair price for my home?</h2>
      <p>Answer</p>
      <h2>What kinds of houses do you buy?</h2>
      <p>Answer</p>
    </div>
  </FaqStyles>
);

export default faq;
