import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';

import {
  Section,
  Container,
  FlexContainer,
  LeftColumn,
  Heading2,
  Heading3,
  Button,
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
    desc: 'Интернет-магазин по продаже Игровых приставок',
    link: 'Смотреть',
    url: 'https://house-game-nsk.vercel.app/',
  },
  {
    name: 'Easy Questions',
    desc: 'Небольщая викторина с несложными вопросами',
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
             data-aos="zoom-in-up"
             data-aos-duration="1200"
             data-aos-delay="50"
             data-aos-offset="150"
             data-aos-easing="ease-in-out"
            >
              <Heading2 className="to-accent">What I Do</Heading2>
              <Heading3>
                Я Frontend разработчик с небольшим опытом работы.
                <br />
                Здесь Вы можете посмотреть мои работы
              </Heading3>
              <Link smooth={true} spy={true} to="work">
                <Button>Мои работы</Button>
              </Link>
            </LeftColumn>
            <RightColumn
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="50"
              data-aos-offset="150"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
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
                        <LinkButton href={url} target='blank'>
                          <BsArrowUpRight />
                        </LinkButton>
                        <TextLink href={url} target='blank'>{link}</TextLink>
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
