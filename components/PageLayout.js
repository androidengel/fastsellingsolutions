import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';

const StyledPage = styled.div`
  color: var(--black);
`;

const PageLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <StyledPage>
      <Meta />
      <Nav />
      {children}
      <Footer />
    </StyledPage>
  </>
);

export default PageLayout;
