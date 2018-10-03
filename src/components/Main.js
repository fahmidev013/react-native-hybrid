import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  }

  render() {
    return (
      <View>
        <Text>It works</Text>
      </View>
    );
  }
}

export default Main;
