import React from 'react';

import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Avatar from '../assets/avatar.png';


const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <container className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold mb-2 leading-[0.8] lg:text-[80px]"
            >
              Artur <span>Karsten</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-2">Я Frontend</span>
              <TypeAnimation sequence={['Developer', 2000]} speed={50} repeat={Infinity} />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
            <Link to='contact' smooth={true} spy={true}>
            <button className="btn btn-lg">Contact me</button>
            </Link>
             <Link to='work' smooth={true} spy={true}>
             <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/ArturLord?tab=repositories" target="blank">
                <FaGithub />
              </a>
              <a href="https://t.me/your1ord" target="blank">
                <FaTelegram />
              </a>
              <a href="https://wa.me/79130668832?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B" target="blank">
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[415px]"
          >
            <img src={Avatar} alt="avatar" />
          </motion.div>
        </div>
      </container>
    </section>
  );
};

export default Banner;
