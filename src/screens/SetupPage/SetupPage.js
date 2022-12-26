import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/earth.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const SetupPage = () => {
    // A function defining the whole SignUp Page
    const [username, setUsername] = useState('');
    
    // This Sets the inputted Username and Passwords to a variable "username", "password"

    const navigation = useNavigation();

    const onSetOncePressed = () => {
        console.warn('Register')
    };

    const onIntervalPressed = () => {
        console.warn("Drop down menu")
    };

    const onStartPressed = () => {
        console.warn("Start Pressed")
        navigation.navigate('Home')
    };
    return (
        <View style = {styles.root}>
            <Text style= {styles.title}>Set a Display Name</Text>
            <CustomInput 
                placeholder= "Username" 
                value= {username} 
                setValue= {setUsername}/>
            <Text style= {styles.title}>Location Preferences</Text>

            
            <CustomButton
                text="Set once"
                onPress={onSetOncePressed}
                />

            <CustomButton
                text="Set at interval"
                onPress={onIntervalPressed}
                />
            
            <CustomButton
                text="Start!"
                onPress={onStartPressed}
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
        color: 'white',
        fontFamily: 'Poppins-Black',
        margin: 10,

    },
});

export default SetupPage