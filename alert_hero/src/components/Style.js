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
  },
  inputText: {
    alignContent: 'flex-end',
    height: 40,
    padding: 10,
  },
  messageBox: {

    fontSize: 42,

  },
});

export default Style
