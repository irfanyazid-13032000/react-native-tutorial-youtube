import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login,Signup,Welcome} from './screen'
import Todo from './screen/Todo'
import { Provider } from 'react-redux';
import store from './slice/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Profile from './screen/Profile';



const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export function TabNavigate(){
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
      <Tab.Screen name='profile' component={Profile}
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


export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='TabNavigate' component={TabNavigate} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


