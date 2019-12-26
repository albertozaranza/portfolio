import React from 'react';

import { Container, Project, Link, Title, Image, Gif } from './styles';

import { projects } from '~/data/projects';

export default function Jobs() {
  return (
    <Container>
      {projects.map(project => (
        <Link href={`https://albertozaranza.github.io/${project.url}`}>
          <Project>
            <Title>{project.name}</Title>
            <Image>
              <img src={project.preview} alt="project preview" />
              <Gif src={project.gif} alt="project preview gif" />
            </Image>
          </Project>
        </Link>
      ))}
    </Container>
  );
}
