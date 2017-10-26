import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Route, Redirect, Link} from 'react-router-native';
import {connect} from 'react-redux';
import {isAuth} from '../../store';
// import {decorator} from '../Authenticated'
import paths from '../../paths';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth() ? (
      <Component {...props} />
    ) :
    (
      <Redirect to={{
        pathname: paths.auth,
        state: { from: props.location }
      }}/>
    )
  )}/>
)
const style = StyleSheet.create({
    link:{
        fontSize:30,
        color:"blue"
    }
})
export default PrivateRoute;

/*
(
    <View>
        <Text>
            You can't see this page.
        </Text>
        <Link to={paths.auth}>
            <Text style={style.link}>
                Please auth ->
            </Text>
        </Link>
    </View>
)
*/
