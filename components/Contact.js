import PropertyForm from './PropertyForm';
import Split from './Split';

const Contact = () => (
  <Split
    heading="Contact us"
    subHeading={(
      <>
        We&apos;d love to learn about you and your situation. Let&apos;s connect to see how we can solve your property problems. Just fill out this form or call/text us at
        {' '}
        <a className="phone" href="tel:920-315-0080">920-315-0080</a>
        {' '}
        for a no-obligation consultation.
        {' '}
      </>
)}
    right={<PropertyForm />}
  />
);

export default Contact;
