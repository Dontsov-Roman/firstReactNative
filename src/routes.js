import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter as Router, Route, Link, Redirect} from 'react-router-native';
import InitPage from './containers/InitPage';
import DecrementPage from './containers/DecrementPage';

export const paths = {
    home:'/',
    decrement:'/decrement'
};
export const routes = () => (
    <Router>
        <View>
            <Route exact path={paths.home} component={InitPage} />
            <Route path={paths.decrement} component={DecrementPage} />
        </View>
    </Router>
);
export default routes;
