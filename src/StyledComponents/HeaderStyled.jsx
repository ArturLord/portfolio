import { styled } from 'styled-components';

export const HeaderBlock = styled.header`
  max-width: 1200px;
  margin: 0 auto;
`

export const Container = styled.div`
  display: flex;
  padding: 20px 0;
  margin: 0 15px;
  justify-content: space-between;
  align-items: center;
`

export const FirstName = styled.h2`
background: linear-gradient(
    92.23deg,
    #406aff 21.43%,
    #3bace2 50.63%,
    #b936ee 100%,
    #ff56f6 117.04%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Button = styled.button`
   padding: 0.8rem 1.8rem;
  font-size: 1.2rem;
  font-weight: 500;
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
    transform: translateY(1px);
  }
`;