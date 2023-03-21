/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CalendarScreen from '../screens/CalendarScreen';
import GroupScreen from '../screens/GroupScreen';
import PlantScreen from '../screens/PlantScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Plant"
        component={PlantScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="pagelines"
                size={30}
                color={focused ? 'green' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="folder-open"
                size={30}
                color={focused ? 'green' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="calendar"
                size={30}
                color={focused ? 'green' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="user-circle"
                size={30}
                color={focused ? 'green' : 'gray'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

//const styles = StyleSheet.create({});

export default Tabs;
