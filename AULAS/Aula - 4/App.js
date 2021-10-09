import React from 'react';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: '',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#fff',
              height: 0,
            },
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{
            title: '',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#fff',
              height: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;