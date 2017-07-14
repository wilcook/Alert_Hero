import React, {Component} from 'react';
import { 
  AppRegistry,
  TextInput,
  StyleSheet
} from 'react-native';

export default class Message extends Component{
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render () {
    return (
      <TextInput 
        style={styles.userInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create ({
  userInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }

});