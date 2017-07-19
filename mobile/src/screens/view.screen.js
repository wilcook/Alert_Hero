import { _ } from 'lodash';
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import randomColor from 'randomcolor';

import Message from '../components/message.component';

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: '#fefaf6',
        flex: 1,
        flexDirection: 'column',
    },
});

class Messages extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: state.params.title,
        };
    };

    keyExtractor = item => item.message.id;
    }
}

export default Messages;
