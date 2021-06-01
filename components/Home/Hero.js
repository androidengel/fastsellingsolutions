import styled from 'styled-components';
import Image from 'next/image';
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
    padding-bottom: 1rem;
  }
  form {
    width: 60rem;
  }
`;

const Title = styled.div`
  display: flex;
  h2 {
    padding-right: 1rem;
  }
`;

const Hero = () => (
  <HeroStyles>
    <div className="inner-content">
      <Split>
        <div>
          <h1>A simplified house-selling experience.</h1>
          <div className="sub-heading">
            <p>We buy problem properties without hassle.</p>
            <p>No cleanup, no repairs.</p>
          </div>
        </div>
        <PropertyForm>
          <Title>
            <h2>Start here for an all-cash offer!</h2>
            <Image src="/down-arrow.svg" height={50} width={50} />
          </Title>
        </PropertyForm>
      </Split>
    </div>
  </HeroStyles>
);

export default Hero;
