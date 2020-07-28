import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  width: auto;

  .thumbnail {
    max-width: 300px;
    margin: 0 auto;
    overflow-x: auto;
    white-space: nowrap;
  }
`;


export const Photo = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  div {
    margin: 0 auto;
  }

    img {
      height: auto;
      max-width: 700px;
      width: 100%;
    }

  .alice-carousel {
    width: auto;
    height: auto;
  }


`;

export const Thumb = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 10px;
  }
`;
