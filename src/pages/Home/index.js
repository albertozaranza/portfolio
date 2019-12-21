import React from 'react';

import { Link } from 'react-router-dom';

import githubLogo from '~/assets/github-logo.svg';
import linkedinLogo from '~/assets/linkedin-logo.svg';
import avatar from '~/assets/avatar.jpg';

import {
  Container,
  Header,
  Info,
  Social,
  Links,
  Main,
  SeeMore,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Info>
          <img src={avatar} alt="avatar" />
          <h3>Trabalhos e informações sobre</h3>
          <h1>Alberto Zaranza</h1>
          <h2>Desenvolvedor ReactJS, React Native, NodeJS</h2>
        </Info>
        <Social>
          <span>Copyrigth &copy; by Alberto Zaranza</span>
          <Links>
            <a href="https://github.com/albertozaranza">
              <img src={githubLogo} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/albertozaranza">
              <img src={linkedinLogo} alt="linkedin logo" />
            </a>
          </Links>
        </Social>
      </Header>
      <Main>
        <h2>Um pouco mais sobre mim:</h2>
        ⠀⠀Sou desenvolvedor Front-End com experiência em React Native, ReactJS e
        NodeJS. Atualmente estou cursando Ciência da Computação no Instituto
        Federal de Educação, Ciência e Tecnologia do Ceará (IFCE), onde
        trabalhei por dois anos como Bolsista de Iniciação Científica sendo
        desenvolvedor mobile. Além disso, domino o nível de inglês
        intermediário.
        <Link to="/about">
          <SeeMore>Ver mais</SeeMore>
        </Link>
      </Main>
    </Container>
  );
}
