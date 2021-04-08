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
    width: 100%;
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
          <input type="text" name="address" value={inputs.address} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </FormStyles>
  );
};

export default Form;
