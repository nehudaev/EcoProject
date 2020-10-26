import React from 'react';
import {View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default function App() {
    return (
      <View >
        <TabNavigator>
            <TabNavigator.Item>
                <Text>Hi</Text>
            </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
