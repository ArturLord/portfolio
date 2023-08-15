import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import {
  Section,
  Container,
  FlexContainer,
  LeftColumn,
  Heading2,
  Heading3,
  Heading4,
  Description,
  TextLink,
  RightColumn,
  ServiceItem,
  ServiceContent,
  LinkContainer,
  LinkButton,
} from '../StyledComponents/ServicesStyled';

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
    <Section id="services">
      <Container>
        <FlexContainer>
          <LeftColumn
            as={motion.div}
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Heading2 className="to-accent">What I Do</Heading2>
            <Heading3>
              Я Frontend разработчик с небольшим опытом работы.
              <br />
              Здесь Вы можете посмотреть мои работы
            </Heading3>
          </LeftColumn>
          <RightColumn
            as={motion.div}
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {services.map(({ name, desc, link, url }, i) => {
                return (
                  <ServiceItem key={i}>
                    <ServiceContent>
                      <Heading4>{name}</Heading4>
                      <Description>{desc}</Description>
                    </ServiceContent>
                    <LinkContainer>
                      <LinkButton href={url} target="blank">
                        <BsArrowUpRight />
                      </LinkButton>
                      <TextLink href={url} target="blank">
                        {link}
                      </TextLink>
                    </LinkContainer>
                  </ServiceItem>
                );
              })}
            </div>
          </RightColumn>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Services;
