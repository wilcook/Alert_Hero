import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

/*import Component1 from './app/components/Component1/component1';
*/import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';


export default class alert_hero extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Alert Hero!!
        </Text>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' onPress={() => console.log("notes tapped!")}>
            <Icon name="ios-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#3498db'  onPress={() => {}}>
            <Icon name="ios-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#1abc9c'  onPress={() => {}}>
            <Icon name="ios-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
    width: 22
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('alert_hero', () => alert_hero);