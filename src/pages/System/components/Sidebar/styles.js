import styled from 'styled-components';

import { drawerWidth } from '../config/stylesconfig.js';

export const Container = styled.div`
flex-shrink: 0;

  .drawerPaper {
    border: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 600px;
  }

  .Hidden {
    width: 300px;
  }


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

