import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter as Router, Route, Link, Redirect} from 'react-router-native';
import InitPage from './containers/InitPage';
import DecrementPage from './containers/DecrementPage';
import AuthForm from './containers/AuthForm';
import Authenticated from './containers/Authenticated';
import {withWelcome} from './containers/Welcome';
import Welcome from './containers/Welcome/Container';
// import NotAuthenticated from './containers/NotAuthenticated';
import PrivateRoute from './containers/PrivateRoute';
import paths from './paths';

export {paths};

export const routes = () => (
    <Router>
        <View>
            <PrivateRoute exact path={paths.home} component={InitPage} />
            <PrivateRoute path={paths.decrement} component={DecrementPage} />
            <Route path={paths.login} component={AuthForm} />
        </View>
    </Router>
);

export default routes;
