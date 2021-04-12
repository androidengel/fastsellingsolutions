import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const NavStyles = styled.nav`
  border-bottom: var(--card-border);
  box-shadow: var(--bs);
  position: fixed;
  background: white;
  width: 100%;
  min-height: var(--nav-height);
  display: flex;
  justify-content: space-evenly;
  color: var(--blue);
  z-index: 10;
  a {
    color: var(--blue);
  }
  #logo {
    /* margin-right: auto;
    padding-left: 2rem; */
  }
  .phone-number {
    margin-left: 4rem;
    white-space: nowrap;
    margin: auto 0;
    padding: 0 2rem;
    font-weight: bold;
    & p {
      margin: 0;
      padding: 0 2rem;
      line-height: 1;
      text-align: center;
    }
    & a {
      font-size: 2.6rem;
      font-weight: bold;
      color: var(--orange);
      text-decoration: none;
      line-height: 1.5
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    
    #logo {
      width: 100%;
      margin: auto;
      padding: 0;
    }
    .phone-number {
      p {
        /* padding: 2rem 0 0 0; */
        text-align: center;
      }
    }

  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: auto 0;
  li {
    margin: auto 0;
    padding-left: 4rem;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    justify-content: center;
    li {
      padding-left: 0;
      padding-right: 4rem;
    }
  }
`;

const Nav = () => {
  const variable = '';

  return (
    <NavStyles>
      <div id="logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="fast selling solutions" width={240} height={97} />
          </a>
        </Link>
      </div>
      <div className="phone-number">
        <p>Call or text!</p>
        <a className="phone-number" href="tel:920-315-0080">920-315-0080</a>
      </div>
      <NavLinks>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/refer">
            <a>Refer</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </li>
      </NavLinks>
    </NavStyles>
  );
};

export default Nav;
