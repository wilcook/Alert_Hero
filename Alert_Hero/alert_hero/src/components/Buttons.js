import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	TouchableOpacity,
  Alert,
	View
} from 'react-native';

//importing from npm package Action button module.
class Buttons extends Component {
    _onPress() {
      Alert.alert('Hello World!!')
    }
	render() {
		return(
		    <View style={styles.container}>
		    	<View style={styles.buttonContainer}>
		    		<TouchableOpacity style={styles.buttonRed} onPress={this._onPress}></TouchableOpacity>

            <TouchableOpacity style={styles.buttonAmber} onPress={this._onPress}></TouchableOpacity>

            <TouchableOpacity style={styles.buttonGreen} onPress={this._onPress}></TouchableOpacity>
          </View>
		    </View>
		);
	}
}

/*AppRegistry.registerComponent('buttons', () => Buttons);
*/
export default Buttons
