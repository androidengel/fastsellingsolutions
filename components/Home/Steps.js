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
`;

const Steps = () => (
  <StepsSection>
    <CardGrid>
      <StepCard>
        <h2>Contact us</h2>
        <p>Call/text us at 920-315-0080 or fill out our form at the top of this page.</p>
      </StepCard>
      <StepCard>
        <h2>Consultation</h2>
        <p>We'll discuss your situation with you to determine how we can help. We may setup time to view the property for a more detailed assessment.</p>
      </StepCard>
      <StepCard>
        <h2>The offer</h2>
        <p>Call/text us at 920-315-0080 or fill out our form at the top of this page.</p>
      </StepCard>
    </CardGrid>
  </StepsSection>
);

export default Steps;
