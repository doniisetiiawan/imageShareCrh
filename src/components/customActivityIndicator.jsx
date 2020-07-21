/* eslint-disable react/prop-types */
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

function CustomActivityIndicator(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={{ marginRight: 10 }} />
      <Text>{props.message}</Text>
    </View>
  );
}

export default CustomActivityIndicator;
