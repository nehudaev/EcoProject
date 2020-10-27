import React from 'react';
import {View} from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import {NewsPage} from './Tabs/News/News';
import {MapPage} from './Tabs/Map/Map';

const TabScreen = createMaterialTopTabNavigator(
  {
    News: {screen: NewsPage},
    Map: {screen: MapPage},
  }
)

export default createAppContainer (App);
