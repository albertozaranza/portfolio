import React from 'react';

import { Link } from 'react-router-dom';

import Jobs from '~/components/Jobs';

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
        <p>
          ⠀⠀Sou desenvolvedor Front-End com experiência em <b>React Native</b>,{' '}
          <b>ReactJS</b> e <b>NodeJS</b>. Atualmente estou cursando{' '}
          <b>Ciência da Computação</b> no Instituto Federal de Educação, Ciência
          e Tecnologia do Ceará (IFCE), onde trabalhei por <b>dois anos</b> como
          Bolsista de Iniciação Científica sendo <b>desenvolvedor mobile</b>.
          Além disso, domino o nível de <b>inglês intermediário</b>.
        </p>

        <Link to="/about">
          <SeeMore>Ver mais</SeeMore>
        </Link>
        <h2>Trabalhos recentes</h2>
        <Jobs />
      </Main>
    </Container>
  );
}
