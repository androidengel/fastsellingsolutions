import styled from 'styled-components';

const CardStyles = styled.div`
  border: 1px solid #dadada;
  box-shadow: var(--bs);
  padding: 2rem 3rem 3rem;
  border-radius: 2px;
  position: relative;
  background: white;
  h2 {
    position: absolute;
    color: white;
    background: var(--blue);
    border-radius: 2px;
    padding: 0 2rem;
    top: -2rem;
    left: 1rem;
    font-size: 2rem;
    font-weight: 500;
    box-shadow: var(--bs);
  }
  button {
    border-radius: 2px;
    width: 100%;
    box-shadow: var(--bs);
  }
  input {
    border: 1px solid var(--lighter-black);
    border-radius: 2px;
  }
  input[type="date"] {
    background-color: transparent;
    padding-left: 4px;
  }
  input[type="checkbox"] {
  }
  label, p {
    font-size: 1.8rem;
  }
`;

export default CardStyles;
