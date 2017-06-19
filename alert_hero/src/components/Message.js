import React, {Component} from 'react';
import {
	AppRegistry,
	TextInput,
	StyleSheet,
	View,
	Text
} from 'react-native';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		return (
			<View>
				<TextInput style={styles.inputText} 
				placeholder= "Type here"
				onChangeText={(text) => this.setState({text})}
				/>
					
				<Text style={styles.messageBox}>
					{this.state.text.split(' ').map((word) => word)}
				</Text>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
	},
	inputText: {
		alignContent: 'flex-end',
		height: 40,
		padding: 10,
	},
	messageBox: {
		
		fontSize: 42,

	}
});

export default Message