import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {COLORS,icons} from '../constants'


const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Home}/>
            <Tab.Screen name="Like" component={Home}/>
            <Tab.Screen name="User" component={Home}/>
        </Tab.Navigator>
    )
}

export default Tabs;