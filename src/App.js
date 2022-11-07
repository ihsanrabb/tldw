/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login";
import TenantLoginScreen from './screens/TenantLogin';
import TenantSignupScreen from './screens/TenantSignup';
import CustomerLogin from './screens/CustomerLogin';
import CustomerSignup from './screens/CustomerSignup';
import HomeScreen from './screens/Home';
import IntroUserScreen from './screens/IntroUser';
import { getData } from './utils/storage';


const Stack = createNativeStackNavigator();

const App = () => {
  const [isLogin, setLogin] = React.useState(false);

  React.useEffect(() => {
    getAccessUser();
  }, [])

  const getAccessUser = async () => {
    const accessToken = await getData('user_data');
    console.log('accessToken', accessToken)
    if (accessToken) {
      setLogin(true);
    }
    console.log('getAccessUser', accessToken)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroUserScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* {!isLogin && (
          <Stack.Screen name="Login" component={LoginScreen} />
        )} */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerBackVisible: false }} />
        <Stack.Screen name="TenantLogin" component={TenantLoginScreen} />
        <Stack.Screen name="TenantSignup" component={TenantSignupScreen} />
        <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
        <Stack.Screen name="CustomerSignup" component={CustomerSignup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
