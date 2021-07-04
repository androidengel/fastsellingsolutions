import styled from 'styled-components';
import ReferralForm from './ReferralForm';

const Split = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  max-width: 40rem;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const RightSide = styled.div`
  margin-left: auto;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Referrals = () => (
  <div className="inner-content">
    <Split>
      <LeftSide>
        <h1>Referrals</h1>
        <div className="sub-heading">
          <p>Do you know someone with property problems or who needs to sell quickly? Fill out the form and we&apos;ll take it from there!</p>
        </div>
      </LeftSide>
      <RightSide>
        <ReferralForm />
      </RightSide>
    </Split>
  </div>
);

export default Referrals;
