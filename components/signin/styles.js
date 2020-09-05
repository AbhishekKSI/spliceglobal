import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#030D26',
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainerStyle: {
    backgroundColor: '#3C4A69',
    borderRadius: 50,
    marginLeft: 40,
    marginRight: 20,
    width: '80%',
    height: 50,
    marginBottom: 10,
  },
  inputContainerContainerStyle: {
    borderBottomColor: 'transparent',
  },
  inputStyle: {
    textAlign: 'center',
  },
  checkBoxContainerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  buttonContainer: {
    backgroundColor: '#DE3541',
    marginTop: 50,
    margin: 10,
    padding: 20,
    borderRadius: 50,
    height: 50,
    width: '55%',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: -10,
  },
  signUpTextContainer: {
    alignSelf: 'center',
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  signUpTextStyle: {color: '#ffffff', fontSize: 16},
});
export default styles;
