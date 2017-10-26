import React from 'react';
import {Route, Redirect} from 'react-router-native';
import {connect} from 'react-redux';
import {isAuth} from '../../store';
// import {decorator} from '../Authenticated'
import paths from '../../paths';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: paths.auth,
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;
// export default decorator(PrivateRoute);
