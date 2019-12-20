import React from 'react';

import githubLogo from '~/assets/github-logo.svg';
import linkedinLogo from '~/assets/linkedin-logo.svg';
import avatar from '~/assets/avatar.jpg';

import { Container, Header, Info, Social, Links } from './styles';

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
    </Container>
  );
}
