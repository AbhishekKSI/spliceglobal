import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030D26',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  editTextStyle: {color: 'white', fontSize: 16},
  imageContainer: {alignItems: 'center', marginBottom: 60, marginTop: 20},
  imageStyle: {width: 120, height: 120, borderRadius: 80},
  profileTextStyle: {fontSize: 24, color: '#ffffff', marginTop: 10},
  itemSeparatorStyle: {width: '100%', height: 0.4, backgroundColor: '#ffffff'},
  listContainer: {
    backgroundColor: '#DB3546',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTextStyle: {color: '#ffffff'},
});
export default styles;
