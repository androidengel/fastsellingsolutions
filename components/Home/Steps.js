import styled from 'styled-components';
import CardStyles from '../styles/CardStyles';

const StepsSection = styled.section`
  padding: 0 10rem 15rem;
  max-width: 140rem;
  margin: auto;
  @media (max-width: 768px) {
    padding: 0 2rem 15rem;
  }
`;

const StepsTitle = styled.div`
    padding-bottom: 6rem;
    text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: 2rem;
  justify-items: center;
  grid-row-gap: 6rem;
`;

const StepCard = styled(CardStyles)`
  max-width: 30rem;
  background: linear-gradient(0deg, rgba(240,240,240,1), rgba(255,255,255,1));
  p {
    margin: 0;
  }
  small {
    font-weight: bold;
    color: var(--lighter-black);
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  hr {
    border: 1px solid var(--orange);
    background-color: var(--orange);
  }
`;

const CardIcon = styled.div`
  max-width: 5rem;
  margin: 1rem auto;
  line-height: 1;
  svg {
    border-radius: 100%;
    border: 2px solid ;
    padding: .5rem;
    position: absolute;
    max-width: 5rem;
    top: -31px;
    background: #fff;
  }
`;

const Steps = () => (
  <StepsSection>
    <StepsTitle>
      <h1 className="heading">Our services are free</h1>
      <div className="sub-heading">
        <p>Zero fees. Zero commissions.</p>
      </div>
    </StepsTitle>
    <CardGrid>
      <StepCard>
        <small>Step 1</small>
        <h1>Contact us</h1>
        <CardIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </CardIcon>
        <hr />
        <p>
          Call/text us at
          {' '}
          <a className="phone" href="tel:920-315-0080">920-315-0080</a>
          {' '}
          or fill out our form at the top of this page.
        </p>
      </StepCard>
      <StepCard>
        <small>Step 2</small>
        <h1>Consultation</h1>
        <CardIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h3a2 2 0 002-2M9 5a2 2 0 012-2h3a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </CardIcon>
        <hr />
        <p>We&apos;ll discuss your situation with you to determine how to best solve your problem. We may setup time to view the property for a more detailed assessment.</p>
      </StepCard>
      <StepCard>
        <small>Step 3</small>
        <h1>The offer</h1>
        <CardIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg> */}
        </CardIcon>
        <hr />
        <p>We&apos;ll make you a fair, no-obligation offer. If you choose to accept, we&apos;ll work to close on your timeline.</p>
      </StepCard>
    </CardGrid>
  </StepsSection>
);

export default Steps;
