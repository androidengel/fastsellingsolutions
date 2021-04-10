import styled from 'styled-components';
import Form from '../Form';

const HeroStyles = styled.section`
  display: flex;
  background-image: url('/hero-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0 auto;
  padding: calc(var(--nav-height) + 4rem) 2rem;
  height: 90vh;
  h1 {
    font-size: 6rem;
    line-height: 1.15;
    width: 50%;
  }
`;

const Split = styled.div`
  display: flex;
  form {
    width: 60rem;
  }
`;

const Hero = () => (
  <HeroStyles>
    <div className="inner-content">
      <Split>
        <h1>A simplified home-selling experience.</h1>
        <Form />
      </Split>
    </div>
  </HeroStyles>
);

export default Hero;
