import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native'
import Logo from '../../../assets/earth.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Back from '../../../assets/backarrow.png'

const ForgotPassword = () => {
    // A function defining the whole SignUp Page
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('')
    
    const { height } = useWindowDimensions();
    // This Sets the inputted Username and Passwords to a variable "username", "password"

    const navigation = useNavigation();


    const onContinuePressed = () => {
        console.warn('Continue')
    };

    const onCreateAccountPressed = () => {
        console.warn('Create Account')
        navigation.navigate("FullName")
    };

    const onEmailPressed = () =>
    {
        console.warn("Email Pressed")
        navigation.navigate("EmailRecover")
    };
    const onPhoneNumberPressed = () => {
        console.warn('Continue')
        navigation.navigate("MobileRecover")
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
                <Text style= {styles.title}>Forgot Password</Text>
                <Text style= {styles.other}>Recover your password with:</Text>
                <CustomButton
                    text='Phone Number ->'
                    onPress={onPhoneNumberPressed}
                    type= 'PRIMARY'
                />
                <Text style= {styles.small}> or </Text>
                <CustomButton
                    text='Email ->'
                    onPress={onEmailPressed}
                    type= 'PRIMARY'
                />
            </View >
            <View>
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
    
    other: {
        fontSize: 16,
        fontFamily: "Poppins-Black",
        color: "#FFFFFF",
        paddingBottom: 35
    },

    small: {
        fontSize: 16,
        fontFamily: "Poppins-Black",
        color: "#FFFFFF",
        padding: 28,
        textAlign: 'center'
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

export default ForgotPassword