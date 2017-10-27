import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Welcome extends Component {
  static defaultProps = {
    name: 'Anonymous',
  };

  render() {
    const { name } = this.props;
    return (
      <View>
        <Text>Welcome, {name}!</Text>
      </View>
    );
  }
}
