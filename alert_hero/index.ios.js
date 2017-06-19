import React, { Component } from 'react';
import { 
	AppRegistry, 
	Text 
	 
} from 'react-native';

import Message from './src/components/Message';

export default class alert_hero extends Component {
  render() {
    return (
     
        
         <Message />
     
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('alert_hero', () => alert_hero);

