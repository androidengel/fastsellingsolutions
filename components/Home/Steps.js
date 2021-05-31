import styled from 'styled-components';
import CardStyles from '../styles/CardStyles';

const StepsSection = styled.section`
  padding: 5rem 10rem 15rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  justify-items: center;
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
        <p>Call/text us at 920-315-0080 or fill out our form at the top of this page.</p>
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
        <p>We&apos;ll discuss your situation with you to determine how we can help. We may setup time to view the property for a more detailed assessment.</p>
      </StepCard>
      <StepCard>
        <small>Step 3</small>
        <h1>The offer</h1>
        <CardIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </CardIcon>
        <hr />
        <p>We&apos;ll make you a fair, all-cash offer.</p>
      </StepCard>
    </CardGrid>
  </StepsSection>
);

export default Steps;
