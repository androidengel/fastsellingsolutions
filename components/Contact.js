import styled from 'styled-components';
import PropertyForm from './PropertyForm';

const ContactStyles = styled.div`
  form {
    margin: auto;
  }
`;

const Contact = () => (
  <div className="inner-content">
    <ContactStyles>
      <div className="centered">
        <h1>Contact us</h1>
        <div className="sub-heading">
          <p>
            We&apos;d love to learn about you and your situation. Let&apos;s connect to see how we can solve your property problems. Just fill out the form below or call/text us at
            {' '}
            <a className="phone" href="tel:920-315-0080">920-315-0080</a>
            {' '}
            for a no-obligation consultation.
            {' '}
          </p>
        </div>
      </div>
      <PropertyForm />
    </ContactStyles>
  </div>
);

export default Contact;
