import PropertyForm from './PropertyForm';

const Contact = () => (
  <div className="inner-content">
    <h1>Contact us</h1>
    <p>
      Fill out the form below or call/text us at
      {' '}
      <a className="phone" href="tel:920-315-0080">920-315-0080</a>
      {' '}
      for a no-obligation consultation.
      {' '}
    </p>
    <PropertyForm />
  </div>
);

export default Contact;
