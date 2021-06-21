import Link from 'next/link';
import Image from 'next/image';

const About = () => (
  <div className="inner-content">
    <h1>About us</h1>
    <p>
      Fast Selling Solutions is a professional home buying business located in Oshkosh, WI. We are a husband and wife team (Andrew and Sarah) who specialize
      in solving property problems across the Fox Cities. We focus our efforts on buying distressed properites to renovate for sale or rent, which allows
      us solve difficult problems for sellers, bring new life into our communities&apos; homes, and provide updated and safe housing for new buyers or renters.
    </p>
    <p>
      The majority of our careers have been spent working in the consumer affairs industry for fortune 500 companies. We have dedicated our professional lives
      to mastering customer care, which we believe sets us apart in the home buying business. Our goal is to connect with each seller on a personal level so we can
      provide a custom solution that puts them in a better situation.
    </p>
    <p>
      We&apos;d love to learn more about you and your situation. Contact us today for a no-pressure, down-to-earth conversation. There are no costs to work with us
      and no obligation to accept our offer. If our services aren&apos;t a fit for you, we&apos;ll happily refer to you to other resources.
    </p>
    <Link href="/contact">
      <a>
        <button type="button">Contact us</button>
      </a>
    </Link>
  </div>
);

export default About;
