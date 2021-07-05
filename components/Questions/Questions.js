import QuestionsForm from './QuestionsForm';
import Split from '../Split';

const Questions = () => (
  <Split
    heading="Questions?"
    subHeading="Ask us anything! Let us know what other questions you may have by completing the form."
    right={<QuestionsForm />}
  />
);

export default Questions;
