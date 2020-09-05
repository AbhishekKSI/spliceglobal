import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [
        {field: 'First and LastName', value: 'Saidaq Ahmed'},
        {field: 'Phone Number', value: '00 222 222 33322'},
        {field: 'Gender', value: 'Male'},
        {field: 'Country', value: 'Afganistan'},
      ],
    };
  }
  renderList = ({item}) => {
    return (
      <>
        <View style={styles.listContainer}>
          <Text style={styles.itemTextStyle}>{item.field}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.itemTextStyle}>{item.value}</Text>
            <Icon name="chevron-right" size={22} color="#a39f9f" />
          </View>
        </View>
      </>
    );
  };
  itemSeparator = () => {
    return <View style={styles.itemSeparatorStyle} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.editTextStyle}>Edit</Text>
          <Icon name="power-settings-new" size={23} color="#ffffff" />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/person.jpg')}
            style={styles.imageStyle}
          />
          <Text style={styles.profileTextStyle}>Robert De Costa</Text>
        </View>
        <FlatList
          data={this.state.profileData}
          renderItem={this.renderList}
          ItemSeparatorComponent={this.itemSeparator}
        />
      </View>
    );
  }
}
