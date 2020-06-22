import styled from 'styled-components';

export const Container = styled.div`


  .thumbnail {
    width: 300px;
    margin: 0 auto;
    overflow-x: auto;
    white-space: nowrap;
  }
`;


export const Photo = styled.div`
  width: 700px;
  height: 200px;
  margin: 0 auto;
  div {
    margin: 0 auto;
  }

  .carouselFotos {
    display: flex;
    justify-content: center;

  }

`;

export const Thumb = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 10px;
  }
`;
