// eslint-disable-next-line max-len
/* eslint-disable react/jsx-filename-extension,react/style-prop-object,global-require,import/no-extraneous-dependencies */
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import Apps from './src/main';
import imagesReducer from './src/reducers/images';

const store = createStore(
  combineReducers({ imagesReducer }),
  applyMiddleware(thunk),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  componentDidMount = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Apps />
        </Provider>
      </View>
    );
  }
}
