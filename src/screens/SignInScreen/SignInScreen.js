import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native'
import Logo from '../../../assets/earth.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Back from '../../../assets/backarrow.png'
import { signIn, auth } from "../../../firebase";

const SignIn = () => {
    // A function defining the whole SignUp Page
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('')
    
    const { height } = useWindowDimensions();
    // This Sets the inputted Username and Passwords to a variable "username", "password"

    const navigation = useNavigation();


    const onContinuePressed = () => {
        console.warn('Continue')
        navigation.navigate('Globe')
    };

    const onCreateAccountPressed = () => {
        console.warn('Create Account')
        navigation.navigate("FullName")
    };

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Pass')
        navigation.navigate("ForgotPass")
    }; 

    const onArrowPressed = () => {
        console.warn("Back Arrow")
        navigation.navigate("Display")
    };

    return (
        <View style = {styles.root}>
            <View>
                <TouchableOpacity onPress={onArrowPressed}>
                <Image
                    source= {Back}
                    resizeMode= 'contain'
                    style= {[styles.logo, {height: height * .04}]}
                />
                </TouchableOpacity>
            </View>
            <View style = {styles.root}>
                <Text style= {styles.title}>Log in</Text>
                <Text style= {styles.small}>What's your mobile number?</Text>
                <CustomInput 
                    placeholder= "Enter Password" 
                    value= {password} 
                    setValue= {setPassword}
                    secureTextEntry={true}
                    />
                <Text style= {styles.small}>What's your password?</Text>
                <CustomInput 
                    placeholder= "Enter Password" 
                    value= {passwordRepeat} 
                    setValue= {setPasswordRepeat}
                    secureTextEntry={true}/>
                <CustomButton
                    text='Forgot Password?'
                    onPress={onForgotPasswordPressed}
                    type= 'PURPLE'

                />
            </View >
            <View>
                <CustomButton
                    text='Continue ->'
                    onPress={onContinuePressed}
                />

                <CustomButton
                    text='First time here? Create an Account'
                    onPress={onCreateAccountPressed}
                    type= 'TERTIARY'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 16,
        flex:1,
        flexDirection:'column',
        backgroundColor: '#000000'
    },
    
    small: {
        fontSize: 16,
        fontFamily: "Poppins-Black",
        color: "#FFFFFF",
        paddingTop: 28,
    },

    title: {
        fontSize: 32,
        fontFamily: 'Poppins-Black',
        color: '#FFFFFF',
        paddingVertical: 24,
        justifyContent:'flex-start'

    },
    sub: {
        fontSize: 24,
        fontFamily: 'Poppins-Black',
        color: '#FFFFFF',
        paddingVertical: 24,
        justifyContent:'flex-start'
    },

    buttons: {
        flex: 1,
        justifyContent:'flex-end',
        

    }

});

export default SignIn