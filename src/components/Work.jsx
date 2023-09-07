import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/port1.png';
import Img2 from '../assets/port2.png';
import Img3 from '../assets/port4.png';

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto text-center lg:text-left">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-4 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="text-[22px] lg:max-w-sm mb-12">
                Здесь Вы можете нажать на проект и перейти к просмотру
              </p>
              <button className="btn btn-sm">
                <a href="https://github.com/ArturLord?tab=repositories" target="blank">
                  Смотреть все проекты
                </a>
              </button>
            </div>
            <a href="https://house-game-nsk.vercel.app/" target="blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt="img1"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-[68px] sm:group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text[12px] sm:text-[25px] text-gradient">HouseGame Nsk</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-9 sm:group-hover:bottom-16 transition-all duration-700 z-50">
                  <span className="text-[14px] sm:text-2xl text-white">Интернет-магазин Игровых приставок</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 cursor-pointer"
          >
            <a href="https://apple-shop-theta.vercel.app/" target="blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt="img2"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-[68px] sm:group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text[12px] sm:text-[25px] text-gradient">AppleShop</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-9 sm:group-hover:bottom-16 transition-all duration-700 z-50">
                  <span className="text-[14px] sm:text-2xl text-white">Интернет-магазин Apple техники</span>
                </div>
              </div>
            </a>
            <a href="https://mfp.vercel.app/" target="blank">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt="img3"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-[68px] sm:group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text[12px] sm:text-[25px] text-gradient">My Favourite Pets</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-9 sm:group-hover:bottom-16 transition-all duration-700 z-50">
                  <span className="text-[14px] sm:text-2xl text-white">
                    Социальная сеть. *Находится в разработке
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
