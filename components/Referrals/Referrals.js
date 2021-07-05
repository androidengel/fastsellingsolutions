import ReferralForm from './ReferralForm';
import Split from '../Split';

const Referrals = () => (
  <Split
    heading="Referrals"
    subHeading="Do you know someone with property problems or who needs to sell quickly? Fill out this form and we&apos;ll take it from there!"
    right={<ReferralForm />}
  />
);

export default Referrals;
