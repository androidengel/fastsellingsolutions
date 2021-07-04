import styled from 'styled-components';
import PropertyForm from '../PropertyForm';

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

const FinalCTA = () => (
  <FinalCTAStyles>
    <div className="inner-section">
      <h1 className="heading">No strings attached.</h1>
      <div className="sub-heading">
        <p>Contact us today for a fair cash offer.</p>
        <p>There is no obligation to sell – that is 100% up to you.</p>
      </div>
      <PropertyForm />
    </div>
  </FinalCTAStyles>
);

export default FinalCTA;
