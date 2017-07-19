import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	TouchableOpacity,
  Image,
  Alert,
	View
} from 'react-native';

//importing from npm package Action button module.
export default class Buttons extends Component {
  
    _onPress() {
      Alert.alert('Hello World!!')
    }
	render() {
		return(

		    <Image source={require('../images/Mtsinai.png')} style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonRed} onPress={this._onPress}></TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonAmber} onPress={this._onPress}></TouchableOpacity>
           
            <TouchableOpacity style={styles.buttonGreen} onPress={this._onPress}></TouchableOpacity>
          </View>
      </Image>
		    	
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
    position: 'relative',
    resizeMode: 'center',
    backgroundColor: '#faf0e6'
  },
  buttonContainer: {
    flex: 1,
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



