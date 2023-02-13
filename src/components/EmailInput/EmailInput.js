import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const EmailInput = ({value, setValue, placeholder, secureTextEntry}) => {
    
    return (
        <View style= {styles.container}>
            <TextInput 
                value= {value}
                onChangeText={(Val) => {setValue(Val); isEmail(Val)}}
                placeholder = {placeholder}
                placeholderTextColor = {'#7f7f7f'}
                style={styles.input}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    );
};

function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
        console.log("Not Valid");
        
    }
}

const styles = StyleSheet.create({
    container: {
        color: 'white',
        backgroundColor: 'black',
        width:'100%',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginVertical: 5,
        },
    input:{
        color: 'white',
        fontFamily: 'Poppins-Black'
        
        

    },
});

export default EmailInput