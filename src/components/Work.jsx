import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import {
  Section,
  Container,
  FlexContainer,
  SubContainer,
  Heading,
  Description,
  Button,
  Image,
  Tag,
  Title,
  ImageContainer,
} from '../StyledComponents/WorkStyled';

import Img1 from '../assets/port1.png';
import Img2 from '../assets/port2.png';
import Img3 from '../assets/port4.png';

const Work = () => {
  return (
    <Section id="work">
      <Container>
        <FlexContainer>
          <SubContainer
            as={motion.div}
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div>
              <Heading>My Work</Heading>
              <Description>Здесь Вы можете нажать на проект и перейти к просмотру</Description>
              <Button>
                <a href="https://github.com/ArturLord?tab=repositories" target="blank">
                  Смотреть все проекты
                </a>
              </Button>
            </motion.div>
            <a href="https://house-game-nsk.vercel.app/" target="blank">
              <ImageContainer>
                <Image src={Img1} alt="img1" />
                <Tag>Интернет-магазин Игровых приставок</Tag>
                <Title>HouseGame Nsk</Title>
              </ImageContainer>
            </a>
          </SubContainer>
          <SubContainer
            as={motion.div}
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <a href="https://apple-shop-theta.vercel.app/" target="blank">
              <ImageContainer>
                <Image src={Img2} alt="img2" />
                <Tag>Интернет-магазин Apple техники</Tag>
                <Title>AppleShop</Title>
              </ImageContainer>
            </a>
            <a href="https://mfp.vercel.app/" target="blank">
              <ImageContainer>
                <Image src={Img3} alt="img3" />
                <Tag>Социальная сеть. *Находится в разработке</Tag>
                <Title>My Favourite Pets</Title>
              </ImageContainer>
            </a>
          </SubContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Work;
