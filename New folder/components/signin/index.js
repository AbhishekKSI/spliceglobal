import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <Input
          containerStyle={[styles.inputContainerStyle, {marginBottom: 25}]}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="First & Last Name"
          leftIcon={<MaterialIcon name="person" size={24} color="#ffffff" />}
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainerContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Password"
          leftIcon={
            <MaterialIcon name="lock-outline" size={24} color="#ffffff" />
          }
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpTextStyle}>
            Don't have an account? SignUp
          </Text>
        </View>
      </ScrollView>
    );
  }
}
