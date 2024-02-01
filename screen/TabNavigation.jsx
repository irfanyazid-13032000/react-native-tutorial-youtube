import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from "./Todo"
import { FontAwesome } from '@expo/vector-icons';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "blue", tabBarShowLabel: true,
        tabBarShowIcon: true,
      }}
    >

      <Tab.Screen name='Todo' component={Todo}
        options={{
          tabBarLabel:({color})=> (
              <Text style={{color: color, fontSize:12, marginTop: -7}}>Home</Text>
          ),
          tabBarIcon:({color, size})=> (
              <FontAwesome name="home" size={27} color={color} />
          )

      }}
      
      />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarLabel:({color})=> (
              <Text style={{color: color, fontSize:12, marginTop: -7}}>Home</Text>
          ),
          tabBarIcon:({color, size})=> (
              <FontAwesome name="home" size={27} color={color} />
          )

      }}
      
      />

    </Tab.Navigator>
  )
}