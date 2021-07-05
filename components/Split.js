import styled from 'styled-components';

const SplitStyles = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  max-width: 40rem;
  margin-top: 10rem;
  @media (max-width: 768px) {
    margin-top: 0rem;
    text-align: center;
    margin: 0 auto;
  }
`;

const RightSide = styled.div`
  margin-left: auto;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Split = (props) => {
  const { heading, subHeading, right } = props;

  return (
    <SplitStyles className="inner-content">
      <LeftSide>
        <h1>{heading}</h1>
        <div className="sub-heading">
          <p>{subHeading}</p>
        </div>
      </LeftSide>
      <RightSide>
        <p>{right}</p>
      </RightSide>
    </SplitStyles>
  );
};

export default Split;
