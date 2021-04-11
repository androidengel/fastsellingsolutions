import AddressInput from './AddressInput';
import useForm from '../hooks/useForm';
import FormStyles from './styles/FormStyles';

const PropertyForm = () => {
  const {
    inputs, setInputs, handleChange, clearForm,
  } = useForm({ address: '' });

  return (
    <FormStyles>
      <fieldset>
        <h2>Tell us about your property!</h2>
        <label htmlFor="address" name="address">
          Property address
          <span className="asterisk">*</span>
          <AddressInput inputController={{ inputs, setInputs }} />
        </label>
        <div className="form-row">
          <label htmlFor="email" name="email">
            Email
            <span className="asterisk">*</span>
            <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
          </label>
          <label htmlFor="phone" name="phone">
            Phone
            <span className="asterisk">*</span>
            <input type="phone" name="phone" value={inputs.phone} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">MAKE ME AN OFFER!</button>
      </fieldset>
    </FormStyles>
  );
};

export default PropertyForm;
