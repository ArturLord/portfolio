import React from 'react';

import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import {
  Section,
  Container,
  FlexContainer,
  Content,
  Heading,
  SubHeading,
  ContactBlock,
  Button,
  LinkButton,
  SocialLinksContainer,
  AvatarImage,
} from '../StyledComponents/BannerStyled';

import Image from '../assets/avatar.png';

const Banner = () => {
  return (
    <Section id="home">
      <Container>
        <FlexContainer>
          <Content>
            <Heading
              as={motion.h1}
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Artur <span>Karsten</span>
            </Heading>
            <SubHeading
              as={motion.div}
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <span>Я </span>
              <TypeAnimation sequence={['Frontend Developer', 4000]} speed={10} />
            </SubHeading>
            <ContactBlock
              as={motion.div}
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link smooth={true} spy={true} to="contact">
                <Button>Contact me</Button>
              </Link>
              <Link smooth={true} spy={true} to="work">
                <LinkButton>My Portfolio</LinkButton>
              </Link>
            </ContactBlock>
            <SocialLinksContainer
              as={motion.div}
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <a href="https://github.com/ArturLord?tab=repositories" target="blank">
                <FaGithub />
              </a>
              <a href="https://t.me/your1ord" target="blank">
                <FaTelegram />
              </a>
              <a
                href="https://wa.me/79130668832?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B"
                target="blank"
              >
                <FaWhatsapp />
              </a>
            </SocialLinksContainer>
          </Content>
          <AvatarImage
            as={motion.img}
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            src={Image}
            alt="ava"
          />
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Banner;
