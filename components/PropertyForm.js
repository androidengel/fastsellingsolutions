import AddressInput from './AddressInput';
import useForm from '../hooks/useForm';
import useProperty from '../hooks/useProperty';
import FormStyles from './styles/FormStyles';

const PropertyForm = (props) => {
  const {
    inputs,
    setInputs,
    handleChange,
    clearForm,
  } = useForm({ address: '' });
  const {
    submitForm,
    loading,
    error,
  } = useProperty(inputs);

  return (
    <FormStyles onSubmit={submitForm}>
      <fieldset>
        {props.children}
        <input type="text" name="fax" id="fax" value={inputs.fax} onChange={handleChange} />
        <label htmlFor="name" name="name">
          Name
          <span className="asterisk">*</span>
          <input type="text" name="name" id="name" value={inputs.name} onChange={handleChange} required />
        </label>
        <label htmlFor="address" name="address">
          Property address
          <span className="asterisk">*</span>
          <AddressInput inputController={{ inputs, setInputs }} />
        </label>
        <div className="form-row">
          <label htmlFor="email" name="email">
            Email
            <span className="asterisk">*</span>
            <input type="email" name="email" id="email" value={inputs.email} onChange={handleChange} required />
          </label>
          <label htmlFor="phone" name="phone">
            Phone
            <input type="phone" name="phone" id="phone" value={inputs.phone} onChange={handleChange} />
          </label>
        </div>
        <div>{error ? <p>{`Error: ${error}`}</p> : ''}</div>
        <button type="submit" disabled={loading}>{(loading) ? 'SUBMITTING ...' : 'MAKE ME AN OFFER!'}</button>
      </fieldset>
    </FormStyles>
  );
};

export default PropertyForm;
