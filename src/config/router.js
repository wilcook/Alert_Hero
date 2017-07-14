import React, {Component} from 'react';

import {
	StackNavigator
} from 'react-navigation';

import Buttons from '../components/buttons';
import Message from '../components/Message';


export const Stack = StackNavigator({
	Buttons: {
	 screen: Buttons,
	 navigationOptions: {
	 	title: 'Welcome',
	 }
	 
	},
	Message: {
	 screen: Message
	},
});

