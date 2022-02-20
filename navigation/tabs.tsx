import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

/**
 * It takes in a boolean and an icon, and returns a React element
 * @param {boolean} focused - boolean
 * @param {any} icon - The icon to be displayed.
 * @returns A function that returns a component.
 */
const tabBarIcon = (focused:boolean, icon:any) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: 25,
        height: 25,
        tintColor: focused ? COLORS.primary : COLORS.secondary,
      }}
    />
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.cutlery),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.search),
        }}
      />
      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.like),
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.user),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
