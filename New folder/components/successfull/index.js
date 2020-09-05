import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class Successful extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.successfullTextContainer}>
          <Text style={styles.successfullTextStyle}>Successful !</Text>
        </View>
      </View>
    );
  }
}
