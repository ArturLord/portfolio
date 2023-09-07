import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const services = [
  {
    name: 'AppleShop',
    desc: 'Интернет-магазин по продаже Apple техники',
    link: 'Смотреть',
    url: 'https://apple-shop-theta.vercel.app/',
  },
  {
    name: 'HouseGame Nsk',
    desc: 'Интернет-магазин по продаже игровых приставок',
    link: 'Смотреть',
    url: 'https://house-game-nsk.vercel.app/',
  },
  {
    name: 'Easy Questions',
    desc: 'Небольшая викторина с несложными вопросами',
    link: 'Смотреть',
    url: 'https://easy-questions.vercel.app/',
  },
  {
    name: 'My Favourite Pets',
    desc: 'Социальная сеть для обмена фотографиями, видео',
    link: 'Смотреть',
    url: 'https://mfp.vercel.app/',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom text-center lg:text-left bg-no-repeat max-blend-lighten mb-9 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="text-[26px]  lg:max-w-[455px] mb-12">
              Я Frontend разработчик с небольшим опытом работы. <br /> Здесь Вы можете посмотреть
              мои работы
            </h3>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map(({ name, desc, link, url }, i) => {
                return (
                  <div className="border-b mb-[13px] border-white/20 h-[146px] flex" key={i}>
                    <div className="max-w-[476px]">
                      <h4 className="tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">{desc}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={url}
                        target="blank"
                        className="w-9 h-9 mb-[42px] btn-arr rounded-full font-primary text-white font-medium flex justify-center items-center"
                      >
                        <BsArrowUpRight className="" />
                      </a>
                      <a href={url} target="blank" className="text-gradient text-[16px] py-2 text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
