import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, FontVariant } from 'react-native'
import Logo from '../../../assets/Globe.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Navigation from '../../navigation'
import { useNavigation } from '@react-navigation/native'



const DisplayScreen = () => {



    
    const { height } = useWindowDimensions();
    // Gets the height of the given device(ex. Android versus IOS)
    
    
    const navigation = useNavigation();

    /* Check if there is a user already signed in:
        1) If signed in, check if verified. If verified, navigate home.
        2) If signed in but not verified, don't do anything. (Check during log in)
        3) If no one is signed in, stay on this page.
    */
    const onGetStartedPressed = () => {
        // This function becomes executed every time the Sign in button gets pressed.
        console.warn("Get Started")
        
        navigation.navigate('FullName');
    };

    const onNumberPressed = () => {
        // This function becomes executed every time the Sign in button gets pressed.
        console.warn("Get Started")
        
        navigation.navigate('SignIn');
    };


    return (
        <View style = {styles.root}>
            <Text style= {styles.title}> Back To Hue</Text>
            <Text style = {styles.sub}> Using color to connect people around the world</Text>
            <Image
                source={Logo}
                style= {[styles.logo, {height: height * 0.33}]}
                resizeMode="contain"
            />



        <CustomButton
            text='Get Started'
            onPress={onGetStartedPressed}
        />
        <CustomButton
            text="This isn't your first time here? Log in"
            type= "TERTIARY"
            onPress={onNumberPressed}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingVertical:20,
        padding: 20,
        flex:1,
        backgroundColor: '#000000'
    },

    title:{
        fontFamily:'Poppins-Black',
        fontSize: 50,
        width:326,
        lineHeight:72,
        alignContent:'center',
        color: '#FFFFFF',
        padding:1,

    },

    sub: {
        fontFamily: 'Poppins-Regular',
        fontStyle:'bold',
        fontSize: 18,
        lineHeight: 20,
        color: '#FFFFFF',
        lineHeight: 24,
        alignContent: 'center',
        textAlign: 'center',
        padding: 3,
    },

    logo: {
        width: '100%',
        flex:1,
        alignContent:'center',
        justifyContent:'flex-start'
    },
});

export default DisplayScreen