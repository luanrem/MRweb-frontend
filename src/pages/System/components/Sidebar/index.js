import React from 'react';
import { NavLink } from 'react-router-dom';

import Hidden from '@material-ui/core/Hidden';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from "@material-ui/core/Divider";


import { Container, BackgroundSideImage } from './styles';
import image from '../../../../assets/pictures/universe-banner5.jpg';


export default function Sidebar(props) {
  const { open, routes, handleDrawerToggle } = props;


  var links = (
    <List className="list">
      {routes.map((prop, key) => {

        return (
          <NavLink
          to={prop.layout + prop.path}
          className="navLink"
          key={key}
          >
            <ListItem onClick={open ? handleDrawerToggle : null} button className="listItem">
              <ListItemIcon>
                <prop.icon className="itemIcon" />
              </ListItemIcon>
              <ListItemText className="itemText" primary={prop.name} />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  )

  var brand = (
    <div className="brand">
      <a href="/system"><p>Missão Rama</p></a>
    </div>
  );

  return (
    <Container>
      {/*Hidden for phone user*/}
        <Hidden mdUp className="HiddenPhone" implementation="css">
          <Drawer
            className="drawerPaper"
            anchor="right"
            variant="temporary"
            onClose={props.handleDrawerToggle}
            open={open}
          >
            {brand}
            <Divider />
            {links}
            {image !== undefined ? (
              <BackgroundSideImage img={image}
              />
            ) : null}
          </Drawer>
        </Hidden>

        {/*Hidden for desktop user*/}
        <Hidden smDown className="Hidden" implementation="css">
          <Drawer
            className="drawerPaper"
            anchor="left"
            variant="permanent"
          >
            {brand}

            <Divider />

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
