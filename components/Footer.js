import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const FooterStyles = styled.footer`
  min-height: 20rem;
  background: var(--light-grey);
  img {
    margin: 0 auto;
  }
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  padding: 2rem;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  a {
    padding: 0 2rem;
    text-decoration: none;
    color: var(--lighter-black);
}
`;

const Copyright = styled.div`
  & p {
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }
`;

const Footer = () => (
  <FooterStyles>
    <FooterContent>
      <div className="centered">
        <Image src="/logo.png" height={60} width={150} alt="fast selling solutions" />
      </div>
      <FooterLinks>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/refer">
          <a>Refer</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
      </FooterLinks>
      <Copyright>
        <p>© Fast Selling Solutions, LLC</p>
      </Copyright>
    </FooterContent>
  </FooterStyles>
);

export default Footer;
