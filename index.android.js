/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry
} from 'react-native';

import store from './src/store';
import Routes from './src/routes';

export default class firstProject extends Component {
  render() {
    return (
    <Provider store={store()}>
        <Routes />
    </Provider>
    );
  }
}

AppRegistry.registerComponent('firstProject', () => firstProject);
