import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import ImagesList from './screens/imagesList';
import CameraScreen from './screens/cameraScreen';
import MyImages from './screens/myImages';

const Tab = createBottomTabNavigator();

function Apps() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#aaa',
        }}
      >
        <Tab.Screen
          name="ImagesList"
          component={ImagesList}
          options={{
            title: 'All Images',
            tabBarIcon: () => (
              <Icon name="list" />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="camera" />
            ),
          }}
        />
        <Tab.Screen
          name="MyImages"
          component={MyImages}
          options={{
            title: 'My Images',
            tabBarIcon: () => (
              <Icon name="person" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Apps;
