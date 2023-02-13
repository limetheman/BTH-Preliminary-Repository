import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/earth.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { signUp, auth } from '../../../firebase'

const SignUpScreen = () => {
    // A function defining the whole SignUp Page
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('')
    
    // This Sets the inputted Username and Passwords to a variable "username", "password"

    const navigation = useNavigation();


    const onRegisterPressed = () => {
        console.warn('Register')
        signUp(email, password);
        navigation.navigate("Verify")
    };

    const onSignInPressed = () => {
        console.warn("Back to Sign in")
        navigation.navigate("SignIn")
    };

    return (
        <View style = {styles.root}>
           <Text style= {styles.title}>Create an account</Text>
            <CustomInput 
                placeholder= "Email" 
                value= {email} 
                setValue= {setEmail}/>
            
            <CustomInput 
                placeholder= "Password" 
                value= {password} 
                setValue={setPassword} 
                secureTextEntry={true}/>

            <CustomInput 
                placeholder= "Repeat Password" 
                value= {passwordRepeat} 
                setValue={setPasswordRepeat} 
                secureTextEntry={true}/>

            <CustomButton
                text='Register'
                onPress={onRegisterPressed}
        
        />
            <CustomButton
                text='Have an account? Sign in'
                onPress={onSignInPressed}
                type= 'TERTIARY'
        />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        flex:1,
        backgroundColor: '#000000'
    },
    
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Poppins-Black',
        fontWeight: 'Bold',
        color: '#FFFFFF',
        margin: 10,

    },
});

export default SignUpScreen