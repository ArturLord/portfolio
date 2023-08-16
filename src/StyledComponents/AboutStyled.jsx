import styled from 'styled-components';

import Img from '../assets/about.png';

export const Section = styled.section`
  display: flex;
  align-items: center;
  z-index: 100;
  min-height: 95vh;

  @media (min-width: 1024px) {
    min-height: 90vh;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 960px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 100px;
  }
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    flex: 1;
    display: block;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: contain;
    height: 520px;
    mix-blend-mode: lighten;
    background-position: top;
  }
`;

export const ContentContainer = styled.div`
  text-align: center;
  max-width: 320px;

  @media (min-width: 1024px) {
    text-align: start;
    max-width: 1000px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 38px;
  color: #b809c3;
  font-family: 'Orbitron';
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Heading3 = styled.h3`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 15px;
  font-family: 'Rajdhani';
`;

export const Paragraph = styled.p`
  font-size: 25px;
  margin-bottom: 12px;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  gap: 6px;

  @media (min-width: 1024px) {
    gap: 10px;
  }
`;

export const CounterContainer = styled.div`
  width: 120px;
  & > div:first-child {
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-family: 'Rajdhani';
    font-weight: bold;
  }

  & > div:last-child {
    font-family: 'Aldrich';
    font-size: 12px;
    letter-spacing: 2px;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border-radius: 40px;
  font-family: 'Orbitron';
  cursor: pointer;

  background: linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);

  &:hover {
    background: linear-gradient(
      92.23deg,
      #406aff 21.43%,
      #3bace2 50.63%,
      #b936ee 100%,
      #ff56f6 117.04%
    );
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

export const LinkButton = styled.a`
  font-size: 16px;
  font-weight: 700;
  margin-left: 15px;
  font-family: 'Orbitron';
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
