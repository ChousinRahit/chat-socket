import React from 'react';

//👇🏻 app screens
import Login from './src/screens/Login';
import Messaging from './src/screens/Messaging';
import Chat from './src/screens/Chat';

//👇🏻 React Navigation configurations
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  // AsyncStorage.removeItem('username');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            title: 'Chats',
            headerShown: false,
          }}
        />
        <Stack.Screen name="Messaging" component={Messaging} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
