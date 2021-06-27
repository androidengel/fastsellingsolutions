import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #2360a7;
    --light-blue: #2EB0ED;
    --light-blue-hover: #82d0f5;
    --green: #41B550;
    --orange: #F3880A;
    --black: #393939;
    --red: #f04646;
    --lighter-black: #949494;
    --light-grey: #ededed;
    --max-width: 1000px;
    --nav-height: 100px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    --card-border: 1px solid #dadada;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/Poppins-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 10px;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Poppins';
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  p {
    font-size: 1.8rem;
  }
  button, .button {
    border: 0;
    font-size: 2rem;
    background: var(--light-blue);
    color: white;
    padding: .6rem 2.5rem;
    text-decoration: none;
    font-family: 'Poppins';
    font-weight: normal;
    letter-spacing: .75px;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    max-height: 4rem;
    &:hover:enabled {
      cursor: pointer;
      background: var(--light-blue-hover);
    }
    &:hover {
      cursor: pointer;
      background: var(--light-blue-hover);
    }
    &:hover:disabled{
      background: var(--light-blue);
    }
    &[disabled] {
      cursor: default;
      opacity: 0.5;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  input, textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    color: var(--black);
    font-family: 'Poppins';
    font-size: 1.8rem;
    border: 1px solid var(--lighter-black);
    border-radius: 2px;
    &:focus {
      outline: 0;
      border-color: var(--light-blue);
    }
    &:read-only {
      color: var(--lighter-black);
      background: var(--light-grey);
    }
  }
  textarea {
    min-height: 20rem;
  }
  .inner-content {
    max-width: var(--max-width);
    /* min-height: 90vh; */
    margin: 0 auto;
    padding: calc(var(--nav-height) + 4rem) 2rem;
    @media (max-width: 768px) {
      padding: calc(var(--nav-height) + 11rem) 1rem;
    }
  }
  
  .inner-section {
    max-width: var(--max-width);
    /* min-height: 90vh; */
    margin: 0 auto;
    padding: 0 2rem 11rem 2rem;
  }
  
  .middle-center {
    text-align: center;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heading {
    font-size: 4.6rem;
    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }

  .sub-heading p {
    margin: 0;
  }

  .centered {
    text-align: center;
  }

  .full-page {
    min-height: 90vh;
  }
  
  .phone { 
    text-decoration: none;
    color: var(--orange);
    font-weight: bold;
  }

  #fax {
    display: none;
  }

  @media (max-width: 768px) {
    h1 {
      line-height: 1.2;
    }
  }
`;

export default GlobalStyles;
