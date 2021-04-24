import styled from 'styled-components';
import PropertyForm from '../PropertyForm';

const HeroStyles = styled.section`
  display: flex;
  background-image: url('/hero-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  margin: 0 auto;
  padding: calc(var(--nav-height) + 4rem) 2rem;
  height: 80vh;
`;

const Split = styled.div`
  display: flex;
  & > div {
    width: 50%;
  }
  h1 {
    font-size: 6rem;
    line-height: 1.15;
  }
  form {
    width: 60rem;
  }
`;

const Hero = () => (
  <HeroStyles>
    <div className="inner-content">
      <Split>
        <div>
          <h1>A simplified home-selling experience.</h1>
          <p>We buy problem properties without hassle. No cleanup, no repairs.</p>
        </div>
        <PropertyForm />
      </Split>
    </div>
  </HeroStyles>
);

export default Hero;
