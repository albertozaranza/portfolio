import styled from 'styled-components';

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

  background-image: url('https://picsum.photos/1000');
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

  @media (max-width: 1200px) {
    position: static;

    width: 100%;
    height: 100%;
  }

  @media (max-width: 767px) {
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
  border-radius: 10px;
  padding: 10px;

  margin-top: 100px;

  img {
    height: 150px;
    width: 150px;

    border-radius: 100px;

    margin-bottom: 8px;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(333, 333, 333, 0.8);
  border-radius: 10px;
  padding: 10px;

  span {
    font-size: 1.2rem;
  }

  a {
    margin-bottom: 10px;

    position: relative;
    top: 5px;

    img {
      height: 30px;
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
`;
