/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { Camera } from 'expo-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
});

function CameraScreen(props) {
  return (
    <View style={styles.container}>
      <Camera
        style={styles.preview}
      >
        <Button
          style={{ flex: 0, alignSelf: 'center' }}
          transparent
        >
          <Icon
            name="camera"
            style={{ fontSize: 70, color: 'white' }}
          />
        </Button>
      </Camera>
      <Button
        onPress={() => props.navigation.navigate('ImagesList')}
        style={{ position: 'absolute', top: 20 }}
        transparent
      >
        <Icon
          ios="ios-arrow-dropleft"
          android="md-arrow-dropleft"
          style={{ fontSize: 30, color: 'white' }}
        />
      </Button>
    </View>
  );
}

export default CameraScreen;
