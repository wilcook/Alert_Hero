import React, { Component } from 'react';
import { 
	AppRegistry, 
	StyleSheet, 
	Text, 
	View,
	Alert,
} from 'react-native';

/*import Component1 from './app/components/Component1/component1';
*/import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';


export default class alert_hero extends Component {
	 /*$onPressButton() {
    Alert.alert('You tapped the button!')
  };*/

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Alert Hero!!
        </Text>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#ff0000' onPress={() => {Alert.alert('You tapped the button!')}}>
            <Icon name="ios-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#ffbf00'  onPress={() => {}}>
            <Icon name="ios-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#008000'  onPress={() => {}}>
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
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('alert_hero', () => alert_hero);