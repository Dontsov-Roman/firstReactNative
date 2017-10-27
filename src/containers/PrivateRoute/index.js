import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Route, Redirect, Link} from 'react-router-native';
import {connect} from 'react-redux';
import {isAuth} from '../../store';
import AccessDenied from '../../components/AccessDenied';
// import {decorator} from '../Authenticated'
import paths from '../../paths';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth() ? (
      <Component {...props} />
    )
    :
    (
        <Redirect to={{
          pathname: paths.login,
          state: { from: props.location }
        }}/>
    )
  )}/>
)

export default PrivateRoute;

/*
<Redirect to={{
  pathname: paths.login,
  state: { from: props.location }
}}/>
*/
