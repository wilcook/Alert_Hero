import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import AppNavigator, { navigationReducer } from './src/navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefaf6',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#102140',
    },
    body: {
        fontSize: 16,
        textAlign: 'right',
        marginBottom: 5,
        color: '#101115',
    },
});

export default class App extends Component {
    render() {
        return(
               <View style={styles.container}>
                   <Text style={styles.welcome}>
                           Welcome!
                           </Text>
                           <Text style={styles.body}>
                               Time marches inexorably forward.
                           </Text>
                       </View>
        );
    }
}
