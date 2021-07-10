import styled from 'styled-components';
import { useState } from 'react';
import FaqAnswer from './FaqAnswer';
import CardStyles from '../styles/CardStyles';

const FaqTitle = styled(CardStyles)`
  padding: 1rem 0;
  margin-bottom: .25rem;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.09);
  display:flex;
  button {
    margin: auto 2rem;
    width: 28px;
    min-width: 28px;
    height: 28px;
    padding: 0;
    line-height: 1;
  }
  h3 {
    font-size: 2rem;
  }
  @media(max-width: 640px) {
    h3 {
      line-height: 1.6;
    }
  }
`;

const FaqItem = ({ title, children }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerOpen(!isAnswerOpen);
  };

  return (
    <article>
      <FaqTitle>
        <button type="button" onClick={toggleAnswer}>{isAnswerOpen ? '-' : '+'}</button>
        <h3>{title}</h3>
      </FaqTitle>
      <FaqAnswer answer={children} display={isAnswerOpen} />
    </article>
  );
};

export default FaqItem;
