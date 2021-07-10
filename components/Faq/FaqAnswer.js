import styled from 'styled-components';
import CardStyles from '../styles/CardStyles';

const AnswerCard = styled(CardStyles)`
  display: ${(props) => (props.display ? 'block' : 'none')};
  margin-bottom: .25rem;
`;

const FaqAnswer = ({ answer, display }) => (
  <AnswerCard display={display}>
    {answer}
  </AnswerCard>
);

export default FaqAnswer;
