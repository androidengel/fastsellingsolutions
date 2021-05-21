import styled from 'styled-components';
import Image from 'next/image';
import AddressInput from './AddressInput';
import useForm from '../hooks/useForm';
import FormStyles from './styles/FormStyles';

const Title = styled.div`
  display: flex;
  h2 {
    padding-right: 1rem;
  }
`;

const PropertyForm = () => {
  const {
    inputs,
    setInputs,
    handleChange,
    clearForm,
    submitForm,
    loading,
    message,
    error,
  } = useForm({ address: '' });

  if (message) console.log(message);

  return (
    <FormStyles onSubmit={submitForm}>
      <fieldset>
        <Title>
          <h2>Start here for an all-cash offer!</h2>
          <Image src="/arrow.png" height={50} width={30} />
        </Title>
        <label htmlFor="name" name="name">
          Name
          <span className="asterisk">*</span>
          <input type="text" name="name" value={inputs.name} onChange={handleChange} required />
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
            <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
          </label>
          <label htmlFor="phone" name="phone">
            Phone
            <span className="asterisk">*</span>
            <input type="phone" name="phone" value={inputs.phone} onChange={handleChange} required />
          </label>
        </div>
        <div>{error ? `<p>Error: ${error}</p>` : ''}</div>
        <button type="submit" disabled={loading}>{(loading) ? 'SUBMITTING ...' : 'MAKE ME AN OFFER!'}</button>
      </fieldset>
    </FormStyles>
  );
};

export default PropertyForm;
