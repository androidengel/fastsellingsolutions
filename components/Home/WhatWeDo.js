import styled from 'styled-components';
import Link from 'next/link';

const WhatWeDoStyles = styled.div`
  background-image: url('/background-whatwedo.svg');
  background-repeat: no-repeat;
  background-size: cover;
  h3 {
    font-size: 3rem;
  }
`;

const WhatWeDo = () => (
  <WhatWeDoStyles>
    <div className="inner-section centered">
      <section>
        <h2 className="heading">Selling your house made easy.</h2>
        <p>
          We at Fast Selling Solutions dedicate ourselves to taking
          the burden off of your shoulders. Understanding that selling
          a property quickly can become overwhelming, we aim to provide
          you with fast, hassle-free solutions. We buy houses of all sizes,
          styles and conditions, so contact us for a free, no-obligation
          consultation.
        </p>
      </section>
      <section>
        <h3>Is your house causing you stress?</h3>
        <p>
          Are you going through foreclosure? Did you inherit a property?
          Are you behind on payments? Are you underwater on your mortgage?
          Do you own a vacant property? Are you tired of managing tenants?
          Do you need to move quickly?
        </p>
        <p>
          We help people out of these situations and more! We can provide
          you with a no-obligation, all cash offer and get you out from
          under your problem property quickly. You choose the closing date,
          and we take care of the rest.
        </p>
      </section>
      <section>
        <h3>Transparency, compassion, and discretion.</h3>
        <p>
          No one is immune to hardship. We understand that the situation you’re
          going through may be stressful, tragic, or even embarrassing, so know
          we will treat you with the utmost care and respect. Our solutions are
          unique to each individual to ensure we are solving your problem in a
          fair, transparent, and discrete manner. We want you to feel comfortable
          every step of the way.
        </p>
      </section>
      <section>
        <h3>We buy houses in Wisconsin!</h3>
        <p>
          There are several ways to sell your house, but there are drawbacks to
          the traditional method of using a real estate agent. Selling through
          an agent is great if you have time on your side and there are little
          to no repairs needed, but it’s not for everyone.
        </p>
        <p>
          If you need to sell quickly, there are several repairs and/or junk
          removal needed, or you’re behind on payments, using a professional
          home buying service may be exactly what you need.
        </p>
        <p>
          We buy houses as-is, and in any condition. That means you don’t need
          to make any repairs or even remove unwanted items from the home. We take
          care of it all! Even better, there are no costs or fees associated with
          working with us. Our solutions can help you out of your problem property
          and get you into a better position.
        </p>
        <p>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
          {' '}
          today. We’d love to learn about your situation and how we can help.
        </p>
      </section>
    </div>
  </WhatWeDoStyles>
);

export default WhatWeDo;
