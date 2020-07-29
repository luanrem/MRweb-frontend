import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import image from '../../assets/pictures/universe-banner2.jpg';

import systemRoutes from '../../routes/SystemRoutes';

import { Container } from './styles';

// On SwitchRoutes I will choose what function on Rama will access witch menu
const switchRoutes = (
  <Switch>
    {systemRoutes.map((prop, key) => {
      if (prop.layout === "/system") {
        return(
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
)

export default function System() {
  return (
    <Container>

    <Sidebar
      routes={systemRoutes}
      open="false"
      image={image}
    />

    </Container>
  );
}
