import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headingTextStyle}>
          <Text style={{color: '#8A1F36'}}>
            Exchange your items with friends
          </Text>
        </View>
        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="First & Last Name"
          leftIcon={
            <MaterialIcon
              style={styles.iconStyle}
              name="person"
              size={24}
              color="#ffffff"
            />
          }
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="+44 (0) Phone Number"
          leftIcon={
            <MaterialIcon
              style={styles.iconStyle}
              name="person"
              size={24}
              color="#ffffff"
            />
          }
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Email Address"
          leftIcon={
            <MaterialIcon
              style={styles.iconStyle}
              name="mail"
              size={24}
              color="#ffffff"
            />
          }
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Location"
          leftIcon={
            <MaterialIcon
              style={styles.iconStyle}
              name="location-on"
              size={24}
              color="#ffffff"
            />
          }
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            containerStyle={styles.checkBoxContainerStyle}
            center
            title="Male"
            checkedColor={'#54B735'}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={true}
          />
          <CheckBox
            containerStyle={styles.checkBoxContainerStyle}
            center
            title="Female"
            uncheckedColor={'grey'}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={false}
          />
        </View>

        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Password"
          leftIcon={
            <MaterialIcon
              name="lock-outline"
              style={styles.iconStyle}
              size={24}
              color="#ffffff"
            />
          }
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Confirm Password"
          leftIcon={
            <MaterialIcon
              style={styles.iconStyle}
              name="lock-outline"
              size={24}
              color="#ffffff"
            />
          }
        />
        <View style={styles.termsAndConditionsContainer}>
          <CheckBox
            containerStyle={styles.checkBoxContainerStyle}
            checkedColor={'#54B735'}
            checked={true}
          />
          <Text style={styles.termsAndConditionsTextStyle}>
            By clicking this box you are indicating that you have read and
            agreed to the terms and conditions ,of using this application and
            platform based on the terms and conditions set below
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: 'white'}]}>
          <Text style={[styles.buttonTextStyle, {color: '#DE3541'}]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View style={styles.termsAndConditionsTextContainer}>
          <Text style={{color: '#8A1F36'}}>Terms and Conditions</Text>
        </View>
      </ScrollView>
    );
  }
}
