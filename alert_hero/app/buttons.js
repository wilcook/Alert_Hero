import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

//importing from npm package Action button module.
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';

class Buttons extends Component {
	render() {
		return(
		    <View style={styles.container}>
		    	<View style={styles.buttonContainer}>
		    		<TouchableOpacity style={styles.button}>
			    		{/*<Text style={styles.buttonText}>
				         	Welcome to Alert Hero!
				        </Text>*/}
			    	</TouchableOpacity>
		    	</View>
		    	
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
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  buttonContainer: {
  	
  },
  button: {
  	width: 100,
  	height: 100,
  	justifyContent: 'center',
  	borderRadius: 50,
  	borderWidth: 5,
  	borderColor: 'green',
  	backgroundColor: 'red',

  }
});

/*AppRegistry.registerComponent('buttons', () => Buttons);
*/
export default Buttons