import styled from 'styled-components';

import background from '~/assets/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url(${background});
  background-size: cover;
  background-position: top;

  position: fixed;
  top: 0;
  left: 0;

  width: 33.333333%;
  height: 100%;

  padding: 5rem;

  transition: all 0.5s;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 300;
  }

  h1,
  h2,
  h3 {
    text-align: center;
  }

  @media (max-width: 767px) {
    position: static;

    width: 100%;
    height: 100%;

    h1 {
      letter-spacing: 0;
    }

    h1,
    h2,
    h3 {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(333, 333, 333, 0.8);
  border-radius: 1rem;
  padding: 2rem;

  margin-top: 10rem;

  img {
    height: 15rem;
    width: 15rem;

    border-radius: 10rem;

    margin-bottom: 0.8rem;
  }

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(333, 333, 333, 0.8);
  border-radius: 1rem;
  padding: 2rem;

  span {
    font-size: 1.2rem;
  }

  a {
    margin-bottom: 1rem;

    position: relative;
    top: 0.5rem;

    img {
      height: 3rem;
    }

    &:not(:last-child) {
      margin-right: 3rem;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 33.333333%;
  padding: 3rem 5rem;

  background-color: #eee;

  font-size: 1.7rem;
  color: #777;
  text-align: justify;

  h1 {
    margin-top: 3rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 767px) {
    margin-left: 0;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

export const SeeMore = styled.button`
  width: 10rem;

  padding: 1rem;
  margin-top: 2rem;

  border-radius: 6px;

  font-size: 1.4rem;

  background-color: orange;
  color: #eee;
  border: 1px solid white;
  transition: all 0.5s;

  &:hover {
    background-color: #eee;
    color: orange;
    border: 1px solid orange;
  }
`;
