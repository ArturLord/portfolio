import React from 'react';

import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

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
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <Section ref={ref} id="home">
      <Container>
        <FlexContainer>
          {inView && (
            <Content
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="70"
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
            >
              <Heading>
                Artur <span>Karsten</span>
              </Heading>
              <SubHeading>
                <span>Я </span>
                <TypeAnimation sequence={['Frontend Developer', 4000]} speed={10} />
              </SubHeading>
              <ContactBlock>
                <Link smooth={true} spy={true} to="contact">
                  <Button>Contact me</Button>
                </Link>
                <Link smooth={true} spy={true} to="work">
                  {' '}
                  <LinkButton>My Portfolio</LinkButton>
                </Link>
              </ContactBlock>
              <SocialLinksContainer>
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
          )}
          {inView && (
            <AvatarImage
              data-aos="fade-left"
              data-aos-delay="70"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1500"
              src={Image}
              alt="ava"
            />
          )}
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Banner;
