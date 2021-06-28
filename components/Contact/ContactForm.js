import useForm from '../../hooks/useForm';
import useContact from '../../hooks/useContact';
import FormStyles from '../styles/FormStyles';

const ContactForm = () => {
  const {
    inputs,
    handleChange,
  } = useForm();
  const {
    submitForm,
    loading,
    error,
  } = useContact(inputs);

  return (
    <FormStyles onSubmit={submitForm}>
      <fieldset>
        <label htmlFor="name" name="name">
          Name
          <span className="asterisk">*</span>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} required />
        </label>
        <input type="text" name="fax" id="fax" value={inputs.fax} onChange={handleChange} />
        <div className="form-row">
          <label htmlFor="email" name="email">
            Email
            <span className="asterisk">*</span>
            <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
          </label>
          <label htmlFor="phone" name="phone">
            Phone
            <input type="phone" name="phone" value={inputs.phone} onChange={handleChange} />
          </label>
        </div>
        <label htmlFor="comments" name="comments">
          Comments
          <span className="asterisk">*</span>
          <textarea name="comments" id="comments" value={inputs.comments} onChange={handleChange} required />
        </label>
        <div>{error ? <p>{`Error: ${error}`}</p> : ''}</div>
        <button type="submit" disabled={loading}>{(loading) ? 'SUBMITTING ...' : 'SUBMIT'}</button>
      </fieldset>
    </FormStyles>
  );
};

export default ContactForm;
