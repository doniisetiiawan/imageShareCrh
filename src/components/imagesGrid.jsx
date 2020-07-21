/* eslint-disable react/prop-types */
import React from 'react';
import {
  Dimensions, Image, ScrollView, StyleSheet, View,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  image: {
    width: width / 3 - 2,
    margin: 1,
    height: width / 3 - 2,
    resizeMode: 'cover',
  },
});

function ImagesGrid(props) {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        {props.images
        && props.images.map((img) => (
          <Image
            style={styles.image}
            key={img.id}
            source={{ uri: img.src }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default ImagesGrid;
