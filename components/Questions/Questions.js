import styled from 'styled-components';
import QuestionsForm from './QuestionsForm';

const QuestionsStyles = styled.div`
  form {
    margin: auto;
  }
`;

const Questions = () => (
  <div className="inner-content">
    <QuestionsStyles>
      <div className="centered">
        <h1>Questions?</h1>
        <div className="sub-heading">
          <p>
            Ask us anything! Let us know what other questions you may have by completing the form below.
          </p>
        </div>
      </div>
      <QuestionsForm />
    </QuestionsStyles>
  </div>
);

export default Questions;
