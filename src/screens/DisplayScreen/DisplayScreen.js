import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, FontVariant} from 'react-native'
import Logo from '../../../assets/Globe.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Navigation from '../../navigation'
import { useNavigation } from '@react-navigation/native'



const DisplayScreen = () => {



    
    const { height } = useWindowDimensions();
    // Gets the height of the given device(ex. Android versus IOS)
    
    
    const navigation = useNavigation();


    const onGetStartedPressed = () => {
        // This function becomes executed every time the Sign in button gets pressed.
        console.warn("Get Started")
        
        navigation.navigate('SignUp');
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
            onPress={onNumberPressed}

        />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingVertical:50,
        padding: 20,
        flex:1,
        backgroundColor: '#000000'
    },

    title:{
        fontFamily:'Poppins-Black',
        fontSize: 50,
        color: '#FFFFFF',
    },

    sub: {
        fontSize: 16,
        color: '#FFFFFF',
        lineHeight: 24,
        alignContent: 'center'
    },

    logo: {
        width: '90%',
        flex:2,
    },
});

export default DisplayScreen