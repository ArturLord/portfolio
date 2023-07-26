import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';


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
    threshold: 0.4,
  });

  return (
    <Section ref={ref} id="about">
      <Container>
        {inView && (
          <ImageContainer
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          />
        )}
        {inView && (
          <ContentContainer
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
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
                  Год <br />
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
              <Link smooth={true} spy={true} to="contact"><Button>Contact me</Button></Link>
              <Link smooth={true} spy={true} to="work"><LinkButton href="#">My Portfolio</LinkButton></Link>
            </ContactBlock>
          </ContentContainer>
        )}
      </Container>
    </Section>
  );
};

export default About;
