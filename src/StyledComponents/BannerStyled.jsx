import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  min-height: 78vh;
  
  @media (min-width: 1024px) {
    min-height: 85vh;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }
`;

export const Content = styled.div`
  flex: 1;
  text-align: center;
  font-family: 'secondary';
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Heading = styled.h1`
  font-size: 45px;
  font-weight: bold;
  line-height: 1.1;
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;

export const SubHeading = styled.div`
  font-size: 26px;
  font-family: 'secondary';
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 60px;

  span {
    margin-right: 4px;
  }
  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1.8rem;
  font-size: 1.2rem;
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
  justify-content: center;
  column-gap: 1.5rem;
  align-items: center;
  margin-bottom: 26px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const LinkButton = styled.a`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
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

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.95rem;

  svg {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const AvatarImage = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    max-width: 420px;
  }
`;