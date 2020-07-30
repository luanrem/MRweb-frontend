import styled from 'styled-components';

import { drawerWidth } from '../config/stylesconfig.js';

export const Container = styled.div`
  z-index: -1;
  border-bottom: 0;
  margin-bottom: 0;
  position: absolute;
  width: 100%;

  .appbar {
    width: calc(100vw - ${drawerWidth});
  }

  @media (max-width: 960px) {
    .appbar {
      width: 100vw;
    }
  }

  `;
