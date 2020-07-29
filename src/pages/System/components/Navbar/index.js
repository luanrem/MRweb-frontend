import React from 'react';

import NavbarMenus from '../NavbarMenus';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";


import Menu from "@material-ui/icons/Menu";

import { Container } from './styles';

export default function Navbar(props) {
  return (
    <Container>
      <AppBar className="appbar" position="fixed">
        <Toolbar>
          <div><h1>Teste</h1></div>

          <Hidden smDown>
            <NavbarMenus />
          </Hidden>

          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>

        </Toolbar>
      </AppBar>
    </Container>

  );
}
