import styled from 'styled-components';

import Service from '../assets/services.png';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120vh;
  @media (min-width: 1024px) {
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 75%;
  padding-top: 40px;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

export const FlexContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    gap: 85px;
    flex-direction: row;
    max-width: 960px;
  }
`;

export const LeftColumn = styled.div`
  text-align: center;
  margin-bottom: 30px;
  background-image: none;
  background-repeat: no-repeat;
  mix-blend-mode: lighten;

  @media (min-width: 1024px) {
    gap: 120px;
    text-align: start;
    flex-direction: row;
    background-image: url(${Service});
    width: 465px;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
`;

export const Heading2 = styled.h2`
  font-size: 38px;
  font-weight: bold;
  color: #b809c3;
  font-family: 'Orbitron';
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export const Heading3 = styled.h3`
  max-width: 400px;
  font-size: 23px;
  margin-bottom: 36px;
  font-family: 'Aldrich';
  font-weight: 400;
  line-height: 1.3;
`;

export const ServiceItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 126px;
  margin-bottom: 38px;
  display: flex;
`;

export const ServiceContent = styled.div`
  max-width: 476px;
`;

export const Heading4 = styled.h4`
  font-size: 22px;
  font-weight: bold;
  font-family: 'Orbitron';
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-family: 'secondary';
  line-height: 1.2;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: end;
  justify-content: space-around;
`;

export const LinkButton = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 42px;
  padding: 13px;
  border-radius: 50px;
  background: linear-gradient(
    92.23deg,
    #406aff 21.43%,
    #3bace2 50.63%,
    #b936ee 100%,
    #ff56f6 117.04%
  );
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

export const TextLink = styled.a`
  background: linear-gradient(
    92.23deg,
    #406aff 21.43%,
    #3bace2 50.63%,
    #b936ee 100%,
    #ff56f6 117.04%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.15);
  }
`;