import React from 'react';
import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className="py-[200px] min-h-[120vh]  lg:section lg:min-h-[100vh]" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center border-2 rounded-3xl border-white box bg-black/10"
        >
          <h1 className="font-semibold text-3xl px-[7px] pt-10 pt-7 mb-11 sm:text-5xl">Связаться со мной</h1>
          <div className="flex justify-center fil font-semibold font-primary gap-4 sm:gap-8 lg:gap-16">
            <a
              className="pt-[30px] flex flex-col items-center"
              href="https://github.com/ArturLord?tab=repositories"
              target="blank"
            >
              <FaGithub className="text-[42px] con lg:text-[177px] hover:scale-125 sm:text-[77px] mb-3" />
              <h3>Git</h3>
            </a>
            <a
              className="pt-[90px] pb-[40px] flex flex-col items-center"
              href="https://t.me/your1ord"
              target="blank"
            >
              <FaTelegram className="text-[42px] hover:scale-125 con lg:text-[177px] sm:text-[77px] mb-3" />
              <h3>Telegram</h3>
            </a>
            <a
              className="flex flex-col items-center"
              href="https://wa.me/79130668832?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B"
              target="blank"
            >
              <FaWhatsapp className="text-[42px] hover:scale-125 con lg:text-[177px] sm:text-[77px] mb-3" />
              <h3>WhatsApp</h3>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
