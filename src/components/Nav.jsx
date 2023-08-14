import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatDots } from 'react-icons/bs';
import { Link } from 'react-scroll';

import { NavContainer, Container, NavWrapper } from '../StyledComponents/NavStyled';

const Nav = () => {
  return (
    <NavContainer>
      <Container>
        <NavWrapper>
          <Link activeClass="active" smooth={true} spy={true} offset={-200} to="home">
            <BiHomeAlt />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="about">
            <BiUser />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="services">
            <BsClipboardData />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="work">
            <BsBriefcase />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="contact">
            <BsChatDots />
          </Link>
        </NavWrapper>
      </Container>
    </NavContainer>
  );
};

export default Nav;
