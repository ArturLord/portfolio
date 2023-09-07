import React from 'react';
import CountUp from 'react-countup';
import {useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" ref={ref} id="about">
      <div className="container mx-auto text-center w-[960px] flex justify-center lg:block lg:text-left">
        <div className="flex flex-col gap-y-10 lg:flex-row-reverse lg:items-center justify-center lg:gap-x-40 lg:gap-y-0 h-[115vh]">
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat lg:h-[520px] mix-blend-lighten"
          >
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-row items-center lg:flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <p className='text-[24px] mb-2'>Навыки:</p>
            <h3 className="text-[22px] mb-8">
              {' '}
              - TypeScript / JavaScript (ES6+) <br />
              - ReactJS / Redux Toolkit <br />
              - SCSS / styled-components / CSS <br />
              - Material UI / AOS <br />
              - ESLint / Prettier <br />- Git
            </h3>
            <div className="flex gap-x-12 lg:gap-x-10 text-center mb-12">
              <div>
                <div className="text-[40px]  font-tertiary text-gradient mb-2">
                  {inView && <CountUp start={0} end={1} duration={3} />}
                </div>
                <div className="text-[13px] font-primary text-sm tracking-[2px]">
                  Год опыта <br /> Работы
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView && <CountUp start={0} end={7} duration={3} />}
                </div>
                <div className="text-[13px] font-primary text-sm tracking-[2px]">
                  Проектов <br /> Завершено
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView && <CountUp start={0} end={1} duration={3} />}
                </div>
                <div className="text-[13px] font-primary text-sm tracking-[2px]">
                  Проект в <br /> Разработке
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
            <Link to='contact' smooth={true} spy={true}>
            <button className="btn btn-lg">Contact me</button>
            </Link>
             <Link to='work' smooth={true} spy={true}>
             <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
