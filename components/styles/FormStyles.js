import styled from 'styled-components';

const FormStyles = styled.form`
  max-width: 500px;
  min-width: 30rem;
  font-size: 1.5rem;
  padding-bottom: 2rem;
  fieldset {
    border: var(--card-border);
    border-radius: 2px;
    padding: 4rem;
    background: white;
    box-shadow: var(--bs);
    @media (max-width: 600px) {
      padding: 2rem;
    }
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
  textarea {
    height: 150px;
  }
  button {
    margin-top: 0rem;
    width: 100%;
    padding: 1.6rem;
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
