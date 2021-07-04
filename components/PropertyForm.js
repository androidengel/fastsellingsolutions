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
        <input
          type="text"
          name="fax"
          id="fax"
          value={inputs.fax}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name}
          placeholder="Name*"
          onChange={handleChange}
          required
        />
        <AddressInput inputController={{ inputs, setInputs }} />
        <input
          type="email"
          name="email"
          id="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email*"
          required
        />
        <input
          type="phone"
          name="phone"
          id="phone"
          value={inputs.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <div>{error ? <p>{`Error: ${error}`}</p> : ''}</div>
        <button type="submit" disabled={loading}>{(loading) ? 'SUBMITTING ...' : 'MAKE ME AN OFFER!'}</button>
      </fieldset>
    </FormStyles>
  );
};

export default PropertyForm;
