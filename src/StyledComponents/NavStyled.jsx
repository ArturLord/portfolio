import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  overflow: hidden;
  z-index: 50;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const Container = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavWrapper = styled.div`
  max-width: 460px;
  height: 96px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 50px;

  a {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255);
    cursor: pointer;
  }

  .active {
  background: linear-gradient(
    92.23deg,
    #406aff 21.43%,
    #3bace2 50.63%,
    #b936ee 100%,
    #ff56f6 117.04%
  );
  color: #fff;
  padding: 1rem;
  border-radius: 100%;
}
`;