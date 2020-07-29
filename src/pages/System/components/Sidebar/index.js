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
    <List className="list">
      {routes.map((prop, key) => {

        return (
          <NavLink
            to={prop.layout + prop.path}
            className="item"
            key={key}
          >
            <ListItem button className="itemLink listItemClasses">
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
    <div>
      <a href="/system"><p>Logo</p></a>
    </div>
  );
  return (
    <Container>
      {/*Hidden for phone user*/}

      <nav>

      <Hidden mdUp className="Hidden" implementation="css">
        <Drawer
          anchor="right"
          className="drawerPaper"
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
      <Hidden smDown className="Hidden" implementation="css">
        <Drawer
          className="drawerPaper"
          anchor="left"
          variant="permanent"
        >
          {brand}
          {links}
          {image !== undefined ? (
            <BackgroundSideImage img={image}
            />
          ) : null}
        </Drawer>
      </Hidden>
      </nav>
    </Container>
  );
}
