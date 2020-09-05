import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030D26',
  },
  headingTextStyle: {alignSelf: 'center', padding: 20, marginBottom: 10},
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
  checkBoxContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkBoxContainerStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  buttonContainer: {
    backgroundColor: '#DE3541',
    marginTop: 20,
    margin: 10,
    padding: 20,
    borderRadius: 50,
    height: 50,
    width: '68%',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: -10,
  },
  termsAndConditionsContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '95%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  termsAndConditionsTextStyle: {
    color: '#3E486F',
    textAlign: 'justify',
    fontSize: 14,
  },
  termsAndConditionsTextContainer: {
    alignSelf: 'center',
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  iconStyle: {marginLeft: 10},
});
export default styles;
