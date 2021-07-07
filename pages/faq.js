import styled from 'styled-components';
import Link from 'next/link';

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
      <p>
        At the heart of our business, we are problem solvers. Our clients are typically going through a difficult situation and their house has become a burden.
        Not only do we buy problem properties as-is, but we focus on how we can put you in a better situation. We will tailor our approach to your unique problem so
        you can leave with the right solution for you and a weight lifted off your shoulders.
      </p>
      <p>
        Our services may not be for everyone. Depending on your situation, you may be better off listing your house with a real estate agent. However, that is not
        always the best option. Our professional home buying services are an excellent solution if you are going through any of the following situations:
        <ul>
          <li>You need to sell your house quickly.</li>
          <li>Your house needs significant repairs.</li>
          <li>Your house needs a major cleanout.</li>
          <li>You are behind on mortgage payments.</li>
          <li>You are facing foreclosure.</li>
          <li>You inherited a house that you do not want.</li>
          <li>You owe more than the house is worth.</li>
          <li>You own one or more rental properties and no longer want to be a landlord.</li>
        </ul>
      </p>
      <p>
        If you can relate to any of these situations,
        {' '}
        <Link href="/contact">
          <a>contact us</a>
        </Link>
        {' '}
        today. There is
        {' '}
        <strong>no obligation</strong>
        {' '}
        to accept our offer and
        {' '}
        <strong>no fees</strong>
        {' '}
        to work with us. If our
        services aren&apos;t right for you, we&apos;ll gladly recommend other businesses that may be able to help.
      </p>
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
