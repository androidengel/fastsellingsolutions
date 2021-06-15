import styled from 'styled-components';

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
    text-align: left;
  }
  label {
    margin-bottom: 1rem;
    font-weight: bold;
    & span.asterisk {
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
  .form-row {
    display: flex;
    justify-content: space-between;
    label {
      width: 46%;
    }
  }
`;

export default FormStyles;
