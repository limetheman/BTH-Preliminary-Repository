import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/earth.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    // A function defining the whole SignUp Page
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('')
    
    // This Sets the inputted Username and Passwords to a variable "username", "password"

    const navigation = useNavigation();


    const sendCodePressed = () => {
        console.warn('Verify')
        navigation.navigate("Setup")
    };


    return (
        <View style = {styles.root}>
           <Text style= {styles.title}>Forgot Password</Text>
            <CustomInput 
                placeholder= "Email" 
                value= {email} 
                setValue= {setEmail}/>
            



            <CustomButton
            text = 'Send Code to Email'
            onPress={sendCodePressed}
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
        fontSize: 24,
        fontWeight: 'Bold',
        color: '#051C60',
        margin: 10,

    },
});

export default ForgotPassword