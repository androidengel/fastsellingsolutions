import styled from 'styled-components';
import useForm from '../hooks/useForm';

const FormStyles = styled.form`
  max-width: 600px;
  min-width: 30rem;
  font-size: 1.5rem;
  padding-bottom: 2rem;
  fieldset {
    border: var(--card-border);
    border-radius: 2px;
    padding: 4rem;
    background: white;
    box-shadow: var(--bs);
  }
  h2 {
    text-align: center;
  }
  label {
    margin-bottom: 1rem;
    font-weight: bold;
    & span {
      color: var(--red);
    }
  }
  a {
    color: var(--light-blue);
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
      color: var(--light-blue-hover);
    }
  }
  button {
    margin-top: 2rem;
    width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    width: 46%;
  }
`;

const Form = () => {
  const { inputs, handleChange, clearForm } = useForm();

  return (
    <FormStyles>
      <fieldset>
        <h2>Tell us about your property!</h2>
        <label htmlFor="address" name="address">
          Property address
          <span>*</span>
          <input type="text" name="address" value={inputs.address} onChange={handleChange} required />
        </label>
        <FormRow>
          <label htmlFor="email" name="email">
            Email
            <span>*</span>
            <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
          </label>
          <label htmlFor="phone" name="phone">
            Phone
            <span>*</span>
            <input type="phone" name="phone" value={inputs.phone} onChange={handleChange} required />
          </label>
        </FormRow>
        <button type="submit">Submit</button>
      </fieldset>
    </FormStyles>
  );
};

export default Form;
