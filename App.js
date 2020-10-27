import React from 'react';
import {View} from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import {} from '';

const TabScreen = createMaterialTopTabNavigator(
  {
    News: {screen: NewsPage},
    Map: {screen: MapPage},
  }
)

export default createAppContainer (App);
