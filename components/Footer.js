import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const FooterStyles = styled.footer`
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

const BbbSeal = styled.div`
  padding: 1.2rem 0 0 0;
`;

const Copyright = styled.div`
  & p {
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
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
        <Link href="/referrals">
          <a>Referrals</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <Link href="/questions">
          <a>Got a question?</a>
        </Link>
      </FooterLinks>
      <BbbSeal className="centered">
        <Link href="https://www.bbb.org/us/wi/oshkosh/profile/real-estate-consultant/fast-selling-solutions-0694-1000053709/#sealclick">
          <a>
            <Image
              src="https://seal-wisconsin.bbb.org/seals/blue-seal-200-42-bbb-1000053709.png"
              alt="better business bureau"
              width={200}
              height={42}
            />
          </a>
        </Link>
      </BbbSeal>
      <Copyright>
        <p>{`© ${new Date().getFullYear()} Fast Selling Solutions, LLC`}</p>
      </Copyright>
    </FooterContent>
  </FooterStyles>
);

export default Footer;
