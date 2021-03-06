import styled from 'styled-components';
import AddressInput from '../AddressInput';
import useForm from '../../hooks/useForm';
import FormStyles from '../styles/FormStyles';

const Title = styled.div`
  display: flex;
  h2 {
    padding-right: 1rem;
  }
`;

const GenericForm = (params) => {
  const { title } = params;
  const { inputs, setInputs, handleChange } = useForm({ address: '' });

  return (
    <FormStyles>
      <fieldset>
        <Title>
          <h2>{title}</h2>
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
        <button type="submit">MAKE ME AN OFFER!</button>
      </fieldset>
    </FormStyles>
  );
};

export default GenericForm;
