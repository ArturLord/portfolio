import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 80px;

  @media (min-width: 1024px) {
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  width: 1200px;
  border: 2px solid #fff;
  box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);
  border-radius: 20px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const Title = styled.h1`
  font-size: 46px;
  margin-top: 30px;
  margin-bottom: 45px;
  text-align: center;

  @media (max-width: 628px) {
    font-size: 38px;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  /* background-color: #000; */
  justify-content: center;
  gap: 2rem;

  a {
    transition: all 0.4s ease-in-out;
    &:nth-child(1) {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    &:nth-child(2) {
      margin-top: 90px;
      margin-bottom: 40px;
    }

    &:hover {
      transform: scale(1.2);
    }

    h3 {
      text-align: center;
    }
  }

  svg {
    width: 77px;
    height: 77px;
    margin: 0 auto;
    margin-bottom: 10px;
    filter: drop-shadow(9px 9px 9px rgba(190, 20, 237, 0.3));
  }

  @media (min-width: 1024px) {
    gap: 4rem;
    svg {
      width: 177px;
      height: 177px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 628px) {
    gap: 0.2rem;
    svg {
      width: 42px;
      height: 42px;
      margin-bottom: 10px;
    }
  }
`;
