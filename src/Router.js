import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from './Screen/tabs/UserProfile/UserProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

//tab
import BedTime from './Screen/tabs/Alarm/Bedtime';
import Settings from './Screen/tabs/Settings';
import ListAlarm from './Screen/tabs/ListAlarm';
import Activity from './Screen/tabs/Activity';

import index from './Screen/tabs/ListAlarm/index';
import Lists from './Screen/tabs/ListAlarm/Lists';
import About from './Screen/tabs/About/About';
import Options from './Screen/tabs/Alarm/Options/Options';


const AlarmStack = createStackNavigator();
function AlarmStackScreen() {
  return (
    <AlarmStack.Navigator>
      <AlarmStack.Screen name="BedTime" component={BedTime} />
      <AlarmStack.Screen name="Options" component={Options} />
    </AlarmStack.Navigator>
  );
}


const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="UserProfile" component={UserProfile} />
      <SettingsStack.Screen name="About" component={About} />
    </SettingsStack.Navigator>
  );
}
const ListStack = createStackNavigator();
function ListAlarmStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="ListAlarm" component={ListAlarm} />
      <ListStack.Screen name="index" component={index} />
    </ListStack.Navigator>
  );
}


const ActivityStack = createStackNavigator();
function ActivityStackScreen() {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen name="Activity" component={Activity} />
    </ActivityStack.Navigator>
  );
}




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Alarm') {
            iconName = 'ios-alarm';
          }
          else if (route.name === 'ListAlarms') {
            iconName = 'ios-list-box';
          }
          else if (route.name === 'Activity') {
            iconName = 'ios-stats';
          }
          else if (route.name === 'Settings') {
            iconName = 'ios-settings'

          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Alarm" component={AlarmStackScreen} />
      <Tab.Screen name="ListAlarms" component={ListAlarmStackScreen} />
      <Tab.Screen name="Activity" component={ActivityStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

function Router() {
  return (
    <MyTabs />
  )
}

export default Router;

