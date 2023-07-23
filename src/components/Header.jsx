import React from 'react';

import { HeaderBlock, Container, FirstName, Button } from '../StyledComponents/HeaderStyled';

const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <a href="#">
          <FirstName>Artur</FirstName>
          <h2>Karsten</h2>
        </a>
        <Button className="btn btn-sm">Programmer</Button>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
