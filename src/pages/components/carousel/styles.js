import styled from 'styled-components';

export const Container = styled.div`


  .thumbnail {
    width: 300px;
    margin: 0 auto;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const Button = styled.button`

  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
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
