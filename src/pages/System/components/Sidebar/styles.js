import styled from 'styled-components';

export const Container = styled.div`

`;

export const BackgroundSideImage = styled.div`

  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props => props.img});

  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;

`;

