import styled from 'styled-components';
import ReferralForm from './ReferralForm';

const Referrals = () => (
  <div className="inner-content">
    <div className="centered">
      <h1>Referrals</h1>
      <div className="sub-heading">
        <p>Do you know someone with property problems or who needs to sell quickly? Fill out the form below and we&apos;ll take it from there!</p>
      </div>
    </div>
    <ReferralForm />
  </div>
);

export default Referrals;
