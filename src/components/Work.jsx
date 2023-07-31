import React from 'react';

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
          <SubContainer>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                data-aos-delay="50"
                data-aos-offset="120"
                data-aos-easing="ease-in-out"
              >
                <Heading>My Work</Heading>
                <Description>Здесь Вы можете нажать на проект и перейти к просмотру</Description>
                <Button><a href='https://github.com/ArturLord?tab=repositories' target='blank'>
                Смотреть все проекты</a></Button>
              </div>
              <a   href='https://house-game-nsk.vercel.app/' target='blank'>
                <ImageContainer
                 data-aos="zoom-in-up"
                data-aos-duration="1600"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
              >
                <Image src={Img1} alt="img1" />
                <Tag>Интернет-магазин Игровых приставок</Tag>
                <Title>HouseGame Nsk</Title>
              </ImageContainer>
              </a>
          </SubContainer>
          <SubContainer>
             <a  href='https://apple-shop-theta.vercel.app/' target='blank'>
               <ImageContainer
              data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
              >
                <Image src={Img2} alt="img2" />
                <Tag>Интернет-магазин Apple техники</Tag>
                <Title>AppleShop</Title>
              </ImageContainer>
             </a>
             <a  href='https://mfp.vercel.app/' target='blank'>
               <ImageContainer
               data-aos="zoom-in-up"
               data-aos-duration="1700"
               data-aos-delay="50"
               data-aos-easing="ease-in-out"
              >
                <Image src={Img3} alt="img3" />
                <Tag>Социальная сеть. *Находится в разработке
                </Tag>
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
