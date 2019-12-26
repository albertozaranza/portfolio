import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  &:link,
  &:visited {
    color: inherit;
  }
`;

export const Image = styled.div`
  position: relative;
`;

export const Gif = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;
