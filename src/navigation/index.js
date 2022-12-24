import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen';
import SetupPage from '../screens/SetupPage';
import HomeScreen from '../screens/HomeScreen';
import EmailVerification from '../screens/EmailVerification';
import ForgotPassword from '../screens/ForgotPassword';
import DisplayScreen from '../screens/DisplayScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Display' component={DisplayScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="ForgotPass" component ={ForgotPassword}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="Setup" component={SetupPage}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Verify" component={EmailVerification}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;