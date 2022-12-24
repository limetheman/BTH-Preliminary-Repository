import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/Globe.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Navigation from '../../navigation'
import { useNavigation } from '@react-navigation/native'


const SignInScreen = () => {
    // A function defining the whole SignInScreen 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // This Sets the inputted Username and Passwords to a variable "username", "password"

    const { height } = useWindowDimensions();
    // Gets the height of the given device(ex. Android versus IOS)
    
    
    const navigation = useNavigation();


    const onSignInPressed = () => {
        // This function becomes executed every time the Sign in button gets pressed.
        console.warn("Sign in")
        
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        // This Function becomes executed every time the Forgot Password button gets pressed
        console.warn('onForgotPasswordPressed')
        navigation.navigate('ForgotPass')
    };

    const onSignUpPressed = () => {
        console.warn('Sign Up')
        navigation.navigate('SignUp')

    }

    return (
        <View style = {styles.root}>
            <Image
                source={Logo}
                style= {[styles.logo, {height: height * 0.33}]}
                resizeMode="contain"
            />
            <CustomInput 
                placeholder= "Username" 
                value= {username} 
                setValue= {setUsername}/>
            <CustomInput 
                placeholder= "Password" 
                value= {password} 
                setValue={setPassword} 
                secureTextEntry={true}/>


        <CustomButton
            text='Sign In'
            onPress={onSignInPressed}
        
        />
        <CustomButton
            text='Forgot Password'
            onPress={onForgotPasswordPressed}
            type= "TERTIARY"
        />

        <CustomButton 
            text="Don't have an account? Sign Up Now!"
            onPress={onSignUpPressed}
            type="TERTIARY"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        flex:1,
        backgroundColor: '#000000',
    },
    
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
        marginBottom: 20,
    }
})

export default SignInScreen