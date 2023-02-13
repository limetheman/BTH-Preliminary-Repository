import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen'
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import DisplayScreen from '../screens/DisplayScreen';
import Username from '../screens/UsernameScreen/Username';
import FullName from '../screens/FullNameScreen/FullName';
import Email from '../screens/EmailScreen/Email';
import Password from '../screens/PasswordScreen/PasswordScreen';
import ContactsScreen from '../screens/ContactsScreen/Contacts'
import Verify from '../screens/Verify';
import Mobile from '../screens/MobileScreen/Mobile';
import Code from '../screens/CodeScreen/Code';
import MobileRecover from '../screens/MobileRecover';
import EmailRecover from '../screens/EmailRecover';
import Globe from '../screens/Globe';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Display' component={DisplayScreen}/>
            <Stack.Screen name="FullName" component={FullName}/>
            <Stack.Screen name="Username" component={Username}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="ForgotPass" component ={ForgotPassword}/>
            <Stack.Screen name="Email" component={Email}/>
            <Stack.Screen name="Password" component={Password}/>
            <Stack.Screen name="Contacts" component={ContactsScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Verify" component={Verify}/>
            <Stack.Screen name="Mobile" component={Mobile}/>
            <Stack.Screen name="Code" component={Code}/>
            <Stack.Screen name="MobileRecover" component={MobileRecover}/>
            <Stack.Screen name="EmailRecover" component={EmailRecover}/>
            <Stack.Screen name="Globe" component={Globe}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;