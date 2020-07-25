import React from 'react';
import { Route } from 'react-router-dom';

// import { Container } from './styles';

export default function RouteWrapper({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
    />
  );
}
