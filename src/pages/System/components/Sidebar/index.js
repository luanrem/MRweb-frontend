import React from 'react';
import { NavLink } from 'react-router-dom';

import Hidden from '@material-ui/core/Hidden';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { Container, BackgroundSideImage } from './styles';
import image from '../../../../assets/pictures/universe-banner2.jpg';


export default function Sidebar(props) {
  const { open, routes } = props;

  var links = (
    <List>
      {routes.map((prop, key) => {

        return (
          <NavLink
            to={prop.layout + prop.path}
            key={key}
          >
            <ListItem button>
              <ListItemIcon>
                <prop.icon />
              </ListItemIcon>
              <ListItemText primary={prop.name} />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  )

  var brand = (
    <div>
      <a href="/system"><p>Logo</p></a>
    </div>
  );
  return (
    <Container>
      {/*Hidden for phone user*/}
      <Hidden mdUp>
        <Drawer
          anchor="right"
          variant="temporary"
          open={open}
        >
          {brand}
          {links}
          {image !== undefined ? (
            <BackgroundSideImage img={image}
            />
          ) : null}
        </Drawer>
      </Hidden>

      {/*Hidden for desktop user*/}
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
        >
          {brand}
          {links}
          {image !== undefined ? (
            <BackgroundSideImage img={image}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </Container>
  );
}
