import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login/Login.js';
import TelaPrincipal from './screens/TelaPrincipal/TelaPrincipal.js';
import OverlaySobre from './screens/OverlaySobre/OverlaySobre.js';
import OverlayDesistir from './screens/OverlayDesistir/OverlayDesistir.js';
import CreateAcc from './screens/CreateAcc/CreateAcc.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleStyle: { color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular' },
          headerStyle: { backgroundColor: '#2B1D62', height: 65 },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="OverlaySobre" component={OverlaySobre} options={{ ...TransitionPresets.ModalSlideFromBottomIOS, }} />
        <Stack.Screen name="OverlayDesistir" component={OverlayDesistir} />
        <Stack.Screen name="CreateAcc" component={CreateAcc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}