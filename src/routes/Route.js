import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// import { Container } from './styles';

export default function RouteWrapper({
  // These are the properties that Route are passing with Route in ./index.js
  component: Component, // The component we call Component with uper case C
  isPrivate = false, // This property say what component neet to be loged-in
  ...rest
}) {
  const signed = true;
  const dev = true;

  if(!dev) {
      // If the user is not signed and the route is private, redirect to main page
      if (!signed && isPrivate) {
        return <Redirect to="/" />
      }

      // If the user is signed and the route is not private, redirect to system route
      if (signed && !isPrivate) {
        return <Redirect to="/system" />
      }
  }

  // If the user is signed and the route is private, than return:
  return (
    <Route
      {...rest}
      component={Component}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  .isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
