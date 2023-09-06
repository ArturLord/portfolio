import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatDots } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl items-center rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-1xl text-white/50">
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass="active" smooth={true} spy={true} offset={-200} to="home">
            <BiHomeAlt />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass="active" smooth={true} spy={true} to="about">
            <BiUser />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass="active" smooth={true} spy={true} to="services">
            <BsClipboardData />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass="active" smooth={true} spy={true} to="work">
            <BsBriefcase />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass="active" smooth={true} spy={true} to="contact">
            <BsChatDots />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
