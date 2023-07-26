import styled from 'styled-components';

export const Section = styled.section`
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    min-height: 95vh;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;

  @media (min-width: 1024px) {
    width: 1200px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.5rem;
    text-align: start;
  }
`;

export const SubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    gap: 0;
  }
`;

export const Heading = styled.h2`
  font-size: 32px;
  line-height: 1.55;
  color: #b809c3;
  text-transform: uppercase;
  font-family: 'Orbitron';
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 19px;
  margin: 0 10px;
  font-size: 22px;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    max-width: 20rem;
    font-size: 22px;
     }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background: linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      92.23deg,
      #406aff 21.43%,
      #3bace2 50.63%,
      #b936ee 100%,
      #ff56f6 117.04%
    );

    &:active {
      transform: translateY(2px);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    & > div:first-child {
      background-color: rgba(0, 0, 0, 0.7);
    }

    span {
      position: absolute;
      display: flex;
      bottom: 10%;
    }

    & img {
      transform: scale(1.25);
      filter: brightness(0.4);
    }

    & > div:nth-child(3) {
      bottom: 1.75rem;
    }

    & > div:last-child {
      bottom: 2.5rem;
    }
  }
`;

export const Image = styled.img`
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
`;

export const Tag = styled.span`
  position: absolute;
  bottom: -30%;
  font-weight: bold;
  font-size: 13px;
  left: 1.5rem;
  transition: all 0.5s ease;
  background: linear-gradient(90deg, rgba(94, 246, 231, 1) 0%, #3ff03f 94%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 1024px) {
    bottom: -10%;
    left: 1.5rem;
    font-size: 19px;
  }
`;

export const Title = styled.span`
  position: absolute;
  bottom: -100%;
  margin-bottom: 20px;
  left: 1.5rem;
  background: linear-gradient(90deg, rgba(92, 238, 224, 1) 0%, rgba(232, 67, 162, 1) 94%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.7s ease;
  font-size: 18px;
  color: #fff;

  @media (min-width: 1024px) {
    margin-bottom: 25px;

    font-size: 25px;
  }
`;
