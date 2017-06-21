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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da70d6'
  },
  buttonContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
  	alignItems: 'center'
  },
  buttonRed: {
  	width: 100,
  	height: 100,
  	justifyContent: 'space-between',
  	borderRadius: 50,
  	borderWidth: 2,
  	borderColor: 'black',
  	backgroundColor: '#ff0000',
    elevation: 10

  },
  buttonAmber: {
    width: 100,
    height: 100,
    justifyContent: 'space-between',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#FFC200',
    marginTop: 50,
    elevation: 10

  },
  buttonGreen: {
    width: 100,
    height: 100,
    justifyContent: 'space-between',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#008000',
    marginTop: 50,
    elevation: 10
  }
});

/*AppRegistry.registerComponent('buttons', () => Buttons);
*/
export default Buttons