import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import {
  Section,
  Container,
  ImageContainer,
  ContentContainer,
  Heading2,
  Paragraph,
  Heading3,
  FlexContainer,
  CounterContainer,
  ContactBlock,
  Button,
  LinkButton,
} from '../StyledComponents/AboutStyled';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <Section ref={ref} id="about">
      <Container>
        <ImageContainer
          as={motion.div}
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        />
        <ContentContainer
          as={motion.div}
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Heading2>About Me</Heading2>
          <Paragraph>Навыки :</Paragraph>
          <Heading3>
            - TypeScript / JavaScript (ES6+) <br />
            - ReactJS / Redux Toolkit <br />
            - SCSS / styled-components / CSS <br />
            - Material UI / AOS <br />
            - ESLint / Prettier <br />- Git
          </Heading3>
          <FlexContainer>
            <CounterContainer>
              <div>{inView && <CountUp start={0} end={1} duration={3} />}</div>
              <div>
                Год опыта <br />
                Работы
              </div>
            </CounterContainer>
            <CounterContainer>
              <div>{inView && <CountUp start={0} end={7} duration={3} />}</div>
              <div>
                Проектов
                <br />
                Завершено
              </div>
            </CounterContainer>
            <CounterContainer>
              <div>{inView && <CountUp start={0} end={1} duration={3} />}</div>
              <div>
                Проект в
                <br />
                Разработке
              </div>
            </CounterContainer>
          </FlexContainer>
          <ContactBlock>
            <Link smooth={true} spy={true} to="contact">
              <Button>Contact me</Button>
            </Link>
            <Link smooth={true} spy={true} to="work">
              <LinkButton href="#">My Portfolio</LinkButton>
            </Link>
          </ContactBlock>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default About;
