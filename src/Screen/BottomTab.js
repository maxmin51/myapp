import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Settings from './tabs/Settings';
import Alarm from './tabs/Alarm';
import Activity from './tabs/Activity';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Alarm} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.screen name="Activity" component={Activity} />
    </Tab.Navigator>
  );
}

export default function BottomTab() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
