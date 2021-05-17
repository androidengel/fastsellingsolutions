import styled from 'styled-components';
import GenericForm from './GenericForm';

const FinalCTAStyles = styled.div`
  display: flex;
  background-image: url('/background-finalcta.svg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  form {
    display: block;
    margin: 0 auto;
    text-align: left;
  }
`;

const SubHeading = styled.div`
  padding-bottom: 4rem;
`;

const FinalCTA = () => (
  <FinalCTAStyles>
    <div className="inner-section">
      <h1 className="heading">No strings attached</h1>
      <SubHeading className="sub-heading">
        <p>Contact us today for a fair cash offer.</p>
        <p>There is no obligation to sell – that is 100% up to you.</p>
      </SubHeading>
      <GenericForm />
    </div>
  </FinalCTAStyles>
);

export default FinalCTA;
