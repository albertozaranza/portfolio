import React from 'react';

import { Container } from './styles';

import { projects } from '~/data/projects';

export default function Jobs() {
  return (
    <Container>
      {projects.map(project => (
        <>
          <h1>{project.name}</h1>
          <h2>{project.url}</h2>
          <img src={project.preview} alt="project preview" />
        </>
      ))}
    </Container>
  );
}
