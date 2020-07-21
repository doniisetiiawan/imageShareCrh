/* eslint-disable react/prop-types */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import logo from '../logo.png';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    height: 25,
    resizeMode: 'contain',
    margin: 10,
  },
});

function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

export default Header;
