import React from 'react';
import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';

import { Section, Container, Title, ContactBlock } from '../StyledComponents/ContactStyled';

const Contact = () => {

  return (
    <Section className="section" id="contact">
        <Container
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
        >
          <Title>Связаться со мной</Title>
          <ContactBlock>
            <a href="https://github.com/ArturLord?tab=repositories" target="blank">
              <FaGithub />
              <h3>Git</h3>
            </a>
            <a href="https://t.me/your1ord" target="blank">
              <FaTelegram />
              <h3>Telegram</h3>
            </a>
            <a href="https://wa.me/79130668832?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B" target="blank">
              <FaWhatsapp />
              <h3>WhatsApp</h3>
            </a>
          </ContactBlock>
        </Container>
    </Section>
  );
};

export default Contact;
