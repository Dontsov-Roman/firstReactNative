import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { Redirect } from 'react-router-native';
import * as actions from '../../actions/user';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user && props.user.name ? props.user.name : '',
      redirectToReferer: false,
    };
  }
  login = name => {
    const { onLogin } = this.props;
    if (onLogin) {
      onLogin(name);
      this.setState({ redirectToReferer: true });
    }
  };
  render() {
    const { name, redirectToReferer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    return redirectToReferer ? (
      <Redirect to={from} />
    ) : (
      <View>
        <Text>Please enter your name</Text>
        <TextInput
          placeholder="Type name here"
          onChangeText={name => this.setState({ name })}
          value={name}
        />
        <Button title="Login" color="#ff0000" onPress={() => this.login(name)} />
      </View>
    );
  }
}
