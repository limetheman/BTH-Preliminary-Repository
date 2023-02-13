import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native'
import Logo from '../../../assets/earth.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Back from '../../../assets/backarrow.png'

const Code = () => {
    // A function defining the whole SignUp Page
    const [Code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('')
    
    const { height } = useWindowDimensions();
    // This Sets the inputted Username and Passwords to a variable "username", "password"

    const navigation = useNavigation();


    const onContinuePressed = () => {
        console.warn('Continue Pressed')
    };

    const onSignInPressed = () => {
        console.warn("Back to Sign in")
        navigation.navigate("SignIn")
    };

    const onReSendCodePressed = () => {
        console.warn("Resend Code Pressed")
    }
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
                <Text style= {styles.title}>Create an account</Text>
                <Text style= {styles.sub}>What's the 6-digit code?</Text>
                <CustomInput 
                    placeholder= "Enter code sent to your number" 
                    value= {Code} 
                    setValue= {setCode}/>
                <CustomButton
                    type="PURPLE"
                    text="Didn't get the code? Re-send code"
                    onPress={onReSendCodePressed}
                />
            </View >
            <View>
                <CustomButton
                    text='Continue ->'
                    onPress={onContinuePressed}
                />

                <CustomButton
                    text='Have an account? Sign in'
                    onPress={onSignInPressed}
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
    


    title: {
        fontSize: 32,
        fontFamily: 'Poppins-Black',
        fontWeight: 'Bold',
        color: '#FFFFFF',
        paddingVertical: 24,
        justifyContent:'flex-start'

    },

    sub: {
        fontSize: 24,
        fontFamily: 'Poppins-Black',
        fontWeight: 'Bold',
        color: '#FFFFFF',
        paddingVertical: 24,
        justifyContent:'flex-start'
    },

    buttons: {
        flex: 1,
        justifyContent:'flex-end',
        

    }
});

export default Code