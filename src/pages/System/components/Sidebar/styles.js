import styled from 'styled-components';

import Goodtimes from '../../../../assets/fonts/goodtimesrg.ttf'

import { drawerWidth } from '../config/stylesconfig.js';


export const Container = styled.div`

  .drawerPaper {
    border: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 600px;
  }


`;

export const BackgroundSideImage = styled.div`

  background-image: radial-gradient(circle, transparent 24%, rgba(0,0,0,0.9) 70%), url(${props => props.img});

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

export const SideBarStyle = styled.div`

  .brand {
    width: ${drawerWidth};
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;


    @font-face {
      font-family: 'MRFont';
      src: url(${Goodtimes});
    }

    a {
      text-decoration: none;
    }

    p {
      font-family: MRFont;
      font-size: 20px;
      color: white;
    }
  }

  .list {

    .navLink {
      text-decoration: none;
    }

    .listItem {
      padding-left: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      .itemIcon {
        color: white;
      }
      .itemText {
        color: white;
      }
    }
  }
`;



