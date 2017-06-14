import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Component1 from './app/components/Component1/component1';

export default class alert_hero extends Component {
  render() {
    return (
      <View>
         <Component1/>
      </View>
     
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('alert_hero', () => alert_hero);