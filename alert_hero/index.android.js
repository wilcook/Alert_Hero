import React, { Component } from 'react';
import { 
	AppRegistry,  
	 
} from 'react-native';

import Buttons from './app/buttons';

export default class alert_hero extends Component {
  render() {
    return (
     
         <Buttons />
     
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('alert_hero', () => alert_hero);


