import React from 'react';

import BG from './assets/site-bg.jpg'

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import  { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Orbitron';
}

svg {
  display: block;
  vertical-align: middle;
}
h1,h2,h3,h4,a,span,div,p, button {
  color: #fff;
  text-decoration: none;
}
button {
  border: none;
}
`

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact/>
    </>
  );
};

export default App;
