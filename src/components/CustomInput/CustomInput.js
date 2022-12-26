import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style= {styles.container}>
            <TextInput 
                value= {value}
                onChangeText={setValue}
                placeholder = {placeholder}
                style={styles.input}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'white',
        backgroundColor: 'black',
        width:'100%',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius:12,
        paddingHorizontal:10,
        paddingVertical:14,
        marginVertical:5
        },
    input:{
        color: 'white',
        fontFamily: 'Poppins-Black'
        

    },
});

export default CustomInput